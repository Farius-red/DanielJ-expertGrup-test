import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';




export  class JuliaoSystemCrudHttpService<E> {
    protected http!: HttpClient;
    basePathUrl: string ="";
    
  
    constructor(http: HttpClient){};
  
   

    add(entidad: any):Observable<E>{
        
        return  this.http.post<E>(this.basePathUrl+"add",entidad,{});
        
    };

   
    all(numeroDocumento?: string | null, tipoDocumento?: string | null): Observable<E> {
        let params = new HttpParams();
        if (numeroDocumento) {
          params = params.append('numeroDocumento', numeroDocumento);
        }
        if (tipoDocumento) {
          params = params.append('tipoDocumento', tipoDocumento);
        }
        return this.http.get<E>(this.basePathUrl + "all", { params });
      }
   
}