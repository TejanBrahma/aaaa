import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-eventdet',
  templateUrl: './eventdet.component.html',
  styleUrls: ['./eventdet.component.css']
})
export class EventdetComponent implements OnInit {
  myParam: any;
  eventId: any;
  eventName: any;
  eventData: any;
  eventDetailData: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.myParam = params['id'];
      let id = this.myParam.split('-');
      this.eventName = id.slice(0, -1).join(' ');
      this.eventId = id[id.length - 1];
      this.getEventDetailData(this.eventId);
    });
    this.eventData = this.dataService.ticketData;
  }
  getEventDetailData(eventId: any) {
    console.log({ eventId });
    this.eventDetailData = this.dataService.getEventDetailData(+eventId);
    console.log(this.eventDetailData);
  }
  onRegister() {
    //this.router.navigate(['v2', this.myParam, 'booking', 'tickets']);
    this.router.navigate(['eventtable', `${this.eventName}-${this.eventId}`])
  }
}
