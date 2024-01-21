import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() name:string = "Projeto Teste";
  @Input() image:string = "assets/imagem1.jpeg";
  @Input() repository:string = "https://github.com/dtayna/Apresentacao-angular";
  @Input() description:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
