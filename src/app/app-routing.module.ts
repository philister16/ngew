import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./app-layout/main-layout/main-layout.component";
import { AppLayoutModule } from "./app-layout/app-layout.module";
import { AuthGuard } from "./auth/auth.guard";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MainLayoutComponent,
  },
  {
    path: "secret",
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((mod) => mod.AuthModule),
  },
  {
    path: "user",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./user/user.module").then((mod) => mod.UserModule),
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [AppLayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
