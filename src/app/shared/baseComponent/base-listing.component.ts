import { Employee } from './../interface/form-data';
import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { State, List, Search } from '../interface/form-data';


@Component({
    template: ''
})
export class BaseListingComponent implements OnInit {
    public ascending: boolean = true;
    public state: State = {
        page: 1,
        pageSize: 4
    };
    public listName: string = '';
    public defaultList!: Array<List>;
    public displayList!: Array<List>;
    public fullList!: Array<List>;
    private compare = (v1: string | number, v2: string | number): number => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    private matches(obj: List, searchTerm: string): boolean {
        for (let val of Object.values(obj)) {
            if (val.toString().toLowerCase().includes(searchTerm)) {
                return true;
            };
        };
        return false;
    }

    constructor() {
    }

    ngOnInit() {
        if (localStorage.getItem(this.listName)) {
            this.fullList = JSON.parse(localStorage.getItem(this.listName)!);
        }
        else {
            this.fullList = this.defaultList;
            localStorage.setItem(this.listName, JSON.stringify(this.fullList));
        }
        this.displayList = this.fullList;
    }



    get list(): Array<List> {
        return [...this.displayList].slice((this.state.page - 1) * this.state.pageSize, (this.state.page - 1) * this.state.pageSize + this.state.pageSize);
    }

    getSearch(s: Search): void {
        this.state.page = 1;
        this.displayList = this.fullList.filter(obj => this.matches(obj, s.search));
    }

    clear() {
        this.state.page = 1;
        this.displayList = this.fullList;
    }

    onSort(column: keyof List) {
        this.ascending = !this.ascending;
        this.displayList = [...this.fullList].sort((a, b) => {
            const res = this.compare(a[column]!, b[column]!);
            return this.ascending ? res : -res;
        });
    }

    changePageSize(size: string) {
        this.state.pageSize = Number(size);
    }

    changePage(nav: string) {
        if (nav === 'prev' && this.state.page > 1) {
            this.state.page--;
        }
        if (nav === 'next' && this.state.page < Math.ceil(this.displayList.length / this.state.pageSize)) {
            this.state.page++;
        }
    }

    delete(id: number) {
        if (confirm("Are you want to delete ...")) {
            this.fullList = this.fullList.filter(obj => {
                if (obj.id !== id) {
                    return true;
                } else {
                    return false;
                }
            });
            localStorage.setItem(this.listName, JSON.stringify(this.fullList));
            this.displayList = this.fullList;
        }
    }

}