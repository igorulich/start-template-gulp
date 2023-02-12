"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import plumber from "gulp-plumber";/*Коротко кажучи, він замінює pipeметод і видаляє стандартний onerrorобробник error події,
який за замовчуванням відключає потоки в разі помилки. */
import rename from "gulp-rename";/*gulp-rename надає прості методи перейменування файлів.*/
import browserSync from "browser-sync";/*Налаштуйте набір налаштувань синхронізації з інтерфейсу користувача або командного рядка, 
щоб створити персоналізоване тестове середовище*/
import webpackStream from "webpack-stream";/*буде скомпільовано .js в активи за допомогою webpack у dist/з іменем вихідного файлу [hash].js
(генерований webpack хеш збірки).*/
import livereload from "gulp-livereload";/*gulp-livereloadне буде автоматично відстежувати зміни.
Тепер вам доведеться викликати вручну livereload.listen, якщо ви не встановите опцію start:*/
import terser from "gulp-terser";/*Використовуйте версію мініфікатора третьої сторони*/
export function jsBuild(cb) {/*експортуемо tasks jsBuild*/
	return (
		src(config.src.js)/*беремо всі вихідні файли які прописання у нас у файлі конфігурації*/
			.pipe(plumber())/*пропускаемо через плагін для уникненя помилок*/
			.pipe(
				webpackStream({/*берем свій файл обовязково мае назву main.js* пропускаемо через webpackStream та за допомогою babel-loader пересобираемо в один та міняю назву на
			scripts.js*/
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
			.pipe(terser())/*бшльш делікатне обробка ифайлу дя конкатізації*/
			.pipe(
				rename({
					basename: "scripts",
					extname: ".js",
				})
			)
			.pipe(plumber.stop())/*зачиняется плагін для запобіганью помилок*/
			.pipe(dest(config.build.js))/*та виводимо у кінцеву папку*/
			.pipe(browserSync.reload({ stream: true }))/*відночасно запускаемо браузер для відтвореня у режимі онлайн у нашому проекті*/
			.pipe(livereload()),/*буде автоматично відстежувати зміни*/
		cb()
	);
};
