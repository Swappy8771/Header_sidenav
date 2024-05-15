import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; // Correct import

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentDate: Date = new Date();
  name:String = " Swapnil";
}
