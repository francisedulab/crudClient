import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { MainComponent} from './main/main.component'

const routes: Routes = [
  {path:"main", component: MainComponent},
  {path: 'user', component: UserComponent},
  {path: '**',component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
