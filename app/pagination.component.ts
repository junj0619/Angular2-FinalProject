import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from 'angular2/core';


@Component({
    selector: 'pagination',
    template: `
    <nav aria-label="Page navigation" *ngIf="items.length>pageSize">
    <ul class="pagination">
    <li [class.disabled]="currentPage==1">
        <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        </a>
    </li>
    <li *ngFor="#pageItem of pageItems" (click)="changePage(page)" [class.actived]="currentPage==pageItem">
        <a href="#">{{pageItem.pageNumber}}</a>
    </li>   
    <li [class.disabled]="currentPage==pageItems.length">
        <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        </a>
    </li>
    </ul>
    </nav>
    `
})

export class PaginationComponent implements OnInit, OnChanges {

    @Input() items = [];
    @Input('page-size') pageSize = 10;
    @Output('page-changed') pageChanged = new EventEmitter();

    pageItems = [];
    currentPage;

    ngOnInit() {
        this.getPageItems();
    }

    ngOnChanges(currentPage) {

    }



    getPageItems() {
        let pageNumber = Math.floor(this.items.length / this.pageSize);

        for (let i = 1; i <= pageNumber; i++) {
            this.pageItems.push({ pageNumber: i, index: i - 1 });
        }
    }

    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(this.currentPage);
    }

}