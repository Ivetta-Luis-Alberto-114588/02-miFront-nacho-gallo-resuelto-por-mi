import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICountry } from 'src/app/interfaces/country';
import { IUser } from 'src/app/interfaces/IUser';
import { ProfileService } from 'src/app/services/profile.service';
import { validarFecha, validarIguales, validarTelefono } from 'src/app/validator/validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  miForm!: FormGroup

  listadoPaises : ICountry [] = []
  listadoProvincias: any[] = []
  user: IUser = {} as IUser

  constructor(private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.inicializarForm()
    this.obtenerPaises()
    this.obtenerUser()


    this.country?.valueChanges.subscribe({
      next: (data) =>{
        
        console.log(data);
        
        const index = this.listadoPaises.findIndex(x => x.pais === data)
        this.listadoProvincias = this.listadoPaises[index].provincias
        
        console.log(this.listadoProvincias);
        
      }
    })
  }

  inicializarForm(){
    this.miForm = this.fb.group({
      userName: ["", [Validators.minLength(8), Validators.maxLength(50)]],
      firstName: ["", [Validators.required, Validators.minLength(20)]],
      lastName: ["", [Validators.required, Validators.minLength(20)]],
      country: ["", Validators.required],
      state: ["", Validators.required],
      email: ["", [Validators.email, Validators.maxLength(100)]],
      birthDate: ["", validarFecha],
      phoneNumber: ["", [validarTelefono]],
      avatarUrl: [],
      id:[]
    }, {validators: validarIguales})
  }

  obtenerUser(){
    this.profileService.getUserById().subscribe({
      next: (data: IUser)=> {
        this.user = data
        this.miForm.patchValue(this.user)
        
      }
    })
  }

  obtenerPaises(){
    this.profileService.getAllCountries().subscribe({
      next: (data : ICountry[])=>{
        this.listadoPaises = data
        // console.log(this.listadoPaises)
      }
    })
  }


  get country(){
    return this.miForm.get('country')
  }

  get state(){
    return this.miForm.get('state')
  }

  get phoneNumber(){
    return this.miForm.get('phoneNumber')
  }

  get birthDate (){
    return this.miForm.get('birthDate')
  }



  guardar(){
    this.user = this.miForm.value
    this.profileService.updataUser(this.user).subscribe({
      next: () => {
        alert("correcto")
      }
    })
  }
  

}
