"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";
import svgSprite from "gulp-svg-sprite";
export function icons(cb) {
	return src(config.src.svg)
		.pipe(plumber())
		.pipe(svgSprite(config.svgSpriteConfig))
		.on("error", function (error) {
		})
		.pipe(dest(config.build.icons))
		.pipe(browserSync.reload({ stream: true })),
		cb();
};
