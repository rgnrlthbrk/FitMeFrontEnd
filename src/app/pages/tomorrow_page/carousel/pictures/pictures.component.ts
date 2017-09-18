import {
  AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnDestroy,
  Output, Renderer,
  SimpleChanges
} from '@angular/core';
import { DragScroll } from 'angular2-drag-scroll/src/angular2-drag-scroll';
import { MenuService } from '../../../../services/menu.service';
import { ParseService } from '../../../../services/parse.service';
import { MealService } from '../../../../services/meal.service';

@Component({
             selector: 'pictures-custom',
             templateUrl: './pictures.component.html',
             styleUrls: ['./pictures.component.css']
           })

export class PicturesComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input()
  tmpMeal: any;

  @Input()
  carouselImageArr: any;

  tmpCurrentMenu: any;
  clicked = false;
  flag = false;
  active: boolean;

  dragScrollDom: any;
  dragScrollRef: ElementRef;
  dragScroll: DragScroll;

  @Output() myClick: EventEmitter<any> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef,
              private element: ElementRef,
              private renderer: Renderer,
              private menuService: MenuService,
              private mealService: MealService,
              private parseService: ParseService,
              private ref: ChangeDetectorRef) {

    this.ref.reattach();
    if (this.active) {
      setInterval(() => {
        this.ref.detectChanges();
      }, 500);
    }
  }

  onClickCustom(e) {
    let count = 0;
    this.mealService.food_data_obj.forEach((meal) => {
      if(meal.name === this.tmpMeal){
        this.mealService.food_data_obj[count]= this.parseService.parseMenu(this.mealService.carouselContent[this.tmpMeal][e.index], this.tmpMeal);
      }
      count++;
    });

    this.clicked = true;
  }

  save() {
    if (this.clicked) {

      console.log('update menu data')
      this.menuService
          .updateMenuData(this.mealService.food_data_obj)
          .then((response) => {
            console.log('i pak response:');
            console.log(response);
          })
          .catch((err) => {
            console.log('Error: ' + err)
          });
      this.clicked = false;
    }
  }

  cancel() {

    if (this.clicked) {
      this.mealService.food_data_obj = this.tmpCurrentMenu;
      this.clicked = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
    console.log(changes);
    if (this.flag) {
      this.flag = false;

      this.dragScrollDom = this.element.nativeElement.querySelector('.bot');
      this.dragScrollRef = new ElementRef(this.dragScrollDom);

      this.dragScroll = new DragScroll(this.dragScrollRef, this.renderer, this.cdr);

      this.dragScroll.attach({
                               disabled: false,
                               scrollbarHidden: true,
                               yDisabled: true,
                               xDisabled: false,
                               nav: false
                             });

    }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    this.tmpCurrentMenu = this.mealService.food_data_obj;
    console.log(this.mealService.food_data_obj);
    this.flag = true;
    this.active = true;
    console.log('ngAfterViewInit endeeeeeeeeeeeeed')
  }

  ngOnDestroy(): void {
    this.ref.detach();
    this.active = false;
  }

}
