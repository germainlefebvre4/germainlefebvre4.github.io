---
title: Go Tips! Convertir une interface en string
slug: golang-tips-convertir-interface-string
authors: germain
tags:
  - golang
  - tips
---


En Go, il est parfois nécessaire de convertir une valeur d'interface en chaîne de caractères. Par exemple, lorsqu'on veut afficher la valeur d'une interface dans un log ou dans une autre chaîne de caractères.

<!-- truncate -->

## Problématique

Spontanément, on aimerait caster la valeur d'interface en string.

```go
var x interface{} = "abc"
str := x.(string)
```

Mais cette méthode ne passe pas au travers du Linter [`golangci-lint`](https://golangci-lint.run). Il retourne une erreur de type `errcheck` et refuse de continuer. Hormis désactiver cette règle du linter, il existe une autre méthode pour convertir une valeur d'interface en chaîne de caractères.

## Solution

Utilisez `fmt.Sprintf` pour convertir une valeur d'interface en chaîne.

```go
var x interface{} = "abc"
str := fmt.Sprintf("%v", x)
```

On peut utiliser le même procédé pour obtenir une représentation sous forme de chaîne de n'importe quelle structure de données.

```go
var x interface{} = []int{1, 2, 3}
str := fmt.Sprintf("%v", x)
fmt.Println(str) // "[1 2 3]"
```

Avec cette approche, on évite les erreurs du linter et on obtient bien une chaîne de caractères.
