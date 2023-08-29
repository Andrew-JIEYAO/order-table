import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

interface HealthItems{
  title:string;
  data:string;
}
@Component({
  selector: 'app-health-dialog',
  standalone: true,
  imports: [CommonModule, AutoCompleteModule, ButtonModule, DialogModule],
  templateUrl: './health-dialog.component.html',
  styleUrls: ['./health-dialog.component.scss'],
})
export class HealthDialogComponent implements OnInit{

  @Input() visible!: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

  healthItems:HealthItems[] = [];

  nhiType: string = ''; // 健保身份
  genType: string = ''; // 一般身份
  partType: string = ''; // 部分負擔代碼
  visitSeqNo: string = ''; //就醫序號？就醫卡號？
  therapyBasic: string = ''; // 療程階段
  payType: string = ''; // 給付類別


  ngOnInit(): void {
    this.healthItems = [
      {
        title:"健保身份：",
        data:this.nhiType,
      },
      {
        title:"一般身份：",
        data:this.genType
      }
    ]
  }
  doCloseDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  doModify() {
    this.visible = !this.visible;
    this.visibleChange.emit(this.visible);
  }
}
