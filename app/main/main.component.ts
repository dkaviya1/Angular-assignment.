import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  generatingNumbers = false;

  startGeneratingNumbers() {
    this.generatingNumbers = true;

    const oddInterval = setInterval(() => {
      if (this.generatingNumbers) {
        const oddNumber = Math.floor(Math.random() * 100);
        this.oddNumbers.push(oddNumber);
      } else {
        clearInterval(oddInterval);
      }
    }, 1000);

    const evenInterval = setInterval(() => {
      if (this.generatingNumbers) {
        const evenNumber = Math.floor(Math.random() * 100) * 2;
        this.evenNumbers.push(evenNumber);
      } else {
        clearInterval(evenInterval);
      }
    }, 1000);
  }

  stopGeneratingNumbers() {
    this.generatingNumbers=false;
  }

}

