import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup

  constructor(
    private fb:FormBuilder
    ) { 
    this.myForm = this.fb.group({
      usuario:[""],
      clave:[""],
    })
  }
  logearse(){
    console.log(this.myForm.value)
  }
  ngOnInit(): void {
  }

}
