"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var clean = require("gulp-clean-css");

gulp.task("sass", function() {
  return gulp
    .src("./src/basics.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(clean({ compatibility: "ie8" }))
    .pipe(gulp.dest("./dist"));
});
