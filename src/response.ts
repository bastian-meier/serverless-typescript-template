import { IResponsePayload } from './interfaces';

export class ErrorResponse extends Error implements IResponsePayload {
    success = false;
    data = {};
    error: any;

    constructor (error: any) {
        super();
        if (typeof error === 'string') {
            this.error = {
                message: error
            };
        } else {
            this.error = error;
        }
    }
}

export class SuccessResponse implements IResponsePayload {
    success = true;
    data: any;
    error = {};

    constructor (data: any) {
        if (typeof data === 'string') {
            this.data = {
                message: data
            };
        } else {
            this.data = data;
        }
    }
}