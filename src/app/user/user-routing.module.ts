import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { MainLayoutComponent } from '../app-layout/main-layout/main-layout.component';
import { UserResolver } from './user.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { user: UserResolver },
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
      },
      {
        path: 'account',
        component: AccountComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
