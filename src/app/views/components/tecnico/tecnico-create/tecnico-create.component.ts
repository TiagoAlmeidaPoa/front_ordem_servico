import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent {

  constructor(private router : Router){}

  cancel(): void{
    this.router.navigate(['/tecnicos'])
  }

}
