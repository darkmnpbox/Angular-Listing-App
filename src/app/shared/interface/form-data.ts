export interface Department {
    id: number;
    name: string;
}

export interface Employee extends Department {
    age: number;
}

export interface State {
    page: number;
    pageSize: number;
}

export interface SubmitData {
    name: string;
    age?: number;
}

export interface Search {
    search: string
}

export interface List {
    id: number;
    name: string;
    age?: number;
}