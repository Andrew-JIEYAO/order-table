import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, DoCheck, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HealthDialogComponent } from './health-dialog/health-dialog.component';
import { HealthInfoService } from './health-info.service';
import { HealthInfo } from './health-info.interface';

@Component({
  selector: 'app-health-info',
  standalone: true,
  imports: [CommonModule,DialogModule,ButtonModule,AutoCompleteModule,HealthDialogComponent],
  templateUrl: './health-info.component.html',
  styleUrls: ['./health-info.component.scss'],
  providers:[HealthInfoService]
})
export class HealthInfoComponent implements OnInit{

  healthInfoService = inject(HealthInfoService)
  healthInfos:WritableSignal<HealthInfo[]> = signal([]);
  visible: boolean = false;

  async ngOnInit(): Promise<void> {
    this.healthInfos.set(await this.healthInfoService.getHealthInfo())
    console.log(this.healthInfos)
  }


  showDialog() {
      this.visible = !this.visible;
  }

  onVisibleChange(visible:boolean){
    this.visible = visible
  }
}
