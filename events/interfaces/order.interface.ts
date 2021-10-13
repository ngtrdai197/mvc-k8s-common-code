import { ORDER_STATUS } from "../..";

export interface IOrderCreated {
  id: string;
  status: ORDER_STATUS;
  expiresAt: string | Date;
  userId: string;
  version: number;
  ticket: {
    id: string;
    price: number;
  };
}

export interface IOrderUpdated extends IOrderCreated {}

export interface IOrderCancelled {
  id: string;
  version: number;
  ticket: {
    id: string;
  };
}

export interface IOrderPaidSucceed {
  orderId: string;
}
