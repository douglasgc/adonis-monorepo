const { Ignitor } = require('@adonisjs/ignitor')
const createRequestResponse = require('aws-lambda-create-request-response')
const http = require('http')

var app;

function handler(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop =
        process.env.WAIT_FOR_EMPTY_EVENT_LOOP === 'yes'
    const { req, res } = createRequestResponse(event, callback)
    console.log(app);
    app(req, res)
}

function bootstrapServer() {
    return new Ignitor(require('@adonisjs/fold'))
        .appRoot(__dirname)
        .fireHttpServer((handler) => {
            app = handler;
            return http.createServer(handler);
        })
        .catch((error) => console.error('catchOnStart', error));
}
exports.proxy = (event, context, callback) => {
    if (app == undefined) {
        bootstrapServer().then(() => handler(event, context, callback))
        return;
    };
    handler(event, context, callback);
}