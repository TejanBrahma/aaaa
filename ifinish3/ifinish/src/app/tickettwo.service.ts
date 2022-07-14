import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ITicketDataTwo {
  raceid: number;
  race: string;
  quan: number;
  amount: number;
  totalAmount?: number;
}
export interface IFinalTicketTwo {
  name: string;
  firstname: string;
  lastname: string;
  email: string;
  eventName: string;
  eventPrice: number;
}
export interface IfinalDataTwo {
  numberOfTickets: number;
  totalAmount: any;
  theForm: any;
  tickets: IFinalTicketTwo[];
}

@Injectable({
  providedIn: 'root'
})
export class TicketServiceTwo {
  private ticketDataTwo: ITicketDataTwo[] = [
    { raceid: 10, race: 'DBZ 4K Run', quan: 0, amount: 599 },
    { raceid: 11, race: 'OP 2K Run', quan: 0, amount: 499 },
    { raceid: 12, race: 'GUS 1K Run', quan: 0, amount: 499 },
  ].map((data) => ({ totalAmount: 0, ...data }));
  isShow: boolean = false;
  count: number = 0;
  countTicket: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  countTicket$ = this.countTicket.asObservable();

  finalData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  finalData$: Observable<any> = this.finalData.asObservable();
  currentTicket: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  currentTicket$ = this.currentTicket.asObservable();
  constructor() {}
  updateEventData(data: any[]) {
    this.ticketDataTwo = data.map((data) => ({ totalAmount: 0, ...data }));
    console.log(this.ticketDataTwo);
  }
  getTicketData() {
    return this.ticketDataTwo;
  }
}