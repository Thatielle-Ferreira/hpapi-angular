import { Component, OnInit                  } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule                     } from '@angular/material/input';
import { MatFormFieldModule                 } from '@angular/material/form-field';
import { HpapiService                       } from '../../services/hpapi.service';

export interface CharactersData {
  name           : string;
  actor          : string;
  gender         : string;
  ancestry       : string;
  house          : string;
  species        : string;
  wizard         : string;
  patronus       : string;
  wand           : string;
  hogwartsStaff  : string;
  hogwartsStudent: string;
}

@Component({
  selector   : 'app-personagens',
  imports    : [ MatFormFieldModule, MatInputModule, MatTableModule ],
  templateUrl: './personagens.component.html',
  styleUrl   : './personagens.component.scss'
})
export class PersonagensComponent implements OnInit {

  displayedColumns: string[] = ['name', 'actor', 'gender', 'ancestry', 'house', 'species', 'wizard', 'patronus', 'wand', 'hogwartsStaff', 'hogwartsStudent'];
  dataSource: MatTableDataSource<CharactersData>;

  arCharacters: any;

  constructor (
    private hpapiService: HpapiService
  ) {
    this.getPersonagens();
    this.dataSource = new MatTableDataSource(this.arCharacters);
  }

  ngOnInit() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPersonagens = async () => {

    this.hpapiService.get('listarPersonagens').subscribe({
      next: (result) => {
        this.arCharacters = result;
        this.dataSource   = new MatTableDataSource(this.arCharacters);
      },
      error: (erro) => console.error(erro)
    });

  }

}
