import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ColorComponent } from './component/color/color.component';
import { TwoComponent } from './component/two/two.component';
import { CardComponent } from './component/card/card.component';
import { CvComponent } from './component/cv-model/cv/cv.component';
import { ListOfCvComponent } from './component/cv-model/list-of-cv/list-of-cv.component';
import { ItemOfListComponent } from './component/cv-model/item-of-list/item-of-list.component';
import { DetailsOfCvComponent } from './component/cv-model/details-of-cv/details-of-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    CvComponent,
    ListOfCvComponent,
    ItemOfListComponent,
    DetailsOfCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
