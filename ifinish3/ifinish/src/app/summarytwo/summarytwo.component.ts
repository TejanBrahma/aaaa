import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IfinalDataTwo, TicketServiceTwo} from '../tickettwo.service';

@Component({
  selector: 'app-summarytwo',
  templateUrl: './summarytwo.component.html',
  styleUrls: ['./summarytwo.component.css']
})
export class SummarytwoComponent implements OnInit {
  finalData$!: Observable<any>;
  constructor(private ticketServiceTwo: TicketServiceTwo) { }

  ngOnInit(): void {
    this.finalData$ = this.ticketServiceTwo.finalData$.pipe(
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
