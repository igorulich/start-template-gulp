"use strict";
import { config } from "../configModul ";
import browserSync from "browser-sync";
export function server(cb) {
	browserSync.init(config.serverConfig), cb();
};
