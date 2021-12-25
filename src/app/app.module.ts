import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenMeasureComponent } from './screen-measure/screen-measure.component';
import {MatDividerModule} from '@angular/material/divider';
import { DragScrollModule } from 'ngx-drag-scroll';
import { LatestStoriesComponent } from './latest-stories/latest-stories.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    DashboardComponent,
    TopNavComponent,
    ScreenMeasureComponent,
    LatestStoriesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    DragScrollModule
  ],
  exports: [
    ArticleComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
