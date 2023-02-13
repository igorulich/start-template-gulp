"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import ttf2woff2 from "gulp-ttf2woff2";/*підключаемо плагин для конвертфції файлїв, які мають розширення .ttf. у формат ttf2woff2*/


export function moveFontsWoff2 (cb)  {/*експортуемо tasks moveFontsWoff2*/
	return src([config.src.fonts])/*беремо всі вихідні файли у формат .ttf які прописання у вас у файлі конфігурації*/
		.pipe(ttf2woff2())/*пропускаемо через .pipe плагина*/
		.pipe(dest(config.build.fonts)),/*та виводимо у кінцеву папку*/
		cb();
};
