import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

let msgCpfInvalido = "número do registro de contribuinte individual brasileiro (CPF) inválido"

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  id_cli = '';

  cliente: Cliente = {
    id: "",
    nome: "",
    cpf: "",
    telefone: "",
  };

  nome = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  telefone = new FormControl('', [Validators.minLength(11)])

  constructor(
  private router: Router, 
  private service: ClienteService,
  private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.id_cli = this.route.snapshot.paramMap.get('id')!    
    this.findById()
  }

  cancel(): void {
    this.router.navigate(["/clientes"]);
  }

  findById():void {
    this.service.findById(this.id_cli).subscribe(resposta => {
      this.cliente = resposta;
    })
  }

  update(): void {
    this.service.update(this.cliente).subscribe(
      resposta => {
        this.router.navigate(["/clientes"]);
        this.service.message("Cliente atualizado com sucesso!");
      },
      (err) => {
        if (err.error.message.match("já cadastrado")) {
          this.service.message(err.error.message);
        } else if(err.error.errors[0].message === msgCpfInvalido){
          this.service.message("CPF inválido");
        }
      }
    );
  }

  errorValidName() {
    if(this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return null;
  }

  errorValidCPF() {
    if(this.cpf.invalid) {
      return 'O cpf deve ter 11 caracteres!';
    }
    return null;
  }

  errorValidTelefone() {
    if(this.telefone.invalid) {
      return 'O telefone deve ter 11 caracteres!';
    }
    return null;
  }

}

