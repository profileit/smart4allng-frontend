
import { Component,  OnInit } from '@angular/core';
import { News } from 'src/app/shared/interfaces/News';
import { newsFeedService} from './newsfeed.services';
import { mockedUserList } from 'src/mocks/UserMock';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {
  
  newslist: News[] = [];
  
  constructor(public newsService: newsFeedService) {}

  ngOnInit() {
    this.newsService.getNews()
    .subscribe({
      next: (response: News[]) => {
        this.newslist = response;
      },
      error: (error)=> {
        console.log(error)
      }
    });
  }
}
