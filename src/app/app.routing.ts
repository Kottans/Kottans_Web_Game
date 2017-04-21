import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainhallComponent } from './components/mainhall/mainhall.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginFormComponent } from './components/login-form/login-form.component'

const appRoutes: Routes = [
    { path: '', component: MainhallComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'login', component: LoginFormComponent, outlet: 'popup' }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
