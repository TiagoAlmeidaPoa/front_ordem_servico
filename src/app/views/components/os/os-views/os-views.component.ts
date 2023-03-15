import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { OsService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-views',
  templateUrl: './os-views.component.html',
  styleUrls: ['./os-views.component.css']
})
export class OsViewsComponent implements OnInit {

  os: OS = {
    prioridade: '',
    observacoes: '',
    status: '',
    tecnico: '',
    cliente: ''
  }

  constructor(
    private route: ActivatedRoute,
    private service: OsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get("id");
    this.findById();
  }

  findById():void {
    this.service.findById(this.os.id).subscribe(resposta => {
      this.os = resposta;
    })
  }

  return(): void {
    this.router.navigate(["/os"])
  }

}
