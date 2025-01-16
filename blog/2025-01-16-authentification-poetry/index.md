---
title: Py Tips! L'authentification avec poetry
slug: python-tips-authentification-poetry
authors: germain
tags:
  - python
  - tips
---

Les utilisateurs de Python un package manager pour installer des packages Python. Historiquement, `pip` est le package manager le plus utilisé mais des alternatives plus performantes plus précises sont apparues, c'est le cas de [Poetry](https://python-poetry.org/).
La grande majorité des packages Python sont disponibles sur le Python Package Index (PyPI). Mais parfois, et souvent pour des raisons professionnelles, il est nécessaire de se connecter à un dépôt privé pour installer des packages.

<!-- truncate -->

## Problématique

Je dois m’authentifier auprès d'un dépôt privé (dépôt d'entreprise par exemple) pour installer des packages Python. Comment puis-je m'authentifier avec `poetry` ?

## Solution

De base, poetry n'utilise aucune méthode d'authentification pour récupérer les packages sur les dépôts publics.

Pour s'authentifier auprès d'un dépôt privé, il faut éditer et ajouter les informations de connexion dans le fichier `~/.config/pypoetry/auth.toml` (s'il n'existe pas, il faut le créer).

Vous pouvez obliger toutes les requêtes poetry à s'authentifier :

```ini
[http-basic]
username = "user"
password = "pass"
```

Vous pouvez aussi spécifier des informations d'authentification pour un dépôt spécifique (ici `example.com`) :

```ini
[http-basic.example.com]
username = "user"
password = "pass"
```

## Pour aller plus loin

Dans un prochain article, je vous montrerai comment s'authentifier avec d'autres package managers pour Python.

## Liens utiles

- [Poetry](https://python-poetry.org/)
- [Python Package Index (PyPI)](https://pypi.org/)
- [Poetry - Configuring Credentials](https://python-poetry.org/docs/repositories/#configuring-credentials)
