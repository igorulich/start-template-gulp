"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import fileinclude from "gulp-file-include";
import browserSync from "browser-sync";
import livereload from "gulp-livereload";
import gulpHtmlBemValidator from "gulp-html-bem-validator";
export function html(cb) {
	return src([config.src.html])
		.pipe(
			fileinclude({
				prefix: "@",
				basepath: "@file",
			})
		)
	.pipe(gulpHtmlBemValidator())
		.pipe(dest(config.build.html))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(livereload()),
		cb();
}
