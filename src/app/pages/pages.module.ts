import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Own Modules
import { PagesRoutingModule } from './pages-routing.module';

//Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
