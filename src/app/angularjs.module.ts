import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {monModuleAngularJS} from './angularjsapp';
import {UpgradeModule} from '@angular/upgrade/static';
import {setUpLocationSync} from '@angular/router/upgrade';
import {AppModule} from './app.module';
import {ColorTyperDirective} from './shared/directives/ColorType.directive';

/**
 * This module is written at the beginning of the upgrade process.
 * It does not need to change with the upgrade process.
 */

@Component({template: ``})
export class EmptyComponent {}

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    UpgradeModule,
    RouterModule.forChild([
      {path: '**', component: EmptyComponent}
    ])
  ]
})

export class AngularJSModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(upgrade: UpgradeModule) {
    upgrade.bootstrap(document.body, [monModuleAngularJS.name]);
    setUpLocationSync(upgrade);
  }
}
