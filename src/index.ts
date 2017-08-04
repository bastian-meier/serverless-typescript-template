import { ICallback, IEventPayload } from './models';
import { ErrorResponse } from './resp';
import { Test } from './test';

export function handler(event: IEventPayload, context, callback: ICallback) {
    console.log(new Test('huhu'));
    if (event.example) {
        callback(new ErrorResponse('event.example: ' + event.example));
    } else {
        callback(new ErrorResponse('event.example: ' + event.example));
    }
}