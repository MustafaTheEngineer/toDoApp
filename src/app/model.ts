export class Model{
    user;
    items;
    count:number;

    constructor(){
        this.user = "Mustafa";
        this.items = [
            new TodoItem("Kahvaltı",true),
            new TodoItem("Sinema",false),
            new TodoItem("A",false),
            new TodoItem("B",false)
          ];
          this.count = this.items.length;
    }
}

export class TodoItem{
    description:string;
    action:boolean;

    constructor(description:string,action:boolean){
        this.description = description;
        this.action = action;
    }
}