import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { DatatwoService } from '../datatwo.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  //datatwoService: any;
  constructor(private router: Router, private dataService: DataService,private datatwoService: DatatwoService, private authService : AuthService) { }

  ngOnInit(): void {
    let j = -1;
    this.eventData = this.dataService.ticketData;
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
      'e', `${card.race.split(' ').join('-')}-${card.raceid}`,
    ]);
  }
}
