import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective,
    multi: true}]
})
export class FirstLastValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // TODO écrire la règle de validation
    // En cas de règle respectée (nom != prenom), retourner null
    // Sinon retourner l'objet { firstLast : 'first name must be different from last
    const nom = control.value.nom;
    const prenom = control.value.prenom;
    if (nom !== prenom) {
      return null; // le contrôle est valide
    } else {
      return { firstLast: 'first name must be different from last name' }; // le contrôle est invalide
    }
  }



}
