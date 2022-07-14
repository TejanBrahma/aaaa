import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { DatatwoService } from '../datatwo.service';


@Component({
  selector: 'app-eventdettwo',
  templateUrl: './eventdettwo.component.html',
  styleUrls: ['./eventdettwo.component.css']
})
export class EventdettwoComponent implements OnInit {
  myParam: any;
  eventId: any;
  eventName: any;
  eventData: any;
  eventDetailData: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private datatwoService: DatatwoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.myParam = params['id'];
      let id = this.myParam.split('-');
      this.eventName = id.slice(0, -1).join(' ');
      this.eventId = id[id.length - 1];
      this.getEventDetailData(this.eventId);
    });
    this.eventData = this.datatwoService.ticketDataTwo;
  }
  getEventDetailData(eventId: any) {
    console.log({ eventId });
    this.eventDetailData = this.datatwoService.getEventDetailData(+eventId);
    console.log(this.eventDetailData);
  }
  onRegister() {
    //this.router.navigate(['v2', this.myParam, 'booking', 'tickets']);
    this.router.navigate(['eventtabletwo', `${this.eventName}-${this.eventId}`])
  }

}
