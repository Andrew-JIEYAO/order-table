export interface Prescriptions {
  id: number;
  state:number
  resistance: string;
  drugName: string;
  dose: string;
  unit: string;
  doseUse: string;
  way: string;
  frequency: string;
  grinding: boolean;
  enjoin:string;
  day: number;
  total: number;
  unit2: string;
  ownExpensey:boolean;
  price:number;
  orderId:string;
}

export enum State{
  Add = 1,
  Revise,
  Remove,
  Origin
}
