import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UiComponentModule } from '../ui-component/ui-component.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    UiComponentModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    UiComponentModule
  ]
})
export class SharedModule { }
