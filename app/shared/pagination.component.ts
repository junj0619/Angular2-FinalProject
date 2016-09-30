import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';


@Component({
    selector: 'pagination',
    template: `
    <nav aria-label="Page navigation" *ngIf="items.length>pageSize">
        <ul class="pagination">
            <li [class.disabled]="currentPage==1" (click)="previous()">
                <a aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li *ngFor="let page of pages" (click)="changePage(page)" [class.active]="currentPage==page">
                <a>{{page}}</a>
            </li>   
            <li [class.disabled]="currentPage==pages.length" (click)="next()">
                <a aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
    `
})

export class PaginationComponent implements OnChanges {

    @Input() items = [];
    @Input('page-size') pageSize = 10;
    @Output('page-changed') pageChanged = new EventEmitter();

    pages: any[];
    currentPage;

    ngOnChanges() {
        this.currentPage = 1;
        this.getPages();
    }

    getPages() {
        let pagesCount = Math.floor(this.items.length / this.pageSize);
        this.pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            this.pages.push(i);
        }
    }

    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(this.currentPage);
    }

    previous() {
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }

    next() {
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }


}