var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
    //不处理小图标
    if(req.url=="/favicon.ico"){
        return;
    };
    //读文件目录，返回文件名数组
    fs.readdir("./readfolder",function(err,files){
        //此处我需要先把文件名从数组中遍历出来
        for(i=0;i<files.length;i++){
            //此处已经把文件名遍历出来了
            var thefilename=files[i];
            //此处检测文件是否存在
            fs.stat("./readfolder/"+thefilename,function(err,stats){
                //如果它是一个文件夹，就输出它
                if(stats.isDirectory()){
                    //我发现，输出结果和预期不符，输出了2个bbb
                    //非阻塞I/O导致，解决方法，改成同步的，一个完全检测完了再检测下一个
                    console.log(thefilename);
                };
            });
        };
    });
    res.end();
});
server.listen(3000,"127.0.0.1");