import { Component, input, OnInit } from '@angular/core';
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
  imports: [FloatLabel, TreeSelect,ReactiveFormsModule, DatePickerModule, Button, CardModule, ReactiveFormsModule, InputTextModule, InputNumberModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm implements OnInit{

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

  eventForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(){
    this.createForm();
  }
  createForm() {

    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      functionTime: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBooking: ['', Validators.required],
      todayDate: [new Date()],
      phoneNo: ['', Validators.required],
      alternativePhoneNo: ['', Validators.required],
      totalAmount: ['', Validators.required],
      advanceAmount: ['', Validators.required],
      paymentMode: ['', Validators.required],
      transactionId: ['']
    });
  }

  onSubmit(){
    if(this.eventForm.valid){
      const eventData = this.eventForm.value;
      console.log(eventData,"eventData")
      const storeEvent = localStorage.getItem('eventBookingData');
      const events = storeEvent ? JSON.parse(storeEvent):[];

      const newId = events.length > 0 ? Math.max(...events.map((e:any) => e.id || 0))+1 : 1;

      const eventWithId = {
        id: newId,
        ...eventData
      };

      events.unshift(eventWithId);
      localStorage.setItem('eventBookingData',JSON.stringify(events));
    }else{
      this.eventForm.markAllAsTouched();
    }
  }


  // eventForm:FormGroup = new FormGroup({

  // })


}
