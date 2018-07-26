import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouteReuseStrategy} from '@angular/router';
import { Chart1Component } from './component/chart1/chart1.component';



const routes: Routes = [
  {path:'chart1/:id',component:Chart1Component},
  {path:'chart2/:id',component:Chart1Component},
  {path:'chart3/:id',component:Chart1Component},
  {path:'chart4/:id',component:Chart1Component},
  {path:'chart5/:id',component:Chart1Component},
  {path:'chart6/:id',component:Chart1Component},
  {path:'',component:Chart1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
