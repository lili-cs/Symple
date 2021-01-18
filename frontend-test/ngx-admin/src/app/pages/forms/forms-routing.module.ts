import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { EmailInvitationFormComponent } from './email-invitation-form/email-invitation-form.component'

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'email-invitation',
        component: EmailInvitationFormComponent,
      },
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      // {
      //   path: 'layouts',
      //   component: FormLayoutsComponent,
      // },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

