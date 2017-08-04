export interface IEventPayload {
    example: boolean;
}

export interface IResponsePayload {
    success: boolean;
    data: any;
    error: any;
}

export interface ICallback {
    (error: IResponsePayload | undefined, result?: IResponsePayload | undefined): void;
}