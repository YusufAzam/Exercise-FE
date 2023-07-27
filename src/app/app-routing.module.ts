import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/components/register/component/register.component';
import { HomeComponent } from './home/component/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path : 'register', component: RegisterComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
