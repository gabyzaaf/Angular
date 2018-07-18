# Creation de formulaire avec action : 

1. Objectif du tuto :

Ce tuto à pour objectif de creer un fomulaire et de voir comment gerer les données dans notre fichier app.component.ts

2. Importation du packet utilisé : 

Dans le fichier app.module.ts, vous devez déclarer en haut du document ceci : 

```javascript
    import { FormsModule } from '@angular/forms';
```

Explication : 

Cela signifie que l'on import FormsModule dans notre application, cette librairie permet de pouvoir interargir avec les données présent dans le formulaire et le fichier ayant l'extension .ts

3. Declaration du packet : 

Dans la partie déclaration du fichier ngModule, nous devons déclarer comme ceci : 

```javascript
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
PS : le prochain tuto expliquera en détail la signification de chque section.

4. Creation du formulaire : 

Dans votre fichier app.component.html, nous allons créer un formulaire comme ceci : 

```html
<form>
  <label for="email">Email</label>
  <input type="text"  name="email" id="email" >

  <label for="password">Password</label>
  <input type="password" name="password" id="password">

  <label>Second password</label>
  <input type="password" name="Secondpassword" id="Secondpassword">

  <button type="submit" >Sign Up</button>
</form>
```

Nous avons crée un simple formulaire ayant un champ email,password et second password et un button qui va soumettre notre résultat.

5. Ajout des attributs permettant l'interaction avec la page  app.component.ts :

Dans le fichier app.component.html
```html
<form>
  <label for="email">Email</label>
  <input type="text" [(ngModel)]="email" name="email" id="email" >

  <label for="password">Password</label>
  <input type="password" [(ngModel)]="password" name="password" id="password">

  <label>Second password</label>
  <input type="password" [(ngModel)]="Secondpassword" name="Secondpassword" id="Secondpassword">

 
  <button type="submit" (click)="TestClick()">Sign Up</button>
</form>
``` 

Explication : 

Nous avons ajouté l'attribut ngModel et sous chaque attribut nous avons déclarer un ngModel avec une valeur qui sera l'identifiant du champs.

Exemple : 

```javascript
[(ngModel)]="email"
```

Signifie que l'identifiant ngModel possède email.



6. Récupération des données avec app.component.ts : 

Dans le fichier app.component.ts vous devez ajouter ceci : 

```javascript
  private email:string;
  private password:string;
  private Secondpassword:string;
  public result:string;
```

Ce qui signifie que les identifiants présent dans les ngModels dans le fichier app.component.html sont déclaré et vous pouvez les manipuler comme ceci : 

```javascript
TestClick(){
    if(this.password == this.Secondpassword){
     console.log('égale');
    }else{
     console.log('erreur');
    }
  }
```
Essayer et bidouiller et vous verrez :) 

Vous n'avez plus que à lancer votre application normalement vous savez comment faire.




