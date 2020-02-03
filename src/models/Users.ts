interface UserProps{
    name?: string;
    age?: number
}

export class User{
    constructor(private data: UserProps){}

    get(propName: string): (number | string){
        return this.data[propName]
    }

    set(update: UserProps):void{
        //this.data will get overwritten with update data
        Object.assign(this.data, update);
    }
}
