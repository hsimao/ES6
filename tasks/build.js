import gulp from "gulp";
import gulpSequence from "gulp-sequence";

// 依序執行各腳本
// ["browser", "server"] 會在前面任務執行完後才執行，"server"會在"browser"執行完才執行
gulp.task(
  "build",
  gulpSequence("clean", "css", "pages", "scripts", ["browser", "serve"])
);
