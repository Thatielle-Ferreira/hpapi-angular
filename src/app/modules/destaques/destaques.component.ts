import { Component       } from '@angular/core';
import { CommonModule    } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule   } from '@angular/material/card';
import { HpapiService    } from '../../services/hpapi.service';
import { CharactersData  } from '../../interfaces/models/destaques';

@Component({
  selector       : 'app-destaques',
  templateUrl    : './destaques.component.html',
  styleUrl       : './destaques.component.scss',
  imports        : [ MatCardModule, MatButtonModule, CommonModule ]
})
export class DestaquesComponent {

  arCharacters: CharactersData[] = [];

  constructor (
    private hpapiService: HpapiService
  ) {
    this.getPersonagens();
  }

  getPersonagens = async () => {

    this.hpapiService.get('listarPersonagens').subscribe({
      next: (result) => {
        result = result.filter((item: any) => !!item.image);
        this.arCharacters = result;
      },
      error: (erro) => console.error(erro)
    });

  }

}
