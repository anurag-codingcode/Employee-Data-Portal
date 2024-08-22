import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    if(isSubmitted){
      // login of login or anyother on submit
    }
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
  constructor(private router:Router){}
  nameFormControl = new FormControl('', [Validators.required]);
  ageFormControl = new FormControl('', [Validators.required]);
  mobileFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();


handleSubmit(){
  console.log("submitting")
    this.router.navigate(['/dashboard'])
  }
}
