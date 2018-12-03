import gulp from "gulp";
import gulpif from "gulp-if";
import liveserver from "gulp-live-server";
import args from "./util/args";

gulp.task("serve", cb => {
  // 如果不是監聽情況下直接回傳
  if (!args.watch) return cb();

  // 啟動server, 在當前命令行下去執行server/bin/www腳本
  var server = liveserver.new(["--harmony", "server/bin/www"]);
  server.start();

  // 監聽server/public底下所有js跟server/views底下所有ejs, 一修改就重刷新
  gulp.watch(["server/public/**/*.js", "server/views/**/*.ejs"], function(
    file
  ) {
    server.notify.apply(server, [file]);
  });

  // 監聽需要重啟server的檔案，例如router、app.js 檔案如果修改，就重啟server
  gulp.watch(["server/routes/**/*.js", "server/app.js"], function() {
    server.start.bind(server)();
  });
});
