export interface IResponsePayload {
    message: string;
}

export interface IEventPayload {
    example: boolean;
    trash: any;
}

export interface ICallback {
    (error: any, result: IResponsePayload): void;
}