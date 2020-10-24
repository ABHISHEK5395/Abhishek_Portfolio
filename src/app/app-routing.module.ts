import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  {path : 'personal' , component : PersonalComponent},
  {path :  'professional' , component : ProfessionalComponent},
  {path : '' , redirectTo : '/personal' , pathMatch:'full'},
  {path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
