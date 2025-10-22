import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"",loadComponent:()=>import("./catbiox/catbiox").then(m=>m.Catbiox)},
    {path:"beneficios",loadComponent:()=>import("./beneficios/beneficios").then(m=>m.Beneficios)},
    {path:"caracteristicas",loadComponent:()=>import("./caracteristicas/caracteristicas").then(m=>m.Caracteristicas)},
    {path:"contacto",loadComponent:()=>import("./contacto/contacto").then(m=>m.Contacto)}
];
