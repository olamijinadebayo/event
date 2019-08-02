import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent
} from './events/index';
import {ErrorComponent} from './error/error.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { EventsListResolverService } from './events-list-resolver.service';

const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent,canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent,resolve:{events:EventsListResolverService}},
  {path: '404', component: ErrorComponent},
  {path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivatorService]},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
