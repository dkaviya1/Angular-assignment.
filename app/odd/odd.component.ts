import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  constructor(private numberService: NumberService) {}

  ngOnInit() {
    this.numberService.startGeneratingNumbers();
    this.numberService.oddNumber$.subscribe((oddNumber) => {
      // Emit odd numbers to the Main component.
   });
  }
}
