import { ICallback, IEventPayload } from './models';
import {garbage} from 'garbage';

export function handler(event: IEventPayload, context, callback: ICallback) {
    const trash = garbage();
    callback(undefined, {
        message: `event.example: ${event.example}`,
        garbage: trash
    });
}