export interface HealthInfo{
  nhiType: string; // 健保身份
  genType: string; // 一般身份
  partType: string;// 部分負擔代碼
  visitSeqNo: string ; //就醫序號？就醫卡號？
  therapyBasic: string; // 療程階段
  payType: string;// 給付類別
}
