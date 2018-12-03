import gulp from "gulp";
import gulpif from "gulp-if";
import gutil from "gulp-util";
import args from "./util/args";

// 監聽開發資料夾app底下的js、css、ejs 執行相對應gulp腳本
gulp.task("browser", cb => {
  if (!args.watch) return cb();
  gulp.watch("app/**/*.js", ["scripts"]);
  gulp.watch("app/**/*.ejs", ["pages"]);
  gulp.watch("app/**/*.css", ["css"]);
});
