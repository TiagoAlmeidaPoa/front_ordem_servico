import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit {

  ordensServico: OS[] = [];

  displayedColumns: string[] = ['tecnico', 'cliente', 'abertura', 'fechamento', 'prioridade', 'status', 'action'];
  dataSource = new MatTableDataSource<OS>(this.ordensServico);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : OsService,
    private router:Router,
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService
    ) {}

  ngAfterViewInit() {    
    this.findAll();
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.ordensServico = resposta;
      this.listarTecnico();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OS>(this.ordensServico);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['ordemservicos/create'])
  }

  listarTecnico():void {
    this.ordensServico.forEach(os => {
      this.tecnicoService.findById(os.tecnico).subscribe(resposta => {
        os.tecnico = resposta.nome
      })
    })
  }

  listarCliente():void {
    this.ordensServico.forEach(os => {
      this.clienteService.findById(os.cliente).subscribe(resposta => {
        os.cliente = resposta.nome
      })
    })
  }

  prioridade(prioridade : any) {
    if(prioridade == "BAIXA") {
      return 'baixa'
    } else if(prioridade == 'MEDIA') {
      return 'media'
    } else {
      return 'alta'
    }
  }

}