export default class Post {
    constructor(title){
        this.title = title;
        this.date = new Date()
        console.log("ji")
    }

    toString(){
       return JSON.stringify({
            title:this.title,
            date:this.date.toJSON()
        })
    }
}