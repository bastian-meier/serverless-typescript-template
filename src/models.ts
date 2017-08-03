export interface IResponsePayload {
    message: string;
}

export interface IEventPayload {
    example: boolean;
}

export interface ICallback {
    (error: any, result: IResponsePayload): void;
}