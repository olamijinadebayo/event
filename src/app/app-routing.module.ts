import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  CreateSessionComponent
} from './events/index';
import {ErrorComponent} from './error/error.component';
import { EventsListResolverService } from './events/shared/events-list-resolver.service';
import { EventResolverService } from './events/shared/event-resolver.service';

const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
  {path: '404', component: ErrorComponent},
  {path: 'events/:id', component: EventDetailsComponent , resolve: {event: EventResolverService}},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
