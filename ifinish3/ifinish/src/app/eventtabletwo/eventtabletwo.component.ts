import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TicketServiceTwo } from '../tickettwo.service';

@Component({
  selector: 'app-eventtabletwo',
  templateUrl: './eventtabletwo.component.html',
  styleUrls: ['./eventtabletwo.component.css']
})
export class EventtabletwoComponent implements OnInit {
  myParam: any;
  id: any;
  eventName: any;
  eventId: any;
  constructor(private activatedRoute: ActivatedRoute,private ticketSeriveTwo: TicketServiceTwo,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.myParam = params['id'];
      let id = this.myParam.split('-');
      this.eventName = id.slice(0, -1).join(' ');
      this.eventId = id[id.length - 1];
      this.getEventDataById();
    });
  }
  getEventDataById() {
    console.log('getEventDataById');
    let data: any[] = [];
    if (this.eventId === '8') {
      data = [
        { raceid: 13, race: '111 Run', quan: 0, amount: 399 },
        { raceid: 14, race: '222 Run', quan: 0, amount: 499 },
        { raceid: 15, race: '333 Run', quan: 0, amount: 599 },
      ];
      console.log(this.eventId, 'eId');
      this.ticketSeriveTwo.updateEventData(data);
    }
    if (this.eventId === '9') {
      data = [
        { raceid: 16, race: '444 Run', quan: 0, amount: 699 },
        { raceid: 17, race: '555 Run', quan: 0, amount: 799 },
        { raceid: 18, race: '666 Run', quan: 0, amount: 899 },
      ];
      this.ticketSeriveTwo.updateEventData(data);
    }
  }
  onIncreament() {
    // this.ticketService.count += 1;
    console.log(this.totalTickets);
    this.ticketSeriveTwo.countTicket.next(this.totalTickets);
  }
  onDecreament() {
    //if (this.ticketService.count <= 0) return;
    //this.ticketService.count -= 1;
    //  this.ticketService.countTicket.next(this.ticketService.count);
  }
  showRegister() {
    console.log(this.ticketData);
    this.ticketSeriveTwo.isShow = true;
    this.ticketSeriveTwo.countTicket.next(this.ticketData);
    this.router.navigate(['registertwo']);
    // this.onIncreament();
  }
  get showCounter() {
    return this.ticketSeriveTwo.count;
  }
  get ticketData() {
    console.log('getTicket ', this.ticketSeriveTwo.getTicketData());
    return this.ticketSeriveTwo.getTicketData();
  }
  get totalTickets() {
    return this.ticketData.reduce((acc: any, cur: any) => {
      return acc + cur['quan'];
    }, 0);
  }
  get totalAmount() {
    return this.ticketData.reduce((acc:any, cur:any) => {
      return acc + cur['totalAmount'];
    }, 0);
  }
  handleSelected(event:any, ticketData:any) {
    if (event.target.checked) {
      console.log(event.target.checked, ticketData);
    }
  }
}
