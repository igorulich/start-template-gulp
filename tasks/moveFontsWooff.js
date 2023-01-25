"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import ttf2woff from "gulp-ttf2woff";


export function moveFontsWoff (cb)  {
	return src([config.src.fonts])
		.pipe(ttf2woff())
		.pipe(dest(config.build.fonts)),
		cb();
};
