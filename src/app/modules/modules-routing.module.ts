import { UtilsGuard } from '../shared/utils/utils.guard';


const homeModule = () => import('./home/home.module').then(mod => mod.HomeModule);
const tipoListaModule = () => import("./tipoLista/tipoLista.module").then(mod => mod.TipoListaModule);
const listaModule = () => import("./lista/lista.module").then(mod => mod.ListaModule);

export const MODULES_ROUTE = [

    { path: '', canActivate: [UtilsGuard], loadChildren: homeModule },
    { path: 'typelist', canActivate: [UtilsGuard], loadChildren: tipoListaModule },
    { path: 'list', canActivate: [UtilsGuard], loadChildren: listaModule },
];