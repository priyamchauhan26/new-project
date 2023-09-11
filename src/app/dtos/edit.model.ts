import { Product } from "../model/Product.model";

export class EditData{
    private flag:number|any;
    private data:Product|any;

    constructor(){};

   public getFlag(): number | any {
        return this.flag;
      }
    
      // Setter for flag
     public setFlag(value: number | any) {
        this.flag = value;
      }
    
      // Getter for data
     public getData(): Product | any {
        return this.data;
      }
    
      // Setter for data
     public setData(value: Product | any) {
        this.data = value;
      }

}