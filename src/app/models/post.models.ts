export class Post{
    title : string;
    content : string;
    loveIts : number;
    createdAt : string;
  


    constructor(public pTitle : string, public pContent : string){

      let instantDate = new Date();

      this.title = pTitle;
      this.content = pContent;
      this.loveIts = 0;
      this.createdAt = instantDate.toLocaleDateString() + ' ' + instantDate.toLocaleTimeString(); //obligé de passer la date en string pour l'enregistrer dans Firebase =/
    };
  };