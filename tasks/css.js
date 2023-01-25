"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import browserSync from "browser-sync";
import livereload from "gulp-livereload";
import dartSass from "sass";
import gulpSass from "gulp-sass";
export const sass = gulpSass(dartSass);
export function css(cb) {
	return src(config.src.css)
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer(config.autoprefixerConfig))
		.pipe(
			cleanCSS({
				level: 2,
			})
		)
		.pipe(
			rename({
				basename: "styles",
				extname: ".css",
			})
		)
		.pipe(plumber.stop())
		.pipe(sourcemaps.write("."))
		.pipe(dest(config.build.css))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(livereload()),
		cb();
}
