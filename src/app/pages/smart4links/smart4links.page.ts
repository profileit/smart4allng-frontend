import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/interfaces/Link';
import { mockedLinks, mockedSocialLinks } from 'src/mocks/LinksMock';

@Component({
  selector: 'app-smart4links',
  templateUrl: './smart4links.page.html',
  styleUrls: ['./smart4links.page.scss'],
})
export class Smart4linksPage implements OnInit {
  
  links: Link[] = [];
  socialLinks: Link[] = [];

  constructor() { 
    this.links = [...mockedLinks];
    this.socialLinks = [...mockedSocialLinks]
  }

  ngOnInit() {
  }
  
  private trackByFn(index: number, link: Link) {
    return link.id;
    }

}
