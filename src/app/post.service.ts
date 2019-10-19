import { Injectable } from '@angular/core';
import { Entrada } from './models/post.model';
import { POST } from './db/posts.db';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAll(): Promise<Entrada[]> {
    let prom = new Promise<Entrada[]>((resolve, reject) => {
      resolve(POST);
    })
    return prom;
  }

  agregarPost(post: Entrada) {
    POST.push(post);
    console.log(POST);
  }
}
