"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import plumber from "gulp-plumber";/*Коротко кажучи, він замінює pipeметод і видаляє стандартний onerrorобробник errorподії,
який за замовчуванням відключає потоки в разі помилки. */
import browserSync from "browser-sync";/*Налаштуйте набір налаштувань синхронізації з інтерфейсу користувача або командного рядка, 
щоб створити персоналізоване тестове середовище*/
import svgSprite from "gulp-svg-sprite";/*— це плагін Gulp, що обертається навколо svg-sprite , який бере купу файлів SVG ,
оптимізує їх і запікає в спрайти SVG кількох типів:*/
export function icons(cb) {/*експортуемо tasks icons*/
	return src(config.src.svg)/*беремо всі вихідні файли які прописання у нас у файлі конфігурації*/
		.pipe(plumber())/*пропускаемо через плагін для уникненя помилок*/
		.pipe(svgSprite(config.svgSpriteConfig))/*беремо всі вихідні файли які прописання у нас у файлі конфігурації пропускаемо через плагін*/
		.on("error", function (error) {
		})
		.pipe(dest(config.build.icons))/*та виводимо у кінцеву папку*/
		.pipe(browserSync.reload({ stream: true })),/*відночасно запускаемо браузер для відтвореня у режимі онлайн у нашому проекті*/
		cb();
};
