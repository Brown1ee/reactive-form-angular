import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  @Output() user = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      age: '',
      password: '',
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  submitHandler() {
    this.user.emit(this.myForm.value);
    this.myForm.reset();
    console.log('user', this.myForm.value);
  }
}
