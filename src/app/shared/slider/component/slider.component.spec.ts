import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderComponent]
    });
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment currentSlide', () => {
    component.plusSlide()
    expect(component.currentSlide).toEqual(2);
  });

  it('should decrement currentSlide', () => {
    component.minusSlide()
    expect(component.currentSlide).toEqual(1);
  });

  it('should change the value of direction to true', ()=>{
    component.autoSlide();
    expect(component.direction).toEqual(true);
  });

  it('should set the value of CurrentSlide', ()=> {
    component.setCurrentSlide(3);
    expect(component.currentSlide).toEqual(3);
  });
});
