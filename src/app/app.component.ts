import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Newsfeed', url: '/newsfeed', icon: 'newspaper' },
    { title: 'Smart4Links', url: '/smart4links', icon: 'grid' },
    { title: 'Smart4Play', url: '/smart4play', icon: 'ribbon' },
    { title: 'Challenges', url: '/smart4play/challange', icon: 'ribbon' },
    { title: 'Events', url: '/events', icon: 'calendar' },
  ];
  constructor() {}
}
