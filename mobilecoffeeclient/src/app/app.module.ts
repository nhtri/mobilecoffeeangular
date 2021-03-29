import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainvisComponent } from './mainvis/mainvis.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { SectionEachComponent } from './section-each/section-each.component';
import { SectionPriceEachComponent } from './section-price-each/section-price-each.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainvisComponent,
    FooterComponent,
    SectionComponent,
    SectionEachComponent,
    SectionPriceEachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
