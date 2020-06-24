import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './pages/cours/cours.component';


const routes: Routes = [
  { path: 'cours', component: CoursComponent },
  { path: '**', redirectTo: 'cours' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
