import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaComponent } from "./components/lista.component";

const rutas:Routes = [
    { path:'',component:ListaComponent}
]

@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})
export class ListaRoutingModule{

}