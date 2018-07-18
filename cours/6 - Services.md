# Utilisation des services


1. Objectif du tuto : 

Ce tuto a pour objectif de comprendre l'utilité des services avec angular.

2. Qu'est ce qu'un service ?

Un service est avant tout une notion de résponsabilité je m'explique :  

Un component doit servire uniquement à afficher de la données à l'utilisateur. Si vous souhaitez faire de la verification ou crée des règles specifique (ce que l'on appel dans le jargon des règles métiers) il faut le deléguer au service c'est sa tache.

3. Pourquoi faire un service ?

Si vous souhaitez que votre code soit maintenable vous devez avant tout le normé et ce que je vous ai expliqué plus haut est l'une des normes.

4. Comment faire un service ? 

Vous devez taper cette commande dans votre terminal : 

```bash
ng g s services/samples
```

Explication : 

ng = commande de angular-cli.
g = generate
s = service mais il est aussi possible de faire c pour un component est bien d'autres encores.
services/samples = va créer un dossier services et le service se nomera sample.service.ts

5. Décomposition du service crée : 

```javascript
import { Injectable } from '@angular/core';

@Injectable()
export class SamplesService {

  constructor() { }

}
```

Explication : 

L'annotation @Injectable permet de pouvoir faire ce que l'on appel de l'injection de dépendance, ne fuyé pas j'explique : 

Cela signifie que c'est le moteur de angular qui va lui meme gérer sa création (son instanciation) et tout cela grace à cette annotation.

6. Utilisation : 

J'ai ajouté une méthode pour écrire un message dans la console de log comme ceci : 

```javascript
import { Injectable } from '@angular/core';

@Injectable()
export class SamplesService {

  constructor() { }

  Message(message:string){
    console.log("ce message est "+message);
  }

}
```

Et nous allons l'appeller dans le constructeur du component  : 

```javascript
import { Component, OnInit } from '@angular/core';
import { SamplesService } from "../../services/samples.service";

@Component({
  selector: 'app-bootstrap-training',
  templateUrl: './bootstrap-training.component.html',
  styleUrls: ['./bootstrap-training.component.css']
})
export class BootstrapTrainingComponent implements OnInit {

  constructor(private sample:SamplesService) { 
    sample.Message("COUCOU à vous");
  }

  ngOnInit() {
  }
  SayHello(){
    console.log("HELLOOOOOO");
  }
}
```

Vous voyez dans le constructeur j'ai simplement mis sample:SampleService et le moteur d'angular a crée l'objet.
Si vous lancer votre application maintenant vous devriez avoir une erreur !

Pourquoi cette erreur ? C'est par ce que comme nous l'avons vu dans le tuto sur NgModule il existe une rubrique providers et il faut le déclarer dedans comme ceci : 

```javascript
providers: [SamplesService]
```