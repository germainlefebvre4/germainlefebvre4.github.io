---
title: Découverte du radiateur connecté Sauter
slug: decouverte-radiateur-connecte-sauter
authors: germain
tags:
  - sauter
  - domotique
---

Découvrons ensemble le radiateur connecté Sauter, un radiateur électrique connecté qui s'intègre dans votre maison connectée.
On exlpore l'installation et l'utilisation du radiateur au travers de l'application mobile CozyTouch.

![Sauter Logo](./sauter-logo.webp)

<!-- truncate -->

## Introduction

Sauter est une marque française spécialisée dans les radiateurs électriques, elle fait partie du groupe Atlantic.
Avec l'avènement de la maison connectée, Sauter a développé une gamme de radiateurs connectés qui s'intègrent au sein de chez vous.

## Contexte

Les radiateurs connectés Sauter peuvent être contrôlés de deux manières différentes :

- Via le radiateur lui-même
- Via l'application mobile CozyTouch

Pour piloter les radiateurs via l'application mobile, vous aurez besoin du bridge CozyTouch, qui n'est pas inclus avec le radiateur.

> Ne vous faites pas avoir par les vendeurs des enseignes de bricolage : vous ne pouvez pas piloter les radiateurs via l'appli mobile sans bridge.

Il est indispensable de **disposer d'un bridge CozyTouch** pour piloter les radiateurs via l'**application mobile.**

## Mode de fonctionnement

> Ce qui va suivre est valable au moment de l'écriture de l'article.

...

Les radiateurs Sauter ont repris le fonctionnement historique des radiateurs électriques :

- La consigne de température de "Confort" est la température de référence
- La consigne de température "Eco" est une "dérogation" à la température de confort qui fonctionne par soustraction de degrés.

Ces quelques lignes peuvent semble étranges mais elles conditionnent le comportement du radiateur. Voyons ça en exemple.

Ma température de Confort est de 19°C. Ma température Eco est configurée 3°C en dessous, soit 16°C. La température Eco est "calculée" par le radiateur et non pas fixée par l'utilisateur.
Si je change la température de Confort à 20°C, la température Eco sera automatiquement ajustée à 17°C.
On voit bien que le comportement du radiateur se base sur la température de Confort, il va en être de même sur l'application mobile.

## Conclusion

Le matériel Sauter est de qualité, les radiateurs sont robustes et les modèles plus haut de gamme sont esthétiquement réussis. L'application mobile CozyTouch permet de piloter les radiateurs à distance, de programmer des plages horaires et de suivre la consommation électrique.

## Mon avis

Bien que je trouve la marque Sauter sérieuse et de qualité, voici ce que je leur reproche :

Application mobile CozyTouch :

- Le mode "Absent" n'est pas lié à la géolocalisationn, il faut le déclencher manuellement
- La configuration de la programmation est alambiquée

Radiateurs :

- La température Eco est fixée par le radiateur (déduite de la température de confort) et non pas par l'utilisateur
