import Route from "./router";

var http = require('http');


class Router {
    /**
     * @param {object} [options]
     */
    constructor(options = {}) {
        this.routes = [];
    }

    /**
     * @param {string} method
     * @param {string} path
     * @param {function} callback
     * @returns {Router}
     */
    add(method, path, callback) {
        var route = {
            method: method.toUpperCase(),
            path: Router.compilePath(path),
            callback
        };
        this.routes.push(route);
        return this;
    }

    /**
     * @param path
     * @param callback
     * @returns {Router}
     */
    get(path, callback) {
        return this.add('GET', path, callback);
    }

    /**
     * @param path
     * @param callback
     * @returns {Router}
     */
    post(path, callback) {
        return this.add('POST', path, callback);
    }

    /**
     * @param path
     * @param callback
     * @returns {Router}
     */
    put(path, callback) {
        return this.add('PUT', path, callback);
    }

    /**
     * @param path
     * @param callback
     * @returns {Router}
     */
    delete(path, callback) {
        return this.add('DELETE', path, callback);
    }

    /**
     * @param {string} path
     * @returns {string}
     */
    static compilePath(path) {
        return '';
    }
}

export default Router;