import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tc-create-colleague',
  templateUrl: './create-colleague.page.html',
  styleUrls: ['./create-colleague.page.scss']
})
export class CreateColleaguePage {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
    });
  }

  get nom() {
    return this.form.get('nom');
  }

  get prenom() {
    return this.form.get('prenom');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    if (this.form.valid) {
      // Envoyer les données du formulaire au serveur
      console.log(this.form.value);
    }
  }


}
