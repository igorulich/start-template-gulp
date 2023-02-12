"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import plumber from "gulp-plumber";/*Коротко кажучи, він замінює pipeметод і видаляє стандартний onerrorобробник error події,
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
export const sass = gulpSass(dartSass);/*експортуемо константу*/
export function css(cb) {/*експортуемо tasks css*/
	return src(config.src.css)/*беремо всі вихідні файли які прописання у нас у файлі конфігурації*/
		.pipe(sourcemaps.init())/*пропускаемо через бібліотеку для створеня sourcemaps файла в пректі*/
		.pipe(plumber())/*пропускаемо через плагін для уникненя помилок*/
		.pipe(sass().on("error", sass.logError))/*пропускаемо через плагін sass для синхронного відтворення вашого CSS*/
		.pipe(autoprefixer(config.autoprefixerConfig))/*пропускаемо через автопрефіксер для коректного відображення у більш старійших браузерах*/
		.pipe(/*тонка обгортка*/
			cleanCSS({
				level: 2,
			})
		)
		.pipe(
			rename({/*переіменовуем файл та змінюем розширення файлу з SCSS або SASS на CSS*/
				basename: "styles",
				extname: ".css",
			})
		)
		.pipe(plumber.stop())/*зачиняется плагін для запобіганью помилок*/
		.pipe(sourcemaps.write("."))/*зачиняемо плагин для створеня карти і указуемо крапкою для зберіганя у цьому з ісходним файлом положеню*/
		.pipe(dest(config.build.css))/*та виводимо у кінцеву папку*/
		.pipe(browserSync.reload({ stream: true }))/*відночасно запускаемо браузер для відтвореня у режимі онлайн у нашому проекті*/
		.pipe(livereload()),/*буде автоматично відстежувати зміни*/
		cb();
}
