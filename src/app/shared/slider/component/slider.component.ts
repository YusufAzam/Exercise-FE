import { IfStmt } from '@angular/compiler';
import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements DoCheck {

  abc: boolean;
  currentSlide: number
  constructor(){ 
   this.abc = false;
   this.currentSlide = 1;
  }
 
  ngDoCheck(): void {

  }
  
  public plusSlide(){
    console.log(this.currentSlide)
    
    if(this.currentSlide !== 2){
      this.currentSlide ++;
     
    }
  }

  public minusSlide(){
    if(this.currentSlide !== 1){
      this.currentSlide --;
    }
  }

  // private showSlides = (n: number)=> {
  //   let i;
  //   let slides = 
  // }

}
