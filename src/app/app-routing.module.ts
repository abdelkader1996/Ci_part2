import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PayementComponent } from './components/payement/payement.component';
import { StartComponent } from './components/start/start.component';
import { WaitComponent } from './components/wait/wait.component';
//payement
const routes: Routes = [
  { path: 'menue', component: MainComponent },
  { path: 'wait', component: WaitComponent },
  { path: 'payement', component: PayementComponent },
  { path: '', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
