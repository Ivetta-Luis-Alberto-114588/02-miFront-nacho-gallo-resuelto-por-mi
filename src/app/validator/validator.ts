import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function validarTelefono(control: AbstractControl) : ValidationErrors | null {

    let expresion = /^\d{3}-\d{3}-\d{3}$/

    if( expresion.test(control.value)){
        return null
    } else {
        return {telefonoOK: false}
    }
}

export function validarFecha(control: AbstractControl): ValidationErrors | null {

    const miVariable = new Date (control.value)
    const yearVariable = miVariable.getFullYear()

    if(yearVariable >= 1950 && yearVariable <= 2005){
        return null
    } else {
        return {yearIncorrecto: false}
    }
}

export function validarIguales (formulario: AbstractControl ): ValidationErrors | null {
    const var1 = formulario.get('firstName')?.value
    const var2 = formulario.get('lastName')?.value

    if( var1 === var2 ){
        return null
    } else {
        return {iguales: false}
    }

}


