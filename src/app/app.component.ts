import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results!: number;
  firstNum!: number;
  secondNum!: number;
  length = false;

  getFirstNum(fNum: any) {
    const parsedValue1 = parseFloat(fNum);
    console.log(parsedValue1);
    this.firstNum = parsedValue1;
  } 

  getSecondNum(sNum: any) {
    const parsedValue2 = parseFloat(sNum);
    console.log(parsedValue2);
    this.secondNum = parsedValue2;
  }

  onAdd () {
    if (!isNaN(this.firstNum) && !isNaN(this.secondNum)) {
      const result = this.firstNum + this.secondNum;
      this.results = result;
      this.length = true;
    }
  }

  onSub () {
    if (!isNaN(this.firstNum) && !isNaN(this.secondNum)) {
      const result = this.firstNum - this.secondNum;
      this.results = result;
      this.length = true;
    }
  }

  onMul () {
    if (!isNaN(this.firstNum) && !isNaN(this.secondNum)) {
      const result = this.firstNum * this.secondNum;
      this.results = result;
      this.length = true;
    }
  }

  onDiv () {
    if (!isNaN(this.firstNum) && !isNaN(this.secondNum)) {
      const result = this.firstNum / this.secondNum;
      this.results = result;
      this.length = true;
    }
  }

}
