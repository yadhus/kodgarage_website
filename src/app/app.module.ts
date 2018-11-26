import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { IndustriesComponent } from './industries/industries.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HowweworkComponent } from './howwework/howwework.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { ServerService } from './contactus/server.service';
import { CareerComponent } from './career/career.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { CommunityComponent } from './community/community.component';
import { HeaderComponent } from './header/header.component';
import { MarketplaceComponent } from './industries/marketplace/marketplace.component';
import { FoodorderingComponent } from './industries/foodordering/foodordering.component';
import { EducationComponent } from './industries/education/education.component';
import { SocialComponent } from './industries/social/social.component';
import { SchoolComponent } from './industries/school/school.component';
import { EcommerceComponent } from './industries/ecommerce/ecommerce.component';
import { HealthcareComponent } from './industries/healthcare/healthcare.component';
import { TaxiComponent } from './industries/taxi/taxi.component';
import { RealestateComponent } from './industries/realestate/realestate.component';
import { BlogComponent } from './blog/blog.component';
import { PricingComponent } from './pricing/pricing.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'termsconditions', component: TermsconditionsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'foodordering', component: FoodorderingComponent },
  { path: 'education', component: EducationComponent },
  { path: 'social', component: SocialComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'taxi', component: TaxiComponent },
  { path: 'realestate', component: RealestateComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pricing', component: PricingComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    IndustriesComponent,
    ServicesComponent,
    ProductsComponent,
    HomeComponent,
    HowweworkComponent,
    OurteamComponent,
    ContactusComponent,
    FooterComponent,
    CareerComponent,
    PrivacypolicyComponent,
    TermsconditionsComponent,
    CommunityComponent,
    HeaderComponent,
    MarketplaceComponent,
    FoodorderingComponent,
    EducationComponent,
    SocialComponent,
    SchoolComponent,
    EcommerceComponent,
    HealthcareComponent,
    TaxiComponent,
    RealestateComponent,
    BlogComponent,
    PricingComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    OwlModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
