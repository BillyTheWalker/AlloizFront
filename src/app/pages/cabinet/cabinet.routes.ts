import {Routes} from '@angular/router';
import {addRoutes} from './cabinet/add/add.routes';
import {CabinetComponent} from './cabinet.component';
import {updateRoutes} from './cabinet/update/update.routes';
import {callbackRoutes} from './cabinet/callback/callback.routes';

export const cabinetRoutes :Routes =[
  {
    path:'cabinet',component:CabinetComponent ,children :[
      ...addRoutes,
      ...updateRoutes,
      ...callbackRoutes
    ]
  }
]
