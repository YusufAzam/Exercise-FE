import { Component,OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {

  currentSlide: number
  subscription !: Subscription;
  source: Observable<number>
  direction: boolean;

  constructor(){ 
   this.currentSlide = 1;
   this.source = interval(4000);
   this.direction = true;
  }
 
  ngOnInit(): void {
    this.subscription = this.source.subscribe(value => this.autoSlide());
  }

  private resetTimer(){
    this.subscription.unsubscribe();
    this.subscription = this.source.subscribe(value => this.autoSlide());
  }
  
  public plusSlide(){
    console.log(this.currentSlide)
    
    if(this.currentSlide !== 3){
      this.currentSlide ++;
      this.resetTimer();
    }
  }

  public minusSlide(){
    if(this.currentSlide !== 1){
      this.currentSlide --;
      this.resetTimer();
    }
  }

  public autoSlide(){
      if(this.currentSlide === 3){
        this.direction = false;
      }

      if(this.currentSlide === 1){
        this.direction = true;
      }
    
      if(this.direction){
          this.currentSlide ++;
      }else {
          this.currentSlide --;  
      }
  }

  public setCurrentSlide(currentSlide: number){
    this.currentSlide = currentSlide;
    this.resetTimer();
  }

}
