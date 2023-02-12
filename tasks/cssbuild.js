"use strict";
import { config } from "../configModul ";
import { src, dest } from "gulp";
import plumber from "gulp-plumber";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import browserSync from "browser-sync";
import livereload from "gulp-livereload";
import dartSass from "sass";
import gulpSass from "gulp-sass";
export const sass = gulpSass(dartSass);
export function cssBuild(cb) {/*експортуемо taskscssBuild*/
	return src(config.src.css)/*беремо всі вихідні файли які прописання у нас у файлі конфігурації*/
			.pipe(plumber())/*пропускаемо через плагін для уникненя помилок*/
			.pipe(sass().on("error", sass.logError))/*пропускаемо через плагін sass для синхронного відтворення вашого CSS*/
			.pipe(autoprefixer(config.autoprefixerConfig))/*пропускаемо через автопрефіксер для коректного відображення у більш старійших браузерах*/
			.pipe(cleanCSS({ outputStyle: "compressed" }))/*тонка обгортка за допомогую вбудованій функції у плагін " compressed " зменьшуемо файл*/
			.pipe(
				rename({/*переіменовуем файл та змінюем розширення файлу з SCSS або SASS на CSS*/
					basename: "styles",
					extname: ".css",
				})
			)
			.pipe(plumber.stop())/*зачиняется плагін для запобіганью помилок*/
			.pipe(dest(config.build.css))/*та виводимо у кінцеву папку*/
			.pipe(browserSync.reload({ stream: true }))/*відночасно запускаемо браузер для відтвореня у режимі онлайн у нашому проекті*/
			.pipe(livereload()),/*буде автоматично відстежувати зміни*/
		cb();
}
