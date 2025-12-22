import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Master } from '../../services/master';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-event-details',
    imports: [TableModule,FormsModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails implements OnInit{

   products!: [];
   isUnlocked = false;
   enteredPassword =''
     private readonly correctPassword = '1234';

    constructor(private productService: Master) {}

    ngOnInit() {
      this.getAllData();
      }

      
      getAllData(){
      
              const events = localStorage.getItem('eventBookingData');
              const getEvents = events ? JSON.parse(events):[];
              this.products = getEvents;
                    
    }

    checkPassword() {
    this.isUnlocked = this.enteredPassword === this.correctPassword ;
    }
}
  
