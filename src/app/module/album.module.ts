import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapTrainingComponent } from "../bootstrap-training/bootstrap-training/bootstrap-training.component";
import { StarComponent } from "../shared/star.component";
import { ProductListComponent } from "../Products/product-list/product-list.component";
import { ConvertSpace } from "../shared/ConvertSpace.pipe";
import { HandlingComponent } from "../products/handling.component";
import { ErrorComponent } from "../error/error/error.component";
import { FormsModule } from "@angular/forms/";
import { RouterModule } from "@angular/router/";
import { AlbumGardsService } from "../service/album-gards.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {path:'products/:id',canActivate:[AlbumGardsService],component:HandlingComponent},
      {path:'error',component:ErrorComponent},
      {path:'training',component:BootstrapTrainingComponent},
    ])
  ],
  declarations: [ProductListComponent,
    ConvertSpace,
    StarComponent,
    HandlingComponent,
    ErrorComponent,
    BootstrapTrainingComponent],
    providers:[
      AlbumGardsService
    ]
})
export class AlbumModule { }
