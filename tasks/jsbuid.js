"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import browserSync from "browser-sync";
import webpackStream from "webpack-stream";
import livereload from "gulp-livereload";
import terser from "gulp-terser";
export function jsBuild(cb) {
	return (
		src(config.src.js)
			.pipe(plumber())
			.pipe(
				webpackStream({
					mode: "development",
					output: {
						filename: "main.js",
					},
					module: {
						rules: [
							{
								test: /\.m?js$/,
								exclude: /(node_modules|bower_components)/,
								use: {
									loader: "babel-loader",
									options: {
										presets: ["@babel/preset-env"],
									},
								},
							},
						],
					},
				})
			)
			.on("error", function (err) {
				console.error("WEBPACK ERROR", err);
				this.emit("end");
			})
			.pipe(terser())
			.pipe(
				rename({
					basename: "scripts",
					extname: ".js",
				})
			)
			.pipe(plumber.stop())
			.pipe(dest(config.build.js))
			.pipe(browserSync.reload({ stream: true }))
			.pipe(livereload()),
		cb()
	);
};
