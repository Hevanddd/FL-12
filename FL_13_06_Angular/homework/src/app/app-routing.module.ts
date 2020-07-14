import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsViewComponent } from './news-view/news-view.component';

const routes: Routes = [
  {path: '', component: NewsPageComponent},
  {path: 'create-news', component: CreateNewsComponent},
  {path: 'news-view', component: NewsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
