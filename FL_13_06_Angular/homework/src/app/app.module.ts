import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlsComponent } from './controls/controls.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateNewsComponent } from './create-news/create-news.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NewsViewComponent } from './news-view/news-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlsComponent,
    NewsListComponent,
    NewsPageComponent,
    CreateNewsComponent,
    FilterPipe,
    NewsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
