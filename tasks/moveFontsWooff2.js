"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import ttf2woff2 from "gulp-ttf2woff2";


export function moveFontsWoff2 (cb)  {
	return src([config.src.fonts])
		.pipe(ttf2woff2())
		.pipe(dest(config.build.fonts)),
		cb();
};
