class Request {
    constructor(method, uri, version, message, response) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = false;

    }
}
