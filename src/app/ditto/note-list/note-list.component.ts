import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule,CardModule,CheckboxModule,FormsModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  checked!: boolean;

  ngOnInit(){
    this.checked = false;
  }
}
