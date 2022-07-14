import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventdetComponent } from './eventdet/eventdet.component';
import { EventtableComponent } from './eventtable/eventtable.component';
import { RegisterComponent } from './register/register.component';
import { SummaryComponent } from './summary/summary.component';
import { SlideComponent } from './slide/slide.component';
import { EventdettwoComponent } from './eventdettwo/eventdettwo.component';
import { EventtabletwoComponent } from './eventtabletwo/eventtabletwo.component';
import { RegistertwoComponent } from './registertwo/registertwo.component';
import { SummarytwoComponent } from './summarytwo/summarytwo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"e/:id",component:EventdetComponent,canActivate:[AuthGuard]},
  {path:"eventtable/:id",component:EventtableComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'summary',component: SummaryComponent},
  {path:'slide',component:SlideComponent},
  {path:'a/:id',component:EventdettwoComponent},
  {path:'eventtabletwo/:id',component:EventtabletwoComponent},
  {path:'registertwo',component:RegistertwoComponent},
  {path:'summarytwo',component:SummarytwoComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'events',component:EventsComponent},
  {path:'special',component:SpecialComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
