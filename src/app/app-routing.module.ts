import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { UserReadComponent } from './user-read/user-read.component'

const routes: Routes = [
  {path: 'user-read',component: UserReadComponent},
  {path: 'user', component: UserComponent},
  {path: '**',component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
