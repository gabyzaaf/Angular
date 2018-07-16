# Interaction avec les components.

1. Objectif de ce tuto : 

Permettre de voir comment les composents peuvent intérargir entre eux.

2. Mise en place du projet : 

Dans un premier temps vous devez creer votre premier projet : 

Dans notre cas nous allons suposer que notre projet se nommera component-test

```bash
ng new component-test
```

3.  Composant principal : 

Le composant principal est app.component.ts et il est lié à app.component.html et app.component.css.

le fichier ci-dessous est le contenu présent dans app.component.ts

```javascript

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour';
}

```

Dans la page HTML, voici le contenu.

```javascript
<p>Vous dites {{title}}</p>
```

4. Lancement du serveur : 

Pour lancer le serveur vous devez utiliser la commande suivante (dans le repertoire du projet) : 

```bash
ng serve
```

5. Resultat : 

Vous devriez voir aparaitre Vous dites Bonjour

6. Explication : 