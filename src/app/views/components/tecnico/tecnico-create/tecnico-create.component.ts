import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Tecnico } from "src/app/models/tecnico";
import { TecnicoService } from "src/app/services/tecnico.service";

@Component({
  selector: "app-tecnico-create",
  templateUrl: "./tecnico-create.component.html",
  styleUrls: ["./tecnico-create.component.css"],
})
export class TecnicoCreateComponent {
  tecnico: Tecnico = {
    id: "",
    nome: "Tiago Almeida",
    cpf: "82574112059",
    telefone: "(00) 90000-00",
  };

  constructor(private router: Router, private service: TecnicoService) {}

  cancel(): void {
    this.router.navigate(["/tecnicos"]);
  }

  create(): void {
    this.service.create(this.tecnico).subscribe(
      (resposta) => {
        this.router.navigate(["tecnicos"]);
        this.service.message("Tecnico criado com sucesso!");
      },
      (err) => {
        if (err.error.message.match("já cadastrado")) {
          this.service.message(err.error.message);
        }
      }
    );
  }
}
