import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';


interface VisitData{
  visitDate: string;
  division: string;
  doctor: string;
}
@Component({
  selector: 'app-visit-list',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit {

  value!:VisitData[];


  ngOnInit(){
    this.value = [
      {
        visitDate:'2013-06-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2019-06-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2015-12-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2020-09-17',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2019-06-13',
        division:'心臟科',
        doctor:'王醫師'
      },
      {
        visitDate:'2013-06-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2019-06-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2015-12-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2020-09-17',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2019-06-13',
        division:'心臟科',
        doctor:'王醫師'
      },
      {
        visitDate:'2013-06-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2019-06-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2015-12-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2020-09-17',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2019-06-13',
        division:'心臟科',
        doctor:'王醫師'
      },
      {
        visitDate:'2013-06-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2019-06-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2015-12-13',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2020-09-17',
        division:'心臟科',
        doctor:'林崇明'
      },
      {
        visitDate:'2019-06-13',
        division:'心臟科',
        doctor:'王醫師'
      },
    ]
  }


}
