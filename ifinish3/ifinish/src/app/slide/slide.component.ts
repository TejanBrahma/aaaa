import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DatatwoService } from '../datatwo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @ViewChild('carouselSlide')
  private carouselSlide!: ElementRef<HTMLDivElement>;
  eventData!: any;
  eventDataTwo!: any;
  width: any;
  scroll = 0;
  interval = 0;
  carouselImages!: any;
  size: any;
  mobile!: boolean;
  innerWidth: any;
  showNavigationArrows = true;
  //showNavigationIndicators = false;
  animation = true;
  images: any[] = [];
  constructor(private datatwoService: DatatwoService, private router: Router) { }
  
  ngOnInit(): void {
    let j = -1;
    this.eventData = this.datatwoService.ticketDataTwo;
    console.log('w ', window.innerWidth);
    if (window.innerWidth <= 768) {
      console.log('hi');
      // 768px portrait
      this.mobile = true;
      this.showNavigationArrows = true;
    } else {
      this.mobile = false;
    }
    for (var i = 0; i < this.eventData.length; i++) {
      if (i % 3 == 0) {
        j++;
        this.images[j] = [];
        this.images[j].push(this.eventData[i]);
      } else {
        this.images[j].push(this.eventData[i]);
      }
    }
  }
  onCardClick(card: any) {
    console.log({ card });
    this.router.navigate([
      'a', `${card.race.split(' ').join('-')}-${card.raceid}`,
    ]);
  }
}
