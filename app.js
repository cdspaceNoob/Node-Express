const http = require('http');

const express = require('express');

const app = express();

// use: 새로운 미들웨어를 등록.
// use()의 callback은 모든 요청에 대해 실행.
// next: Express로부터 받은 함수로, 다음 미들웨어로 넘어갈 수 있게 한다.
app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware!');
})

const server = http.createServer(app);

server.listen(3000); 