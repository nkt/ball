export default
class Route {
    /**
     * @param {string} path
     * @param {string|array} methods
     */
    constructor(path, methods) {
        this.path = path;
        if (typeof methods !== 'array') {
            methods = methods.split('|');
        }
        this.methods = methods;
    }

    set path(path) {
        this._path = path;
        this.pattern = path.replace(/{(?:(s|i):)*(\w+)}/g, (match, type, name) => {
            const typePattern = {
                's': '\\w+',
                'i': '\\d+'
            }[type];
        });
    }

    get path() {
        return this._path;
    }

    set methods(methods) {
        this._methods = methods.map(method => method.toUpperCase());
    }

    get methods() {
        return this._methods;
    }
}
