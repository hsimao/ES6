import gulp from "gulp";
import gulpif from "gulp-if";
import livereload from "gulp-livereload";
import args from "./util/args";

// css 編譯任務
gulp.task("css", () => {
  // app目錄底下所有css檔案複製一份到server/public底下
  return (
    gulp
      .src("app/**/*.css")
      .pipe(gulp.dest("server/public"))
      // 監聽如果有修改就重新刷新
      .pipe(gulpif(args.watch, livereload()))
  );
});
