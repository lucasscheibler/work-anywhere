import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'work-anywhere';

  mockData = [
    {
      "image": "https://via.placeholder.com/150",
      "title": "Workplace 1",
      "description": "Workplace 1 description"
    },
    {
      "image": "https://via.placeholder.com/150",
      "title": "Workplace 2",
      "description": "Workplace 2 description"
    },
    {
      "image": "https://via.placeholder.com/150",
      "title": "Workplace 3",
      "description": "Workplace 3 description"
    },
    {
      "image": "https://via.placeholder.com/150",
      "title": "Workplace 4",
      "description": "Workplace 4 description"
    }
  ]

  async ngOnInit() {

  }


}
