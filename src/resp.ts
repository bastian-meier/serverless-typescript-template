export class ErrorResponse {
    success: false;
    data: undefined;
    error: any;

    constructor (error: any) {
        if (typeof error === 'string') {
            this.error = {
                message: error
            };
        } else {
            this.error = error;
        }
    }
}
