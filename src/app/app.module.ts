import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { UiComponentModule } from './ui-component/ui-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    UiComponentModule
  ],

  exports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    UiComponentModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
