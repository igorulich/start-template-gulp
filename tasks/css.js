"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import plumber from "gulp-plumber";/*Коротко кажучи, він замінює pipeметод і видаляє стандартний onerrorобробник errorподії,
який за замовчуванням відключає потоки в разі помилки. */
import sourcemaps from "gulp-sourcemaps";/*Вбудовані вихідні карти вбудовані у вихідний файл.*/
import autoprefixer from "gulp-autoprefixer";/*Префікс CSS за допомогою автопрефікса*/
import cleanCSS from "gulp-clean-css";/*Це лише простий плагін gulp ,
що означає, що це не що інше, як тонка обгортка навколо clean-css. Якщо схоже, що у вас проблеми, пов’язані з CSS, зверніться до clean-css .*/
import rename from "gulp-rename";/*gulp-rename надає прості методи перейменування файлів.*/
import browserSync from "browser-sync";/*Налаштуйте набір налаштувань синхронізації з інтерфейсу користувача або командного рядка, 
щоб створити персоналізоване тестове середовище*/
import livereload from "gulp-livereload";/*gulp-livereloadне буде автоматично відстежувати зміни.
Тепер вам доведеться викликати вручну livereload.listen, якщо ви не встановите опцію start:*/
import dartSass from "sass";/*Щоб використовувати gulp-sassв модулі ECMAScript (який підтримується в новіших Node.js 14 і пізніших версіях),
виконайте щось на зразок цього: */
/*імпортувати  dartSass  із  'sass' ; 
імпорт  gulpSass  з  'gulp-sass' ; 
const  sass  =  gulpSass ( dartSass ) */
import gulpSass from "gulp-sass";/*імпортуемо бібліотеку*/
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
