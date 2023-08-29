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

// export enum State{
//   Add = 1,
//   Revise,
//   Remove,
//   Origin
// }

export interface ExamOrder {
  invCode: Coding, //包含檢驗名稱(display)及代號(code)
  usedTimeNo: number, //次數
  frequency: Coding,
  appendix: string, //檢查摘要
  isSelf: boolean, //是否自費
  advise: string, //醫師指示(囑咐)
  nhiPrice: number, //單位健保價
  selfPrice: number, //單位自費價
  orderNo: string, //醫囑編號
  state: number
}

export interface DrugOrder {
  alertType: string,//提醒(抗一、抗二)
  invCode: Coding, //包含藥品名稱(display)及代號(code)
  dosage: Quantity, //包含劑量(value)單位(unit)
  dosageInUse: string, //使用劑量
  route: Coding,
  frequency: Coding,
  isMill: boolean, //是否磨粉
  advise: string, //醫師指示(囑咐)
  usedDays: number,
  totalDosage: Quantity, //總量(value)單位(unit)
  isSelf: boolean, //是否自費
  nhiPrice: number, //劑量單位健保價
  selfPrice: number, //劑量單位自費價
  orderNo: string, //醫囑編號
  state: number
}

export interface Coding {
  code: string;
  display: string;
  version?: string;
  system?: string;
  userSelected?: boolean;
}

export interface Quantity {
  value: number; //數值
  unit: string;  //單位
  code: string;  //單位代碼
  comparator?: Coding; //比較運算符
  system?: string;
}

export enum State{
  Add = 1,
  Revise,
  Remove,
  Origin
}
