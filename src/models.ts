export interface IEventPayload {
    example: boolean;
}

export interface IErrorResponsePayload {
    success: boolean;
    data: boolean;
    error: any;
}

export interface ISuccessResponsePayload {
    success: boolean;
    data: any;
    error: boolean;
}

export interface ICallback {
    (result: ISuccessResponsePayload | IErrorResponsePayload): void;
}