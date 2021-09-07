import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { UiComponentModule } from '../ui-component/ui-component.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    TechnologyComponent,
    IndustriesComponent,
    BlogsComponent,
    PortfolioComponent,
    ContactUsComponent,
    ServicesComponent,
    MethodologyComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    UiComponentModule
  ],
  exports: [
    CommonModule,
    FeatureRoutingModule,
    UiComponentModule
  ]
})
export class FeatureModule { }
