"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import browserSync from "browser-sync";
export function resources(cb) {
	return src(config.src.resources)
		.pipe(dest(config.build.resources))
		.pipe(browserSync.reload({ stream: true })), cb();
};
