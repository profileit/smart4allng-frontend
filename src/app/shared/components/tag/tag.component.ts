import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sf-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent  implements OnInit {
  
 @Input() tagText!:string;
 @Input() tagType!: string

  constructor() { }

  ngOnInit() {}

}
