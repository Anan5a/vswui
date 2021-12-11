import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./user/navbar/navbar.component";
import {LoginFormComponent} from "./user/login-form/login-form.component";
import {SignupFormComponent} from "./user/signup-form/signup-form.component";
import {ResetFormComponent} from "./user/reset-form/reset-form.component";
import {AppComponent} from "./app.component";
import {UserlistComponent} from "./admin/userlist/userlist.component";
import {HomepageContentComponent} from "./user/homepage-content/homepage-content.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {FileUploadComponent} from "./user/file-upload/file-upload.component";
import {PlayerComponent} from "./user/player/player.component";
import {AuthGuard} from "./auth.guard";
import {MyVideosComponent} from "./user/my-videos/my-videos.component";
import {ApprovalComponent} from "./admin/approval/approval.component";
import {AllvideoComponent} from "./admin/allvideo/allvideo.component";

const routes: Routes = [
  {path:'', component:HomepageContentComponent, pathMatch:'full'},
  {path:'user/login', component:LoginFormComponent, pathMatch:'full'},
  {path:'user/signup', component:SignupFormComponent, pathMatch:'full'},
  {path:'user/password-reset', component:ResetFormComponent, pathMatch:'full'},
  {path:'user/upload', component:FileUploadComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'user/dashboard', component:MyVideosComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'user/profile', component:ProfileComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'video/play/:videoID', component:PlayerComponent, pathMatch:'full'},

  {path:'admin/users', component:UserlistComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'admin/videos', component:AllvideoComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'admin/approval-pending', component:ApprovalComponent, pathMatch:'full', canActivate:[AuthGuard]},

  {path:'**', redirectTo:'NavbarComponent', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
