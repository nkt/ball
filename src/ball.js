let http = require('http');

class Ball {
    constructor() {
        this.server = new http.Server(this.requestHandler.bind(this));
    }

    requestHandler(request, response) {

    }

    listen() {

    }
}

export default Ball;