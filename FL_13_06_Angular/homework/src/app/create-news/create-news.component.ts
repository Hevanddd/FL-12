import { Component, OnInit } from '@angular/core';
import { NewsListService } from '../services/news-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})

export class CreateNewsComponent implements OnInit{

  form: FormGroup
  
  constructor(private newsListService: NewsListService,
              private router: Router) {}

  ngOnInit(){
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      shortDesc: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      sourceUrl: new FormControl('', Validators.required)
    });
  }
  
  returnToNewsPage() {
    this.router.navigate(['/'])
    this.form.reset();
  }

  addNews() {
    if(this.form.valid){
      const formData = {...this.form.value}
      this.newsListService.updateNews(formData);
      this.returnToNewsPage();
    }
  }
}
