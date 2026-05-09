
/**
 * @description Application.auth() has not yet been ran.
 */
export class UnauthenticatedError extends Error {
    constructor(message: string) {
        super(message);

        this.name = 'UnauthenticatedError';
        Object.setPrototypeOf(this, UnauthenticatedError.prototype);
    }
}

/**
 * @description Vote couldn't be found given the query options
 */
export class VoteNotFoundError extends Error {
    constructor(message: string) {
        super(message);

        this.name = 'VoteNotFoundError';
        Object.setPrototypeOf(this, VoteNotFoundError.prototype);
    }
}

