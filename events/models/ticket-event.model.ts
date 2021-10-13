import { Subjects } from "../enums";
import { IListenerEvent } from "../base";
import { ITicketCreated, ITicketUpdated } from "../interfaces";

export class TicketCreatedEvent implements IListenerEvent {
  subject!: Subjects.TicketCreated;
  data!: ITicketCreated;
}
export class TicketUpdatedEvent implements IListenerEvent {
  subject!: Subjects.TicketUpdated;
  data!: ITicketUpdated;
}
