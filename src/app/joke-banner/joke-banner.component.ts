import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-joke-banner',
  templateUrl: './joke-banner.component.html',
  styleUrls: ['./joke-banner.component.css']
})
export class JokeBannerComponent implements OnInit {

  joke$;

  constructor(private postService: PostService) {
    setInterval(this.joke$ = postService.getJokes(), 1000);
  }

  ngOnInit() {
  }

}
