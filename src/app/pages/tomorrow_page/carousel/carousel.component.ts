import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, Output,
  Renderer,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MenuService } from '../../../services/index'
import { DragScroll } from 'angular2-drag-scroll/src/angular2-drag-scroll';
import { MealService } from '../../../services/meal.service';

@Component({
             selector: 'carousel-custom',
             templateUrl: './carousel.component.html',
             styleUrls: ['./carousel.component.css'],
             changeDetection: ChangeDetectionStrategy.OnPush
           })

export class CarouselComponent implements AfterViewInit, OnDestroy, OnChanges {

  private carouselContent: any;
  public carouselImageArr: any;
  public active = false;
  public tmpMeal: any;

  @Input()
  currentMeal: any;

  @ViewChild('ref1') reference: ElementRef;

  constructor(private userProfileService: MenuService,
              private ref: ChangeDetectorRef,
              private mealService: MealService) {
    this.carouselImageArr = [];
    this.tmpMeal = '';

    if (this.currentMeal) {
      this.tmpMeal = this.currentMeal.name;

      this.ref.reattach();
      setInterval(() => {
        this.ref.detectChanges();
      }, 1000);
    }
  }

  private handleCarousel() {
    if (this.carouselContent) {
      let keys = Object.keys(this.carouselContent);
      keys.forEach((key) => {
        this.carouselImageArr['' + key] = [];
        let index = 0;
        this.carouselContent[key].forEach((meal) => {
          let obj = {
            index: index,
            image1: meal.first.subMeal.image,
            image2: meal.second.subMeal.image,
            name1: meal.first.subMeal.name,
            name2: meal.second.subMeal.name
          };
          index++;
          this.carouselImageArr['' + key].push(obj);
        });
      });
      this.mealService.carouselImageArr = this.carouselImageArr;
    } else {
      console.log('No food_data_obj for current currentMeal selection!');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentMeal) {
      this.tmpMeal = this.currentMeal.name;
    }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    this.carouselImageArr = [];
    this.userProfileService
        .getUserProfileAllMenuData()
        .then((carouselContent) => {
          this.carouselContent = carouselContent;
          this.mealService.carouselContent = carouselContent;
          this.handleCarousel();
        })
        .catch((err) => {
          console.log('Error: ' + err);
        });
  }

  ngOnDestroy(): void {
    this.active = false;
    this.ref.detach();
  }

}
