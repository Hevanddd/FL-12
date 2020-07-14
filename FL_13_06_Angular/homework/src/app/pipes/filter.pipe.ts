import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../services/news-list.service';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(news: News[], textValue: string = '', selectValue: string = 'All'): News[] {
    if (textValue === '' && selectValue === 'All') {
      return news;
    }

    if (selectValue !== 'All') {
      return news.filter(post => {
        if (post.source.includes(selectValue)){
            return(
              post.title.toLowerCase().includes(textValue.toLowerCase()) ||
              post.shortDesc.toLowerCase().includes(textValue.toLowerCase())
            )
          } else{
          return false;
        }
      })
    } else if(selectValue === 'All' && textValue != ''){
        return news.filter(post => {
          return (
            post.title.toLowerCase().includes(textValue.toLowerCase()) ||
            post.shortDesc.toLowerCase().includes(textValue.toLowerCase())
          );
        });
    }
  }
}