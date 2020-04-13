export class User {
  showRepo : boolean;
  constructor (    public id: number,  public name:string,  public login:string,
  public following: string,  public html_url:string,  public repo: string,) {

    this.showRepo = false;

  }
}
