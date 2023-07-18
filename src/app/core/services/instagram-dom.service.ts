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
  public processEmbeddedInstagramPosts(): void {
    instgrm.Embeds.process()
  }
}
