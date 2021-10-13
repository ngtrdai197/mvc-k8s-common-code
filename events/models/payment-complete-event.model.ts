import { IListenerEvent } from "../base";
import { Subjects } from "../enums";
import { IPaymentComplete } from "../interfaces";

export class PaymentCompleteEvent implements IListenerEvent {
  subject!: Subjects.PaymentComplete;
  data!: IPaymentComplete;
}
