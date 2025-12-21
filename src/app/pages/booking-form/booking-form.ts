import { Component, input } from '@angular/core';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMask } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';

import { DatePickerModule } from 'primeng/datepicker';
import { TreeSelect } from 'primeng/treeselect';
@Component({
  selector: 'app-booking-form',
  imports: [FloatLabel,TreeSelect,DatePickerModule ,Button,CardModule,ReactiveFormsModule,InputTextModule,InputNumberModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm {

  paymentOptions = [
  { label: 'Cash', value: 'cash' },
  { label: 'UPI', value: 'upi' },
  { label: 'Card', value: 'card' },
  { label: 'Bank Transfer', value: 'bank' }
];
  eventTimeOptions = [
  { label: 'MORNING', value: 'morning' },
  { label: 'MID Day', value: 'midDay' },
  { label: 'EVENING', value: 'evening' },
  { label: 'NIGHT', value: 'night' }
];
 constructor(private fb:FormBuilder){

 }
//  eventForm!:FormGroup;
  // this.eventForm:FormGroup = this.fb.group({
  //   eventName: ['']
  // });


}
