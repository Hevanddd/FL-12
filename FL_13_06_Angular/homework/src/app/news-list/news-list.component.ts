import { Component, Input } from '@angular/core';
import { NewsListService } from '../services/news-list.service';
import { News } from '../services/news-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})

export class NewsListComponent {
  @Input() filters: any;

  constructor(private newsListService: NewsListService,
              private router: Router) {}

  newsList: News[] = this.newsListService.getNewsList();
  
  toNews(news){
    this.newsListService.setCurrrentNewsView(news);
    this.router.navigate(['/news-view']);
  }
}
