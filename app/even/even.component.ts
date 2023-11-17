import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  constructor(private numberService: NumberService) {}

  ngOnInit() {
    this.numberService.startGeneratingNumbers();
    this.numberService.evenNumber$.subscribe((evenNumber) => {
      // Emit odd numbers to the Main component.
   });
  }
}
