import { ErrorComponent } from './error/error.component';
import { EditReservationComponent } from './biens/reservation/edit-reservation/edit-reservation.component';
import { DetailReservationComponent } from './biens/reservation/detail-reservation/detail-reservation.component';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './biens/reservation/reservation.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const appRoute: Routes = [
  {path: '', redirectTo: '/biens', pathMatch: 'full'},
  {path: 'biens', component: ListBienComponent},
  {path: 'biens/add', component: AddBienComponent},
  {path: 'biens/:id', component: DetailBienComponent},

  {path: 'reservation', component: ReservationComponent,
  children: [
    {path: 'reservation/:id', component: DetailReservationComponent},
  {path: 'reservation/:id/edit', component: EditReservationComponent}
  ]},

  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: '/not-found'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
