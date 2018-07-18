# Interaction avec un boutton.

1. Objectif : 

L'objectif de ce tuto est de pouvoir faire une interaction avec un bouton, cela veux dire déclancher une action l'orsque l'on clique sur un boutton.

2. Creation du boutton : 

Dans le fichier html (app.component.html pour notre exemple) vous devez inserer ceci :

```html
  <button (click)="SayHello()">COUCOU</button>
```

Explication : 

Nous avons créé un boutton avec à l'interrieur COUCOU et l'attribut (click) permet de dire au moment du click on appellera la méthode SayHello().

3. Creation de l'action lors du click : 

Dans le fichier app.component.ts, dans la class nous allons écrire ceci : 

```javascript
SayHello(){
    console.log("Hello a tous");
  }
```

Explication : 

Nous avons crée une méthode SayHello qui écrira dans la console Hello a tous.
[Pour pouvoir afficher les différentes consoles celon vos navigateurs](https://www.alsacreations.com/astuce/lire/1436-console-javascript.html)

4. Lancement de l'application : 

Pour lancer votre application veuillez lancer cette commande 

```javascript
ng serve
```