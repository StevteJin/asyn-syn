# asyn-syn
循环语句在node中是很难使用的,做个对比例子来表明啥时候适合把异步变同步的
用的是一个把文件夹从文件和文件夹混合的目录中例子来说明的
主要用到了http和fs模块
方法上主要用到fs.readdir(path,callback)和fs.stat(path,callback)
