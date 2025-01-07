import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule                        } from '@angular/common';
import { MatTableDataSource, MatTableModule  } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule    } from '@angular/material/paginator';
import { MatSort, MatSortModule              } from '@angular/material/sort';
import { MatInputModule                      } from '@angular/material/input';
import { MatFormFieldModule                  } from '@angular/material/form-field';
import { MatProgressSpinnerModule            } from '@angular/material/progress-spinner';
import { HpapiService                        } from '../../services/hpapi.service';
import { StudentsData                        } from './estudantes.component.models'

@Component({
  selector   : 'app-estudantes',
  imports    : [ MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule, CommonModule ],
  templateUrl: './estudantes.component.html',
  styleUrl   : './estudantes.component.scss'
})
export class EstudantesComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'gender', 'species', 'house', 'wizard', 'ancestry', 'patronus', 'wand'];
  dataSource      = new MatTableDataSource<StudentsData>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)      sort!     : MatSort;

  snLoad = true;

  constructor (
    private hpapiService: HpapiService
  ) {
    this.getAlunos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAlunos = async () => {

    this.hpapiService.get('listarAlunos').subscribe({
      next: (result) => {
        result.map((item: any, index: number) => item.id = index + 1);
        this.dataSource.data      = result;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort      = this.sort;
        this.snLoad               = false;
      },
      error: (erro) => console.error(erro)
    });

  }

}
