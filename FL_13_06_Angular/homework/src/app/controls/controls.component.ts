import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Filters {
  textValue: string;
  selectValue: string
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})

export class ControlsComponent {
  @Output() onFilterBtn: EventEmitter<any> = new EventEmitter<any>();
  @Input() newsList: any;

  sources = ['All', 'Internet', 'User']
  
  filters = {
    textValue: '',
    selectValue: 'All'
  }

  onFilter() {
    let filters =  {...this.filters};
    this.onFilterBtn.emit(filters);
  }
}
