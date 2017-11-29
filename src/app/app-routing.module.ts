import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MapComponent} from './map/map.component';
import {HomescreenComponent} from './homescreen/homescreen.component';
import {RouteOptionsComponent} from './route-options/route-options.component';
import {PlacesComponent} from "./places/places.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomescreenComponent},
  {path: 'route-options', component: RouteOptionsComponent},
  {path: 'route/:travelMode', component: MapComponent},
  {path: 'places', component: PlacesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
