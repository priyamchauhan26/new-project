export class MessageDto{
      status:number|undefined;
	  httpstatus:String|undefined;
	 message:String|undefined;
     data:Object|undefined;
    constructor(status:number,httpstatus:String,message:String ,data:Object){}
}