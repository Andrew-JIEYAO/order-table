import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  height?: string;
}
@Component({
  selector: 'app-test-timeline',
  standalone: true,
  imports: [CommonModule,TimelineModule,CardModule],
  templateUrl: './test-timeline.component.html',
  styleUrls: ['./test-timeline.component.scss']
})
export class TestTimelineComponent implements OnInit {


  events:EventItem[] = [];



 ngOnInit(): void {
    this.events = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg', height: '150px' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800',height:'200px' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];
  }




}
