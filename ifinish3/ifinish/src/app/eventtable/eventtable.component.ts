import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-eventtable',
  templateUrl: './eventtable.component.html',
  styleUrls: ['./eventtable.component.css']
})
export class EventtableComponent implements OnInit {
  myParam: any;
  id: any;
  eventName: any;
  eventId: any;
  constructor(private activatedRoute: ActivatedRoute,private ticketSerive: TicketService,private router: Router) { }

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
    if (this.eventId === '2') {
      data = [
        { raceid: 4, race: 'abc Run', quan: 0, amount: 399 },
        { raceid: 5, race: 'def Run', quan: 0, amount: 499 },
        { raceid: 6, race: 'ghi Run', quan: 0, amount: 599 },
      ];
      console.log(this.eventId, 'eId');
      this.ticketSerive.updateEventData(data);
    }
    if (this.eventId === '3') {
      data = [
        { raceid: 7, race: 'jkl Run', quan: 0, amount: 699 },
        { raceid: 8, race: 'mno Run', quan: 0, amount: 799 },
        { raceid: 9, race: 'pqr Run', quan: 0, amount: 899 },
      ];
      this.ticketSerive.updateEventData(data);
    }
  }
  onIncreament() {
    // this.ticketService.count += 1;
    console.log(this.totalTickets);
    this.ticketSerive.countTicket.next(this.totalTickets);
  }
  onDecreament() {
    //if (this.ticketService.count <= 0) return;
    //this.ticketService.count -= 1;
    //  this.ticketService.countTicket.next(this.ticketService.count);
  }
  showRegister() {
    console.log(this.ticketData);
    this.ticketSerive.isShow = true;
    this.ticketSerive.countTicket.next(this.ticketData);
    this.router.navigate(['register']);
    // this.onIncreament();
  }
  get showCounter() {
    return this.ticketSerive.count;
  }
  get ticketData() {
    console.log('getTicket ', this.ticketSerive.getTicketData());
    return this.ticketSerive.getTicketData();
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
