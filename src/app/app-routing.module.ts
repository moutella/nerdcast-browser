import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NcCardComponent } from './nc-card/nc-card.component';

const routes: Routes = [
  {path: 'nerdcasts', component: NcCardComponent},
  // {path: 'nerdcasts/:id', component: NcDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
