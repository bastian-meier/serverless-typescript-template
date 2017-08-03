import { ICallback, IEventPayload } from './models';

export function handler(event: IEventPayload, context, callback: ICallback) {
    callback(undefined, {
        message: `event.example: ${event.example}`
    });
}