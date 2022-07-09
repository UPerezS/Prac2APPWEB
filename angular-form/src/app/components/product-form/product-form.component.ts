import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {debounce, debounceTime} from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  emailctrl= new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(5)]);
  constructor() { 
    this.emailctrl.valueChanges
    .this.service.function
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      console.log(value);
    });
  }

  ngOnInit(): void {
  }

  getEmail(event:Event){
    event.preventDefault();
    console.log(this.emailctrl.value);
  }

}
