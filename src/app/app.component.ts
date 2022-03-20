import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  principal: number = 10000;
  interestRate: number = 3.875;
  time: number = 5;
  interest: number;

  calculateInterest = () =>
    (this.interest = ((this.principal * this.interestRate) / 100) * this.time);

  terms: number = 0;
  fibonacciSeries: { n: number; Fn: number }[] = [];

  fibonacci = () => {
    switch (true) {
      case this.terms > 2:
        this.fibonacciSeries = [
          { n: 1, Fn: 0 },
          { n: 2, Fn: 1 },
        ];
        for (let i = 2; i < this.terms; i++) {
          this.fibonacciSeries.push({
            n: i + 1,
            Fn: this.fibonacciSeries[i - 2].Fn + this.fibonacciSeries[i - 1].Fn,
          });
        }
        return this.fibonacciSeries;
      case this.terms === 2:
        this.fibonacciSeries = [
          { n: 1, Fn: 0 },
          { n: 2, Fn: 1 },
        ];
        return this.fibonacciSeries;
      case this.terms === 1:
        this.fibonacciSeries = [{ n: 1, Fn: 0 }];
        return this.fibonacciSeries;
      default:
        this.fibonacciSeries = [{ n: null, Fn: null }];
        return this.fibonacciSeries;
    }
  };
}
