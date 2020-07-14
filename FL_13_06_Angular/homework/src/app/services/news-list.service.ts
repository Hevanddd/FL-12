import { Injectable } from '@angular/core';

export interface News {
  title: string;
  shortDesc: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  sourceUrl: string;
  id?: number;
  source: string;
}

@Injectable({
  providedIn: 'root'
})

export class NewsListService {
    private newsList: News[] = [{
    title: 'Masks Help People Understand',
    shortDesc: `Many people have problems with hearing. Some people are deaf. It means that they cannot hear.
      However, they need to communicate with others. These people often lipread. They watch other people's lips. 
      It helps them understand.`,
    content: `Many people have problems with hearing. Some people are deaf. It means that they cannot hear. 
      However, they need to communicate with others. These people often lipread. They watch other people´s lips. It helps them understand.
      Now, people must wear masks.The reason is the coronavirus.People cover their faces.It is a big problem for deaf people.They do not see people´s lips.
      Some people do not feel good.They need to see other people´s faces.It is important to see their faces.We can see if people smile or not. 
      Masks make communication difficult. A team of fashion designers have a clever idea.They make a mask with a window.The mask covers the mouth.
      However, people can see each other´s lips.`,
    date: '06-07-2020',
    author: 'Igor Mandziak',
    imageUrl: 'https://www.newsinlevels.com/wp-content/uploads/2020/07/800px-Surgical_face_mask.jpg',
    sourceUrl: 'https://www.newsinlevels.com/',
    id: 1,
    source: 'Internet'
  },
  {
    title: 'Cryotherapy',
    shortDesc: `This news is about whole body cryotherapy. It is a form of therapy which helps your body to heal.`,
    content: `This news is about whole body cryotherapy. It is a form of therapy which helps your body to heal. 
      The only problem is that you must spend three minutes in a super cold chamber. The temperature in the chamber is -130 degrees Celsius.
      Cryotherapy works by making the brain believe that the body is freezing. The body then sends oxygen-rich blood to the centre of the body.
      This makes you feel great. You feel relaxed and full of energy. Cryotherapy is a big hit in New York. Customers pay about 90 dollars for three minutes.`,
    date: '08-07-2020',
    author: 'Igor Mandziak',
    imageUrl: 'https://www.newsinlevels.com/wp-content/uploads/2015/09/Cryotherapy.jpg',
    sourceUrl: 'https://www.newsinlevels.com/',
    id: 2,
    source: 'Internet'
  },
  {
    title: 'Party and Police',
    shortDesc: `On Wednesday, people have a street party in Brixton, London. People have a barbecue. People play music. They dance. 
      The party is very calm. However, the party is not legal. Local people call the police in the evening.`,
    content: `On Wednesday, people have a street party in Brixton, London. People have a barbecue. People play music. They dance. 
      The party is very calm. However, the party is not legal. Local people call the police in the evening. 
      Local people are not happy with the noise. The police come. Police officers try to stop the party. 
      Police officers turn off the music. Many people go home. However, some people get angry. They attack the police officers. 
      They destroy the police cars. The situation is dangerous. People injure twenty-two officers. Four people end up in a hospital. 
      The police take four people to the police station. An attack on a police officer is a crime.`,
    date: '01-07-2020',
    author: 'Igor Mandziak',
    imageUrl: 'https://www.newsinlevels.com/wp-content/uploads/2020/06/15601086716_97c829cb27_b.jpg',
    sourceUrl: 'https://www.newsinlevels.com/',
    id: 3,
    source: 'Internet'
  },
  {
    title: 'Liverpool Wins',
    shortDesc: `This week, The Liverpool Football Club won the Premier League title. It was a special moment for thousands of Liverpool´s fans,
      because it was the first top league title since 1990. A football legend Kenny Dalglish was the coach and player of Liverpool in 1990. 
      200 miles away from Liverpool´s Anfield stadium, Chelsea beat Man City 2-1.`,
    content: `This week, The Liverpool Football Club won the Premier League title. It was a special moment for thousands of Liverpool´s fans,
      because it was the first top league title since 1990. A football legend Kenny Dalglish was the coach and player of Liverpool in 1990. 
      200 miles away from Liverpool´s Anfield stadium, Chelsea beat Man City 2-1. The game took place at an empty stadium, 
      because of the coronavirus pandemic. The result meant that no other team could overtake Liverpool in the league. 
      After the game, 2,000 of Liverpool´s fans came to Anfield, and they started to celebrate.
      In the UK, people still must not meet in large groups; however, police did not try to stop the cheering fans.`,
    date: '02-07-2020',
    author: 'Igor Mandziak',
    imageUrl: 'https://www.newsinlevels.com/wp-content/uploads/2020/06/Obrazek.jpg',
    sourceUrl: 'https://www.newsinlevels.com/',
    id: 4,
    source: 'Internet'
  }
  ];

  currentNewsView = {
    title: 'Liverpool Wins',
    shortDesc: `This week, The Liverpool Football Club won the Premier League title. It was a special moment for thousands of Liverpool´s fans,
      because it was the first top league title since 1990. A football legend Kenny Dalglish was the coach and player of Liverpool in 1990. 
      200 miles away from Liverpool´s Anfield stadium, Chelsea beat Man City 2-1.`,
    content: `This week, The Liverpool Football Club won the Premier League title. It was a special moment for thousands of Liverpool´s fans,
      because it was the first top league title since 1990. A football legend Kenny Dalglish was the coach and player of Liverpool in 1990. 
      200 miles away from Liverpool´s Anfield stadium, Chelsea beat Man City 2-1. The game took place at an empty stadium, 
      because of the coronavirus pandemic. The result meant that no other team could overtake Liverpool in the league. 
      After the game, 2,000 of Liverpool´s fans came to Anfield, and they started to celebrate.
      In the UK, people still must not meet in large groups; however, police did not try to stop the cheering fans.`,
    date: '02-07-2020',
    author: 'Igor Mandziak',
    imageUrl: 'https://www.newsinlevels.com/wp-content/uploads/2020/06/Obrazek.jpg',
    sourceUrl: 'https://www.newsinlevels.com/',
    id: 4,
    source: 'Internet'
  }

  public getNewsList() {
    return this.newsList;
  }
  
  public updateNews(news) {
    news.id = this.newsList[this.newsList.length - 1].id + 1;
    news.source = 'User';
    this.newsList.push(news);
  }

  public setCurrrentNewsView(news){
    this.currentNewsView = news;
  }
  
  public getCurrentNewsView() {
    return this.currentNewsView;
   }
}