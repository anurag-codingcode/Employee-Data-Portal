import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    if (isSubmitted) {
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
  constructor(private router: Router) { }
  nameFormControl = new FormControl('', [Validators.required]);
  ageFormControl = new FormControl('', [Validators.required]);
  mobileFormControl = new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]);
  roleFormControl = new FormControl('', [Validators.required]);
  departmentFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();


  handleSubmit() {
    const storedData = localStorage.getItem('data')
    let data:any= storedData ? JSON.parse(storedData) : {}
    // console.log(data)
    // console.log("name",this.nameFormControl.errors)
    // console.log("age",this.ageFormControl.errors)
    // console.log("mobile",this.mobileFormControl.errors)
    // console.log("department",this.departmentFormControl.errors)
    // console.log("role",this.roleFormControl.errors)
    
    
    // console.log(this.nameFormControl.errors,this.ageFormControl.errors,this.mobileFormControl.errors)
    if (this.nameFormControl.errors == null && this.ageFormControl.errors == null && this.mobileFormControl.errors==null
      && this.departmentFormControl.errors == null && this.roleFormControl.errors == null
    ) {
       data={...data,
        name:this.nameFormControl.value,
        age:this.ageFormControl.value,
        mobile:this.mobileFormControl.value?.toString(),
        department:this.departmentFormControl.value,
        role:this.roleFormControl.value
       }
       localStorage.setItem('data',JSON.stringify(data))
       this.router.navigate(['/dashboard'])
      
    }
    else {
      alert("enter all fields")
    }

    // console.log("submitting")
      
  }
}
