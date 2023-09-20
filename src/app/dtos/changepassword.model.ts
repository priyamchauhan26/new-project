export class ChangePasswordDto{
    private oldpassword:string|any;
    private newpassword:string|any;

    constructor(){}

    public getOldpassword(): string | any {
        return this.oldpassword;
      }
    
      public setOldpassword(value: string | any) {
        this.oldpassword = value;
      }
    
      public getNewpassword(): string | any {
        return this.newpassword;
      }
    
      public setNewpassword(value: string | any) {
        this.newpassword = value;
      }
    
}