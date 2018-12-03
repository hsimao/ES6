import gulp from "gulp";
import gulpif from "gulp-if";
import concat from "gulp-concat";
import webpack from "webpack";
import gulpWebpack from "webpack-stream";
import named from "vinyl-named";
import livereload from "gulp-livereload";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import { log, colors } from "gulp-util";
import args from "./util/args";

// js 編譯任務
gulp.task("scripts", () => {
  return (
    gulp
      .src(["app/js/index.js"])
      .pipe(
        plumber({
          errorHandle: function() {}
        })
      )
      .pipe(named())
      // webpack編譯
      .pipe(
        gulpWebpack({
          module: {
            loaders: [
              {
                test: /\.js$/,
                loader: "babel"
              }
            ]
          }
        }),
        null,
        (err, stats) => {
          log(
            `Finished '${colors.cyan("scripts")}'`,
            stats.toString({
              chunks: false
            })
          );
        }
      )
      // 檔案輸出位置
      .pipe(gulp.dest("server/public/js"))
      // 複製一份重新給名稱
      .pipe(
        rename({
          basename: "cp",
          extname: ".min.js"
        })
      )
      // 壓縮
      .pipe(
        uglify({
          compress: { properties: false },
          output: { quote_keys: true }
        })
      )
      // 檔案輸出位置
      .pipe(gulp.dest("server/public/js"))
      // 監聽js修改後刷新網頁
      .pipe(gulpif(args.watch, livereload()))
  );
});
