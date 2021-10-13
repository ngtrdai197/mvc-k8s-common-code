export interface ITicketCreated {
  id: string;
  title: string;
  price: number;
  version: number;
  numberOfSeat: number;
  isLocked: boolean;
}
export interface ITicketUpdated extends ITicketCreated {}
