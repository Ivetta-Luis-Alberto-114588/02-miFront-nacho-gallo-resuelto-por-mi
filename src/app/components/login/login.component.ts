import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/interfaces/ilogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miForm! : FormGroup

  modal: boolean = false
  
  constructor(private serviceLogin: LoginService, private fb: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.inicializarMiForm()    
  }

  inicializarMiForm(){
    this.miForm = this.fb.group({
      email: [],
      password:[]
    })
  }



  login(){
    const x: ILogin = {
      email: this.miForm.get('email')?.value,
      password: this.miForm.get('password')?.value
    }

    this.serviceLogin.login(x).subscribe({
      next: (data:any) => {
        const token = data.access_token
        const idUser= data.id
        sessionStorage.clear()
        sessionStorage.setItem("token", JSON.stringify(token))
        sessionStorage.setItem("id", JSON.stringify(idUser))


        this.router.navigate(["profile"])
        
      },
      error: () => {
        this.mostrarOcularModal()
      }
    })
    
  }

  mostrarOcularModal(){
    this.modal = !this.modal 
  }





}
