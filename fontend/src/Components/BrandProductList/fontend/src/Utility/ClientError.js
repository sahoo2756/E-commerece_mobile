class ClientError extends Error {
    constructor(message = "Something Went Wrong") {
        super(message);
    }
}

export {ClientError}