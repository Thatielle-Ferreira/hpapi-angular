import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HpapiService {

  constructor(private http: HttpClient) { }

  private obUrl: { [key: string]: string } = {
      listarPersonagens : 'characters'
    , listarAlunos      : 'characters/students'
    , listarProfessores : 'characters/staff'
    , listarFeiticos    : 'spells'
  }

  get = (action: string) => this.http.get<any>(`https://hp-api.onrender.com/api/${this.obUrl[action]}`)

}
