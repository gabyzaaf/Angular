# Explication de Ng Module.

1. Objectif du tuto : 

Ce tuto a pour objectif d'expliquer les différentes parties que composose le ngModule.

2. Qu'est ce que le NgModule ? 

Le ngModule est une annotation qui est présente dans le fichier app.module.ts et qui permet d'inclure des modules dans notre application.

3. Explication des composants : 

```javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'products',pathMatch:'full'},
      {path:'**',redirectTo:'error',pathMatch:'full'},
    ]),
    AlbumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
La premiere chose qui différes se sont la portée je m'explique. Une porté est lié en programmation notement la programmation orienté objet au niveau de visibilité dans notre cas nous aurons 2 principaux type de portées (privée,public).

-> Déclarations : Permet de pouvoir charger les composants que vous jugez nécessaire à l'interrieur de votre application, sa visibilité est privée.

-> Providers : Permet de charger les services (un service est un fichier qui permet d'intéroger un service web (REST principalement).

-> Import : permet de specifier dans le component ce qui peut etre utilisé et importer d'autre module qui ont étés crée par exemple AlbumModule comme vous pouvez voir dans l'exemple.

-> bootstrap : permet de spécifier la class qui va étre executer au démarage on pourrait le considérer ça comme le point d'entrée de l'application.