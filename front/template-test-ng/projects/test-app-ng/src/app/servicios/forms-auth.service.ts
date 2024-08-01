import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsAuthService {

  constructor(private formb: UntypedFormBuilder) { }

  buildFormRegister(form: UntypedFormGroup){
    return form = this.formb.group({
       email: ['',[Validators.required, Validators.email]],
       password: ['', Validators.compose([Validators.required])], 
       userName: [''], 
  })
 }
}
