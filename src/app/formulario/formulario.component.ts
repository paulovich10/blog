import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private PostService: PostService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      autor: new FormControl('', [
        Validators.required,
      ]),
      imagen: new FormControl('', [
        Validators.required,
      ]),
      fecha: new FormControl('', [
        Validators.required,
      ]),
      categoria: new FormControl('', [
        Validators.required,
      ])
    })

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.PostService.agregarPost(this.formulario.value);
  }

}
