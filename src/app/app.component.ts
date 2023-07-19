import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit{
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this._checkForInstagramAuthCode()
  }

  private _checkForInstagramAuthCode() {
    if (this.route.snapshot.params['code']) {
      console.log(this.route.snapshot.params);
    }
  }
}
