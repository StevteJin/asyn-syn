var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
    //不处理小图标
    if(req.url=="/favicon.ico"){
        return;
    };
    //读目录
    fs.readdir("./readfolder/",function(err,files){
        if(err){
            throw err;
        };
        //同步操作
        (function readfiles(i){
            if (i==files.length){
                return;
            };
            //检测文件
            fs.stat("./readfolder/"+files[i],function(err,stats){
                if(err){
                    throw err;
                };
                //输出文件夹
                if(stats.isDirectory()){
                    console.log(files[i]);
                };
                readfiles(i+1);
            });
        })(0);
    });
    res.end();
});

server.listen(3000,"127.0.0.1");