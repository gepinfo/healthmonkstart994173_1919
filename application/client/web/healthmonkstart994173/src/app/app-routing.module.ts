import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'nutritiondrinkdetails', loadChildren: () => import('./nutritiondrinkdetails/nutritiondrinkdetails.module').then(m => m.NutritiondrinkdetailsModule), canActivate: [AuthGuard] } , 
{ path : 'selectfooddetails', loadChildren: () => import('./selectfooddetails/selectfooddetails.module').then(m => m.SelectfooddetailsModule), canActivate: [AuthGuard] } , 
{ path : 'nutritionfooddetailsscreen1', loadChildren: () => import('./nutritionfooddetailsscreen1/nutritionfooddetailsscreen1.module').then(m => m.Nutritionfooddetailsscreen1Module), canActivate: [AuthGuard] } , 
{ path : 'savemealpopupscreen', loadChildren: () => import('./savemealpopupscreen/savemealpopupscreen.module').then(m => m.SavemealpopupscreenModule), canActivate: [AuthGuard] } , 
{ path : 'editeddetailspopupscreen', loadChildren: () => import('./editeddetailspopupscreen/editeddetailspopupscreen.module').then(m => m.EditeddetailspopupscreenModule), canActivate: [AuthGuard] } , 
{ path : 'successfullyscreenpopupscreen', loadChildren: () => import('./successfullyscreenpopupscreen/successfullyscreenpopupscreen.module').then(m => m.SuccessfullyscreenpopupscreenModule), canActivate: [AuthGuard] } , 
{ path : 'nutritioninsightsalldetails', loadChildren: () => import('./nutritioninsightsalldetails/nutritioninsightsalldetails.module').then(m => m.NutritioninsightsalldetailsModule), canActivate: [AuthGuard] } , 
{ path : 'nutritioninsightsbreakfastscreen', loadChildren: () => import('./nutritioninsightsbreakfastscreen/nutritioninsightsbreakfastscreen.module').then(m => m.NutritioninsightsbreakfastscreenModule), canActivate: [AuthGuard] } , 
{ path : 'nutritioninsightsmorningsnackscreen', loadChildren: () => import('./nutritioninsightsmorningsnackscreen/nutritioninsightsmorningsnackscreen.module').then(m => m.NutritioninsightsmorningsnackscreenModule), canActivate: [AuthGuard] } , 
{ path : 'selectedfoodviewbreakfast', loadChildren: () => import('./selectedfoodviewbreakfast/selectedfoodviewbreakfast.module').then(m => m.SelectedfoodviewbreakfastModule), canActivate: [AuthGuard] } , 
{ path : 'viewallmeal', loadChildren: () => import('./viewallmeal/viewallmeal.module').then(m => m.ViewallmealModule), canActivate: [AuthGuard] } , 
{ path : 'mymeal/breakfast ', loadChildren: () => import('./mymeal/breakfast /mymeal/breakfast .module').then(m => m.Mymeal/breakfast Module), canActivate: [AuthGuard] } , 
{ path : 'deleteitemspopupscreen', loadChildren: () => import('./deleteitemspopupscreen/deleteitemspopupscreen.module').then(m => m.DeleteitemspopupscreenModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
