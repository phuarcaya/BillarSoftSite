import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { HomePropertiesComponent } from './components/home-properties/home-properties.component';

@NgModule({
  declarations: [HomePageComponent, HomeBannerComponent, HomeAboutComponent, HomePropertiesComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
