const http=require('http');
const fs=require('fs');
const url=require('url');

const myServer=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico')return res.end();
    const log=`${Date.now()}: ${req.url} New request received\n`;
    const myURL=url.parse(req.url,true);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myURL.pathname){
            case '/':
                res.end("Homepage");
                break;
            case '/about':
                const username=myURL.query.myname;
                res.end(`Hi ${username}, Welcome to the page`);
                break;
            case '/search':
                const search=myURL.query.search_query;
                res.end("Here are your results for " +search);
                break;
            default:
                res.end("404 not found");
        }
    });
});

myServer.listen(8000,()=>console.log('Server started'));