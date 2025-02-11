export class User {
    constructor(
        public userId?: number,
        public lastName?: string,
        public firstName?: string,
        public email?: string,
        public username?: string,
        public password?: string,
        public token?: string
    ) {

    }
}

export interface Result<T> {
    data: T | undefined;
    error?: string;
}