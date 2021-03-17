import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-select-drop-down',
  templateUrl: './select-drop-down.component.html',
  styleUrls: ['./select-drop-down.component.scss']
})
export class SelectDropDownComponent implements OnInit {

  @Input() options: any[] = [];
  @Input() filter = false;
  @Input() filterBy: any;
  @Output() onChange = new EventEmitter<any>();
  public countries: any[] = [];
  public hideDropDown = true;
  public filteredData: any[] = [];
  public searchKeyword = '';
  public selectedValues: any[] = [];
  constructor(
    private changeDet: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }


  onKeyPress(data: any) {
    if (this.filter) {
      this.filteredData = [];
      this.searchKeyword = data.value;
      const temp = this.options.filter(({ label, value }) =>
        (label.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) !== -1) || (value.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) !== -1));
      this.filteredData = temp;
    }
  }

  selected(event: any, index: number) {
    if (this.selectedValues.indexOf(event.srcElement.defaultValue) === -1) {
      this.selectedValues.push(event.srcElement.defaultValue);
    } else {
      var index = this.selectedValues.indexOf(event.srcElement.defaultValue);
      this.selectedValues.splice(index, 1);
    }
    this.onChange.emit(this.selectedValues);
  }
}
