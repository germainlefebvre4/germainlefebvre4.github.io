---
title: Py Tips! L'authentification avec pip
slug: python-tips-authentification-pip
authors: germain
tags:
  - python
  - tips
---

Les utilisateurs de Python un package manager pour installer des packages Python. Historiquement, `pip` est le package manager le plus utilisé pour installer des packages Python. La grande majorité des packages Python sont disponibles sur le Python Package Index (PyPI). Mais parfois, et souvent pour des raisons professionnelles, il est nécessaire de se connecter à un dépôt privé pour installer des packages.

<!-- truncate -->

## Problématique

Je dois m'autentifier auprès d'un dépôt privé (dépôt d'entreprise par exemple) pour installer des packages Python. Comment puis-je m'authentifier avec `pip` ?

## Solution

De base, pip n'utilise aucune méthode d'authentification pour récupérer les packages sur les dépôts publics.

Pour s'authentifier auprès d'un dépôt privé, il faut éditer et ajouter les informations de connexion dans le fichier `~/.pip/pip.conf` ou `~/.config/pip/pip.conf` (s'il n'existe pas, il faut le créer).

Vous pouvez obliger toutes les requêtes pip à s'authentifier :

```ini
[global]
index-url = https://pypi.example.com/simple/
trusted-host = pypi.example.com
```

Vous pouvez aussi spécifier des informations d'authentification pour un dépôt spécifique :

```ini
[global]
index-url = https://pypi.example.com/simple/
trusted-host = pypi.example.com

[pypi.example.com]
username = user
password = pass
```

## Pour aller plus loin

Dans un prochain article, je vous montrerai comment s'authentifier avec Poetry, un autre package manager pour Python.
