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
      client_id: '298562645920307',
      redirect_uri: 'https://test-projects-sandbox-cgcm4zb4r-pashaluckwork-gmailcom.vercel.app/',
      scope: 'user_profile,user_media',
      response_type: 'code',
    }
    return this.http.get('https://api.instagram.com/oauth/authorize', { params });
  }
}
