import { Stan } from "node-nats-streaming";
import { Subjects } from "../enums";

export interface IPublisherEvent {
  subject: Subjects;
  data: Record<string, any>;
}

export abstract class Publisher<T extends IPublisherEvent, TData> {
  abstract subject: Subjects;
  protected client: Stan;

  public constructor(protected _client: Stan) {
    this.client = _client;
  }

  publish(data: TData): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }
        console.log("Event published to subject", this.subject);
        resolve();
      });
    });
  }
}
