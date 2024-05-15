import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  data: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more initial data as needed
  ];

  constructor() { }

  onEdit(event: any, item: any, field: string) {
    item[field] = event.target.textContent.trim();
  }

  onDelete(id: number) {
    this.data = this.data.filter(item => item.id !== id);
  }

}
