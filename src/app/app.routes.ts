import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { DropdownBasicComponentComponent } from './dropdown-basic-component/dropdown-basic-component.component';
//import { DropdownBasicComponent } from './dropdown-basic/dropdown-basic.component';
export const routes: Routes = [
    {path:"", component:FormComponent},
    {path:"contact", children:[
        {path:"", component:FormComponent},
        {path:"detail/:id", component:DetailComponent},
        
    ]},
    {path:"modal", component:DropdownBasicComponentComponent}
];