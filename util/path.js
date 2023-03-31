const path = require('path');

// process는 node.js가 실행되는 환경에 대한 정보를 담고 있는 객체다. 전역에서 접근할 수 있다.
// mainModule은 현재 실행되고 있는 파일에 대한 정보를 담고 있는 객체다. 애플리케이션을 시작한 주요 모듈을 나타내며 이 프로젝트에서는 app.js를 의미한다.
// filename은 현재 실행되고 있는 파일의 경로를 나타낸다.
module.exports = path.dirname(process.mainModule.filename);