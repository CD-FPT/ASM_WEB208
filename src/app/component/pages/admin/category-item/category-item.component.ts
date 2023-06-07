import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tr[app-category-item]',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent {
  @Input() category: any;
  @Input() index: any;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  confirmDelete(id: any) {
      this.onRemove.emit(id);
  }
}
