import { Routes } from '@angular/router';
import { Help } from './Menubar_components/help/help';
import { Dashboard } from './Menubar_components/dashboard/dashboard';
import { Seasons } from './Menubar_components/seasons/seasons';
import { Reports} from './Menubar_components/reports/reports';
import { Orignal } from './Menubar_components/orignal/orignal';
import { Additional } from './Menubar_components/additional/additional';
import { Accessibility } from './Menubar_components/accessibility/accessibility';
import { WPMS } from './Menubar_components/wpms/wpms';
import { Login } from './Menubar_components/login/login';
import { TemplateDriven } from './template-driven/template-driven';
import { ReactiveForm } from './reactive-form/reactive-form';

export const routes: Routes = [

    {path : '', component : Dashboard},
    {path : 'help', component : Help},
    {path : 'seasons', component : Seasons},
    {path : 'reports', component : Reports},
    {path : 'orignal', component : Orignal},
    {path :  'additional', component : Additional},
    {path : 'accessibility', component : Accessibility},
    {path : 'wpms', component : WPMS},
    {path: 'login', component : Login},
    {path: 'driven_form', component : TemplateDriven},
    {path: 'reactive-form', component :ReactiveForm },
];
