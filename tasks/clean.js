import gulp from "gulp";
import del from "del";
import args from "./util/args";

// 檔案清空腳本, 再覆蓋檔案前先將舊檔案清空
gulp.task("clean", () => {
  return del(["server/public", "server/views"]);
});
