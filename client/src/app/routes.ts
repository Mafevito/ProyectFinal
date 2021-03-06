import { Routes } from '@angular/router';
import { SessionService } from '../services/session.service';
import { SolicitudeService } from '../services/solicitude.service';

import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SolicitudeComponent } from './solicitude/solicitude.component';
import { SolicitudeListComponent } from './solicitude-list/solicitude-list.component';
import { SolicitudeDetailsComponent } from './solicitude-details/solicitude-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'solicitude', component: SolicitudeComponent },
  { path: 'solicitudes', component: SolicitudeListComponent },
  { path: 'solicitudes/:id', component: SolicitudeDetailsComponent },
  { path: 'profile/:id', component: UserProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
