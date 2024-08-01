import { UserResponses } from './../../../../../../../../src/utils/userResponses';

import { FormsAuthService } from './../../servicios/forms-auth.service';
import { LayoutModule } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { CoreModule } from 'template-test-ng';
import { UsuarioService } from '../../servicios/usuario.service';
import { UsuarioResponse } from '../../models/UsuarioResponse';
import { PlantillaResponse } from '../../models/plantillaResponse';
import { InformacionUserComponent } from '../informacion-user/informacion-user.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CoreModule,LayoutModule,InformacionUserComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent  implements OnInit{



  formUsuarios!: UntypedFormGroup;
  response: PlantillaResponse<UsuarioResponse> = new PlantillaResponse<UsuarioResponse>();
 
  isFound: boolean = false;
  isLogin : boolean = false;
   userName: string ="";
   email: string = "";

  constructor(private formSvc:FormsAuthService,
    private userSvc: UsuarioService
  ) {

  }

  ngOnInit(): void {
    this.buildForms();
  }

  buildForms(){
    this.formUsuarios =this.formSvc.buildFormRegister(this.formUsuarios)
   } 


   construirUsuario(){
    if(this.formUsuarios.valid){

      let usuario: UsuarioResponse ={
        id: '',
        username: (this.formUsuarios.get('userName')?.value)?this.formUsuarios.get('userName')?.value:"",
        password: this.formUsuarios.get('password')?.value,
        email: this.formUsuarios.get('email')?.value
      }

      return usuario;
     }
     return undefined
   }

   Registrar() {
       let usuario = this.construirUsuario();
       if(usuario != undefined)
      this.userSvc.add(usuario);
    }
   
    noUserRegister() {
       (this.isLogin)?this.isLogin = false:this.isLogin=true;
      }
  
   login(){
         let usuario = this.construirUsuario()
         if(usuario != undefined)
          this.userSvc.login(usuario.email,usuario.password);
   }

  // buscar() {
  //    if(this.formUsuarios.valid){
  //     this.userSvc.all(this.formUsuarios.get('numeroDocumento')?.value ,this.formUsuarios.get('tipoDocumento')?.value)
  //     .subscribe(res => {
  //       if(res.rta && res.dataList ){
  //         this.isFound = true;
  //         this.primerApellido=res.dataList[0].primerApellido;
  //         this.primerNombre = res.dataList[0].primerNombre;
  //       }
        
  //     })
       
  //    }
  //   }
}
