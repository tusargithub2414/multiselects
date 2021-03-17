import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'selectDropDown';
  public countries: any;

  constructor(){
    this.countries = [
      {
      "label": "India",
      "value": "IN"
      },
      {
      "label": "France",
      "value": "FR"
      },
      {
      "label": "Germany",
      "value": "GR"
      },
      {
        "label": "United States of America",
        "value": "USA"
        },
        {
          "label": "Brazil",
          "value": "BRA"
          }, {
            "label": "Canada",
            "value": "CAN"
            }
      ]
  }

  function(event:any){
    console.log('-----------------',event);
  }
}
