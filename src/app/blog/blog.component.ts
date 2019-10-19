import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Entrada } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPosts: Entrada[];

  constructor(private PostService: PostService) {
    this.arrPosts = [];
  }

  ngOnInit() {

    this.PostService.getAll()
      .then(arr => {
        // Asigno el array que me devuelve el servicio al array que utilizaré en la plantilla
        this.arrPosts = arr;
      })
  }

}
