import gulp from "gulp";
import gulpif from "gulp-if";
import livereload from "gulp-livereload";
import args from "./util/args";

// ejs 編譯任務
gulp.task("pages", () => {
  // app目錄底下所有ejs檔案複製一份到server底下
  return (
    gulp
      .src("app/**/*.ejs")
      .pipe(gulp.dest("server"))
      // 監聽如果有修改就重新刷新
      .pipe(gulpif(args.watch, livereload()))
  );
});
