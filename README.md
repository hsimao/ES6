# ES6 編譯環境

## 開發用指令須加 --watch 才會持續監聽

```
gulp --watch
```

## 腳本執行順序說明

運行時會從 gulpfile.babel.js 引入 tasks 腳本

執行腳本指令

```
gulp build
```

執行順序 clean.js > css.js > pages.js > scripts.js > browser.js > server.js

## defatul 指令 gulp 會執行 gulp build

```
gulp
```

## task 腳本檔案說明

| 檔案名稱   | 說明                                                   |
| :--------- | :----------------------------------------------------- |
| build.js   | 控制各個腳本執行順序                                   |
| default.js | 執行 gulp 後面沒輸入其他指令，就會執行該檔案預設的腳本 |
| scripts.js | 編譯 js es6 => es5                                     |
| pages.js   | 編譯 ejs                                               |
| css.js     | 編譯 css                                               |
| browser.js | 監聽開發資料夾底下的 js、css、ejs 執行相對應 gulp 腳本 |
| server.js  | 啟用 server、熱加載功能                                |
| clean.js   | 清空 server 底下的 js、ejs 檔案                        |
