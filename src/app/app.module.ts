import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { AngularABContainerComponent } from './angular-ab-container/angular-ab-container.component';
import { AngularAComponent } from './angular-ab-container/angular-a/angular-a.component';
import { AngularBComponent } from './angular-ab-container/angular-b/angular-b.component';
import {ColorTyperDirective} from './shared/directives/ColorType.directive';


@NgModule({
  declarations: [
    AppComponent,
    AngularAComponent,
    AngularBComponent,
    AngularABContainerComponent,
    ColorTyperDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'angular_a', pathMatch: 'full'},
      {path: 'angular_a', component: AngularAComponent},
      {path: 'angular_b', component: AngularBComponent},
      {path: '', loadChildren: './angularjs.module#AngularJSModule'}
    ], {
      enableTracing: true,
      // Uncomment to enable preloading and prebootstrapping
      // preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
