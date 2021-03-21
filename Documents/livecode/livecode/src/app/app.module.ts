import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { JumbotronComponent } from './biens/jumbotron/jumbotron.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeleftPipe } from './pipes/timeleft.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './biens/reservation/reservation.component';
import { DetailReservationComponent } from './biens/reservation/detail-reservation/detail-reservation.component';
import { EditReservationComponent } from './biens/reservation/edit-reservation/edit-reservation.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    ListBienComponent,
    DetailBienComponent,
    ItemBienComponent,
    JumbotronComponent,
    SeparatorPipe,
    TimeleftPipe,
    SummarizePipe,
    FilterPipe,
    FilterSearchPipe,
    ReservationComponent,
    DetailReservationComponent,
    EditReservationComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
