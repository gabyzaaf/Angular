import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error/error.component';

import { AlbumGardsService } from './service/album-gards.service';
import { AlbumModule } from './module/album.module';

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
export class AppModule { }
