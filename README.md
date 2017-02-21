# Wakari

## C'est le projet Wakari, le dictionnaire FR <-> JP.
Mais là, faut etre efficace, rapide, sobre et performant.

## Interface minimaliste mais réactive :

J'ai besoin d'un mot : Je le tape dans une barre de recherche, autocompletion des mots existants qui s'en approche, résultats qui s'affichent au fur et à mesure de la saisie.
Je tape "mai", j'ai les résultats/autocompletion de "maison", "mairie", "mai".
Je finis "maison", j'ai juste les résultats pour "maisons".

## Mots aussi bien venant du FR -> JP que JP -> FR.

## Affichage des résultats en trois sections : 
- Résultats des mots traduits (dictionnaire)
- Résultats de tous les mots taggés avec le mot cherché (en gros, tous les mots que j'ai taggé avec le tag "Maison", ex: "jardin", "lit", "salle de bain" et leurs trads associées)
- Notes pour le mot en question.
du coup, niveau interface utilisateur : Une large barre de recherche avec auto-focus, auto completion, résultats qui s'affichent à la saisie en trois sections.

Je suis en cours, on parle nourriture, je cherche le mot "salé" en japonais, je tape "salé", j'ai la traduction du mot, tous les mots associés à "salé" et au tag parent (salé -> nourriture), et des notes que j'ai prise pour ce mot.
j'appuie sur une touche (à définir), ça vide le champ de saisie et je tape un autre mot
rapide, simple, efficace
et si je peux faire des modifs à la volée, c'est encore mieux