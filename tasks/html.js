"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import fileinclude from "gulp-file-include";/*плагін gulp для сбору та включення файлів html */
import browserSync from "browser-sync";
import livereload from "gulp-livereload";
import gulpHtmlBemValidator from "gulp-html-bem-validator";/*Плагін Gulp для перевірки bem html*/
export function html(cb) {/*експортуемо tasks html*/
	return src([config.src.html])/*беремо всі вихідні файли які прописання у нас у файлі конфігурації*/
		.pipe(/*за допомогую плагіну собираемо в один файл*/
			fileinclude({
				prefix: "@",
				basepath: "@file",
			})
		)
	.pipe(gulpHtmlBemValidator())
		.pipe(dest(config.build.html))/*перевіряемо через плагін gulp-html-bem-validator на помилки він вас попередить у терміналі що ви зробили помилку та іїї покаже в 
		terminal у вашому редакторі коду яки ви використовуете*/
		.pipe(browserSync.reload({ stream: true }))/*відночасно запускаемо браузер для відтвореня у режимі онлайн у нашому проекті*/
		.pipe(livereload()),/*буде автоматично відстежувати зміни*/
		cb();
}
