import { Routes } from '@angular/router';

// COMPONENTES
import { HeaderComponent      } from './components/header/header.component';
import { HomeComponent        } from './modules/home/home.component';
import { PersonagensComponent } from './modules/personagens/personagens.component';
import { EstudantesComponent  } from './modules/estudantes/estudantes.component';
import { ProfessoresComponent } from './modules/professores/professores.component';
import { FeiticosComponent    } from './modules/feiticos/feiticos.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
        { path: 'home'        , component: HomeComponent        }
      , { path: 'personagens' , component: PersonagensComponent }
      , { path: 'alunos'      , component: EstudantesComponent  }
      , { path: 'professores' , component: ProfessoresComponent }
      , { path: 'feiticos'    , component: FeiticosComponent    }
    ]
  }
];

