import { ICallback, IEventPayload } from './interfaces';
import { ErrorResponse, SuccessResponse } from './response';

export function handler(event: IEventPayload, context, callback: ICallback) {
    if (event.example) {
        callback(undefined, new SuccessResponse('successfull'));
    } else {
        callback(undefined, new ErrorResponse({code: 12, message: 'your ERROR_MESSAGE for example'}));
    }
}