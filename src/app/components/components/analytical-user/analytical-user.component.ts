import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-analytical-user',
  templateUrl: './analytical-user.component.html',
  styleUrls: ['./analytical-user.component.css']
})
export class AnalyticalUserComponent implements OnInit {

  formValue !:FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Name:[''],
      // Employee ID:[''],
      // Email Id:['']

    })
  }

}
