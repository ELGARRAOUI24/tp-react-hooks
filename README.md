# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :
1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets 
#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici

#### réponse pour l'exercice 1 :
##### 1-1 : Les modification apportées pour ce exercice sont :
- 1- Déclaration un state "searchTerm" dans la classe mère "APP" pour gérer la recherche par des mots clé.
- 2- Envoie la méthde "setSearchTerm" comme prpos au composant "ProductSearch" afin de l'utiliser pour modifier la valeur du state "searchTerm".
- 3- enoie le state "searchTerm" comme props au composant "ProductList" pour faire un filtre sur la liste des produit existe dans la variable "products" retournée par le hook "useProductSearch".
![alt text](captures/ex1-image1.png)
![alt text](captures/ex1-image2.png)

##### 1-2 : L'implémentation d'un debounce sur la recherche :
- L'utilisation d'un useEffect afin d'ajouter un debounce qui permet de limiter la fréquence d'executer une fonction par un timer personnalisé.

##### 1-3 : Documentation de la solution :
- Commentaire sur l'ensemble des modification apportées pour resoudre l'exercice N° 1.

### Exercice 2 : Context et Internationalisation
#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

#### réponse pour l'exercice 2 :
- 1- Déclaration d'un context pour gérer la langue d'ffichage
- 2- Création d'un nouvau component pour ajouter la possibilité de changer la langue
- 3- Utilisation du state "language" via le context pour afficher les phrases correspondentes à la langue choisie par l'utilisateur.
![alt text](captures/ex2-image1.png)

### Exercice 3 : Hooks Personnalisés
#### Objectif : Créer des hooks réutilisables

- [ ] 3.1 Créer le hook useDebounce
- [ ] 3.2 Créer le hook useLocalStorage
- [ ] 3.3 Documenter votre solution ici

#### réponse pour l'exercice 3 :
##### 3.1 Créer le hook useDebounce
- 1- Création un hook pérsonnalisé nommé "useDebounce" avec un timer paramétré pour limiter la fréquence d'exécution d'une fonction
- 2- Utilisation le nouvaue hook pérsonnalisée pour limiter la fréquence d'exécution du filtre sur la liste des produit.

##### 3.2 Créer le hook useLocalStorage
- 1- Création d'un nouveau hook personnalisé pour interagir facilement avec le localStorage.

### Exercice 4 : Gestion Asynchrone et Pagination
#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

#### réponse pour l'exercice 4 :
- 1- Ajout d'un bouton pour recharger les produits de la page
- 2- Implémentation de la pagination
