---
title: Go Tips! Copie récursive d'un répertoire
slug: golang-tips-copie-recursive-repertoire
authors: germain
tags:
  - golang
  - tips
---

En Go, il est possible de copier un répertoire de manière récursive. Cela peut être utile pour dupliquer un répertoire et son contenu, par exemple pour faire une sauvegarde ou pour déplacer des fichiers.
Pourquoi réinventer la roue alors que d'autres l'ont déjà implémenté de manière efficace et élégante ?

<!-- truncate -->

## Problématique

Il n'existe pas de fonction native en Go pour copier un répertoire de manière récursive. Il faut donc écrire une fonction qui parcourt les fichiers et les sous-répertoires pour les copier un par un.

## Solution

Le code source de Docker propose une implémentation avancée de copie récursive des fichiers et répertoires.

Voici les avantages qu'elle présente :

* Génère une erreur sur un type de fichier non pris en charge
* Préserve les autorisations
* Préserve les attributs étendus
* Préserve l'horodatage

En se basant dessus, on a une solution complète pour copier le contenu d'un répertoire de manière récursive.

```go
source := "/path/to/source"
destination := "/path/to/destination"
CopyDirectory(source, destination)
// Le contenu du répertoire source/ est copié dans le répertoire destination/
```

```go
func Copy(srcFile, dstFile string) error {
    out, err := os.Create(dstFile)
    if err != nil {
        return err
    }

    defer out.Close()

    in, err := os.Open(srcFile)
    if err != nil {
        return err
    }

    defer in.Close()

    _, err = io.Copy(out, in)
    if err != nil {
        return err
    }

    return nil
}

func CopyDirectory(scrDir string, dest string) error {
    entries, err := os.ReadDir(scrDir)
    if err != nil {
        return err
    }
    for _, entry := range entries {
        sourcePath := filepath.Join(scrDir, entry.Name())
        destPath := filepath.Join(dest, entry.Name())

        fileInfo, err := os.Stat(sourcePath)
        if err != nil {
            return err
        }

        switch fileInfo.Mode() & os.ModeType {
        case os.ModeDir:
            if err := CreateIfNotExists(destPath, 0755); err != nil {
                return err
            }
            if err := CopyDirectory(sourcePath, destPath); err != nil {
                return err
            }
        case os.ModeSymlink:
            if err := CopySymLink(sourcePath, destPath); err != nil {
                return err
            }
        default:
            if err := Copy(sourcePath, destPath); err != nil {
                return err
            }
        }

        fInfo, err := entry.Info()
        if err != nil {
            return err
        }

        isSymlink := fInfo.Mode()&os.ModeSymlink != 0
        if !isSymlink {
            if err := os.Chmod(destPath, fInfo.Mode()); err != nil {
                return err
            }
        }
    }
    return nil
}

func Exists(filePath string) bool {
    if _, err := os.Stat(filePath); os.IsNotExist(err) {
        return false
    }

    return true
}

func CreateIfNotExists(dir string, perm os.FileMode) error {
    if Exists(dir) {
        return nil
    }

    if err := os.MkdirAll(dir, perm); err != nil {
        return fmt.Errorf("failed to create directory: '%s', error: '%s'", dir, err.Error())
    }

    return nil
}

func CopySymLink(source, dest string) error {
    link, err := os.Readlink(source)
    if err != nil {
        return err
    }
    return os.Symlink(link, dest)
}
```

Cette implémentation est simple et efficace, et je l'utilise dans les projets Go sur lesquels je contribue.

## Pour aller plus loin

Cette approche nécessite des dépendances qui peuvent peser dans votre projet. Si c'est une application web, ce la ne posera aucun problème. Mais si c'est une application CLI, cela peut être un inconvénient car les dépendances alourdissent le binaire. On parle de de 10Mo à 20Mo pour les dépendances en question, rien de dramatique mais cela peut être un point à prendre en compte.

Une amélioration intéressante serait de fournir la même fonctionnalité mais en réduisant la taille du binaire final. Pour cela, il faudrait réécrire la fonction de copie récursive sans dépendances.
