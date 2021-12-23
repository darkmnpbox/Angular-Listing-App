import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { List, SubmitData } from '../interface/form-data';



@Component({
    template: ''
})
export class BaseEditAddComponent implements OnInit {
    id: number;
    selectedObj!: List;
    fullList!: Array<List>;
    listName: string = '';
    onSubmitNavigation: string = '/home';


    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    }

    ngOnInit(): void {
        this.fullList = JSON.parse(localStorage.getItem(this.listName)!);
        if (this.id !== 0) {
            this.selectedObj = this.fullList.find(Obj => Obj.id === this.id)!;
        }

    }

    onSubmit(id: number, body: SubmitData): void {
        const obj = { id: id, ...body };

        if (this.id === 0) {
            this.fullList.push(obj)
        }
        else {
            this.fullList = this.fullList.map((Obj) => {
                if (Obj.id === this.id) {
                    return obj;
                }
                return Obj;
            });
        }
        localStorage.setItem(this.listName, JSON.stringify(this.fullList))
        this.router.navigate([this.onSubmitNavigation]);
    }
}