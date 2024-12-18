import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  loginform!:login;

  ngOnInit(): void {
      this.loginform = {
        userName: '',
        passWord: '',
      }
  }

  onSubmit(form:NgForm){
    console.log(form.value)
  }

}

class login {
  userName!: string;
  passWord!:string;
}

