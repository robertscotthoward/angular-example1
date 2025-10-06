import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  private http = inject(HttpClient);
  items: Array<{ title: string; description: string }> = [];

  constructor() {
    this.http.get<Array<{ title: string; description: string }>>('/assets/content.json')
      .subscribe(data => {
        this.items = data ?? [];
      });
  }
}
