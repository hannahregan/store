import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>;
  
  sort = 'Name';
  itemsShowCount = 12;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(itemsCount: number): void {
    this.itemsShowCount = itemsCount;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);

  }

}
