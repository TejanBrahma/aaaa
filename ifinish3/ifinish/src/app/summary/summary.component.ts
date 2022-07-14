import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IfinalData, TicketService } from '../ticket.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  finalData$!: Observable<any>;
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.finalData$ = this.ticketService.finalData$.pipe(
      map((data) => {
        let totalPrice = data['theForm'].reduce(
          (acc:any, cur:any) => acc + cur.eventPrice,
          0
        );
        console.log({ totalPrice });
        return { totalPrice, ...data };
      })
    );
  }

}
