import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare namespace instgrm {
  namespace Embeds {
    function process(): void;
  }
}

@Injectable({
  providedIn: 'root',
})
export class InstagramDOMService {
  constructor(private http: HttpClient){}

  public processEmbeddedInstagramPosts(): void {
    instgrm.Embeds.process()
  }

  public sendAuthRequest() {
    const params = {
      client_id: '118835761272903',
      redirect_uri: 'https://test-projects-sandbox.vercel.app/',
      scope: 'user_profile,user_media',
      response_type: 'code',
    }
    return this.http.post('https://api.instagram.com/oauth/authorize', {}, {params, headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
}
