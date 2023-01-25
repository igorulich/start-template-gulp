"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
const cwebp = require("gulp-cwebp");
import browserSync from "browser-sync";
export const Webp = (cb) => {
	return src(config.src.images)
.pipe(cwebp())
		.pipe(dest(config.build.images))
		.pipe(browserSync.reload({ stream: true })),
	cb();
};
