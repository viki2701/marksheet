import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentnameService {

  constructor() { }
getdata(){
  return[
  {name:'vignesh', age: '32', dob:'27.01.1992'},
  {name:'Aadhira', age: '2', dob:'03.03.2023'},
  {name:'Guna', age: '30', dob:'25.05.1994'}]
}
}
