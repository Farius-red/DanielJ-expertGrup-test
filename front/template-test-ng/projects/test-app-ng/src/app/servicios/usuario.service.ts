
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JuliaoSystemCrudHttpService } from './juliaoSystemCrudHttpService';
import { environment } from '../../environments/environment';
import { UsuarioResponse } from '../models/UsuarioResponse';
import { PlantillaResponse } from '../models/plantillaResponse';
import { Observable } from 'rxjs';



  @Injectable({
    providedIn: 'root'
  })
  export class UsuarioService extends JuliaoSystemCrudHttpService<PlantillaResponse<UsuarioResponse>> {
    


    constructor(
      protected override http: HttpClient,
    ) {
      super(http);
      this.basePathUrl = environment.baseUrls+"/api/users/";
    }


    login(email: string, password: string): Observable<PlantillaResponse<UsuarioResponse>> {
      let params = new HttpParams()
        .set('email', email)
        .set('password', password);
  
      return this.http.get<PlantillaResponse<UsuarioResponse>>(this.basePathUrl + "login", { params });
    }


  }
