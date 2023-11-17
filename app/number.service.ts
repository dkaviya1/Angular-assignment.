import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  oddNumber$ = new Subject<number>();
  evenNumber$ = new Subject<number>();

  startGeneratingNumbers() {
    const oddInterval = setInterval(() => {
      const oddNumber = Math.floor(Math.random() * 100);
      this.oddNumber$.next(oddNumber);
    }, 1000);

    const evenInterval = setInterval(() => {
      const evenNumber = Math.floor(Math.random() * 100) * 2;
      this.evenNumber$.next(evenNumber);
    }, 1000);
  }

  stopGeneratingNumbers() {
    // Implement logic to stop number generation.
  }
}
