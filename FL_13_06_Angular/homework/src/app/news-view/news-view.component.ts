import { Component, OnInit } from '@angular/core';
import { NewsListService } from '../services/news-list.service';
import { Router } from '@angular/router';
import { News } from '../services/news-list.service';


@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent {

  constructor(private newsListService: NewsListService,
              private router: Router) { }

  newsItem: News = this.newsListService.getCurrentNewsView();
}