"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("build", function() {
  return gulp
    .src("./src/basics.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"));
});
