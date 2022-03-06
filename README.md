# 运行方法
    1.通过npm i 下载所需插件
    2.在服务器开启的情况下，执行npm start

# 打包运行
    1.npm run build
    2.打包完成后，将build文件夹复制到后端根目录下
    3.在后端文件根目录下，index.js 文件中添加代码:app.use(express.static('build'));
    4.在后端文件根目录下执行node index，开启服务器
