import { Component, OnInit } from '@angular/core';
import { ForumsService } from '../services/forums.service';
import { Forum } from '../services/data';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forum: Forum;

  constructor(private forumsService: ForumsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.forum = this.forumsService.forum[params["forum_alias"]];
      if(!this.forum) this.router.navigate(['not-found']);
    });
  }

}
