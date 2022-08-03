const Koa = require('koa');
const app = new Koa();
// const views = require('koa-views');
const statics = require('koa-static');
app.use(statics(__dirname + '/views'))
// 1.静态资源服务，指定对外提供访问的根目录，不包括 public
// app.use(statics(__dirname + '/public'));
// x-response-time
//
// app.use(async (ctx, next) => {
// 	const start = Date.now();
// 	await next();
// 	const ms = Date.now() - start;
// 	ctx.set('X-Response-Time', `${ms}ms`);
// });

// logger

// app.use(async (ctx, next) => {
// 	const start = Date.now();
// 	await next();
// 	const ms = Date.now() - start;
// 	console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// response

// app.use(async ctx => {
// 	ctx.body = {
// 		code: 200,
// 		success: true,
// 		data: {
// 			text: 'Hello Docker 123'
// 		}
// 	};
// });

app.listen(8080);
