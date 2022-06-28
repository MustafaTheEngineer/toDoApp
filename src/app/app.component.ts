import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Osman';
  items = [
    {description: "Kahvaltı", action: "No"},
    {description: "Sinema", action: "No"},
    {description: "A", action: "No"},
    {description: "B", action: "No"}
  ];
  count:number = this.items.length;
}
