import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { EventdetComponent } from './eventdet/eventdet.component';
import { EventtableComponent } from './eventtable/eventtable.component';
import { RegisterComponent } from './register/register.component';
import { FormlyTextFieldComponent } from './formly-text-field/formly-text-field.component';
import { FormlyFieldFileComponent } from './formly-field-file/formly-field-file.component';
import { RepeatTypeComponent } from './repeat-section.type';
import { SummaryComponent } from './summary/summary.component';
import { SlideComponent } from './slide/slide.component';
import { EventdettwoComponent } from './eventdettwo/eventdettwo.component';
import { EventtabletwoComponent } from './eventtabletwo/eventtabletwo.component';
import { RegistertwoComponent } from './registertwo/registertwo.component';
import { SummarytwoComponent } from './summarytwo/summarytwo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { EventService } from './event.service';


export function EmailValidator(
  control: FormControl | any
): ValidationErrors | null {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    control.value
  )
    ? null
    : { email: true };
}



export function EmailMessage(err: any, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid email address`;
}

export function minlengthValidationMessage(err: any, field: any) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err: any, field: any) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err: any, field: any) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err: any, field: any) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export function DateValidator(control: any) {
  let day = new Date(control.value).getDay();
  let month = new Date(control.value).getMonth();
  let year = new Date(control.value).getFullYear();
  let result = new Date(year + 18, month - 1, day) <= new Date();
  console.log({ result });
  return result ? null : { DOBAge: true };
}
export function DateValidationMessage(err: any, field: any) {
  return `"${field?.formControl?.value}" Age shoulbe be 18 or greater.`;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EventdetComponent,
    EventtableComponent,
    RegisterComponent,
    FormlyTextFieldComponent,
    FormlyFieldFileComponent,
    RepeatTypeComponent,
    SummaryComponent,
    SlideComponent,
    EventdettwoComponent,
    EventtabletwoComponent,
    RegistertwoComponent,
    SummarytwoComponent,
    LoginComponent,
    SignupComponent,
    EventsComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbModule,
    FormlyModule,
    FormlyBootstrapModule,
    HttpClientModule,
    FormlyModule.forRoot({ 
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
        { name: 'text', component: FormlyTextFieldComponent },
        { name: 'file', component: FormlyFieldFileComponent, wrappers: ['form-field'] },
    ],
      validators: [
        { name: 'email', validation: EmailValidator },
        { name: 'DOBAge', validation: DateValidator },
    ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: EmailMessage },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'DOBAge', message: DateValidationMessage },
      ],
    }),
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
  ],


  providers: [AuthService,AuthGuard,EventService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
