const { Ignitor } = require('@adonisjs/ignitor')
const serverless = require('serverless-http');
const http = require('http')

var app;

function bootstrapServer() {
    return new Ignitor(require('@adonisjs/fold'))
        .appRoot(__dirname)
        .fireHttpServer((handler) => {
            console.log('handler', handler);
            app = handler;
            return http.createServer(handler);
        })
        .catch((error) => console.error('catchOnStart', error));
}
exports.proxy = async (event, context, callback) => {
    if (app == undefined) {
        await bootstrapServer();
    }
    const handler = serverless(app);
    const result = await handler(event, context);
    return result;
}
