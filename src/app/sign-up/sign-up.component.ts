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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);  
  matcher = new MyErrorStateMatcher();
  
  constructor(private router:Router){
    
  }

  handleSubmit(){
    if(this.emailFormControl.errors==null && this.passwordFormControl.errors==null){
      const data:any={
        id:this.emailFormControl.value,
        password:this.passwordFormControl.value
      }
      localStorage.setItem("data",JSON.stringify(data))
      this.router.navigate(['/basicinfo'])
    }
    else{
      alert("Enter all Fields")
    }
    
    
  }
}
