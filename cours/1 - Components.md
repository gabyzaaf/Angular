# Les components avec Angular.

1. Qu'est ce que cela permet ?

Cela permet de creer votre DOM HTML (interface Html) et lié à la fois les données provenant du service et remonter les informations necessaires des différents API.


2. En détail 
Un component est une annotation qui se fera avec un "@", par exemple :

```javascript
@Component({
  selector: 'app-bootstrap-training',
  templateUrl: './bootstrap-training.component.html',
  styleUrls: ['./bootstrap-training.component.css']
})
```

<dl>
  <dt>selector</dt>
  <dd>Le selector en l'occurance dans notre exemple app-bootstrap-training est la balise que l'on mettera dans le fichier de démarrage qui est app.component.html</dd>
  
</dl>



