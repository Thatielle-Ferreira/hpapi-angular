import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule  } from '@angular/material/table';
import { MatInputModule                      } from '@angular/material/input';
import { MatFormFieldModule                  } from '@angular/material/form-field';
import { HpapiService                        } from '../../services/hpapi.service';
import { MatPaginator, MatPaginatorModule    } from '@angular/material/paginator';

export interface CharactersData {
  id             : number;
  name           : string;
  actor          : string;
  gender         : string;
  ancestry       : string;
  house          : string;
  species        : string;
  wizard         : string;
  patronus       : string;
  wand           : string;
  hogwartsStaff  : boolean;
  hogwartsStudent: boolean;
}

@Component({
  selector   : 'app-personagens',
  imports    : [ MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule ],
  templateUrl: './personagens.component.html',
  styleUrl   : './personagens.component.scss'
})
export class PersonagensComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'actor', 'gender', 'ancestry', 'house', 'species', 'wizard', 'patronus', 'wand', 'hogwartsStaff', 'hogwartsStudent'];
  dataSource      = new MatTableDataSource<CharactersData>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor (
    private hpapiService: HpapiService
  ) {
    this.getPersonagens();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getPersonagens = async () => {

    this.hpapiService.get('listarPersonagens').subscribe({
      next: (result) => {
        result.map((item: any, index: number) => item.id = index + 1);
        this.dataSource.data = result;
        this.dataSource.paginator = this.paginator;
      },
      error: (erro) => console.error(erro)
    });

  }

}
