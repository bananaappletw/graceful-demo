const Koa = require('koa');
const Router = require('koa-router');
const process = require('process');
const app = new Koa();
const router = new Router();

const podName = process.env.POD_NAME

function getCurrentTime() {
    return (new Date()).toLocaleString()
}

process.on('SIGTERM', () => {
    console.log(`${getCurrentTime()}: ${podName} receive SIGTERM`)
});

router.get('/', async (ctx, next) => {
    try {
        console.log(`${getCurrentTime()}: ${podName} receive request`)
        await new Promise(resolve => {
            setTimeout(resolve, 10000);
        });
        ctx.response.body = podName;
        ctx.response.status = 200
    } catch (err) {
        ctx.response.status = err.status || 500;
        ctx.response.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});

router.get('/healthz', (ctx, next) => {
    console.log(`${getCurrentTime()}: ${podName} receive health check`)
    ctx.response.body = 'OK';
    ctx.response.status = 200;
});

app.on('error', (err, ctx) => {
    console.log(err)
});

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000, '0.0.0.0');

// const interval = setInterval(function () {
//     const ts = Date();
//     console.log(ts);
// }, 1000);
// setTimeout(function () {
//     clearInterval(interval);
// }, 0);