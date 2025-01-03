import { CommonModule } from '@angular/common';
import { Component,} from '@angular/core';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import{StudentnameService} from '../service/studentname.service'

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.scss'
})
export class CreateuserComponent {

  studentdata:any;
  constructor(SE:StudentnameService){
    this.studentdata=SE.getdata();
  }

  createuserform = new FormGroup ({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl(),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]),
    mobileNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    passWord: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    schoolName: new FormControl(),
    standard: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    address1: new FormControl('',[Validators.required]),
    address2: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    pincode: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{6}$")]),
  })

    get fistname(){
      return this.createuserform.get('firstName')
    }

    get listname(){
      return this.createuserform.get('LastName')
    }
    get emailid(){
      return this.createuserform.get('email')
    }

    get mobilenumber(){
      return this.createuserform.get('mobileNumber')
    }

    get password(){
      return this.createuserform.get('passWord')
    }

    get confirmpassword(){
      return this.createuserform.get('confirmPassword')
    }
    get schoolname(){
      return this.createuserform.get('schoolName')
    }

    get standard1(){
      return this.createuserform.get('standard')
    }
    get date(){
      return this.createuserform.get('dob')
    }

    get addressline1(){
      return this.createuserform.get('address1')
    }

    get addressline2(){
      return this.createuserform.get('address2')
    }

    get city1(){
      return this.createuserform.get('city')
    }
    get state1(){
      return this.createuserform.get('state')
    }

    get pincode1(){
      return this.createuserform.get('pincode')
    }

  onsubmit(){
    console.log(this.createuserform.value)
  }

}
