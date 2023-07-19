import { Component, OnInit } from '@angular/core';
import { InstagramDOMService } from 'Core/services/instagram-dom.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private instagramService: InstagramDOMService) { }

  ngOnInit() {
  }

  sendAuthRequest() {
    this.instagramService.sendAuthRequest().subscribe(res => {
      console.log(res);
    })
  }
}
