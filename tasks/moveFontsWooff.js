"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import ttf2woff from "gulp-ttf2woff";/*підключаемо плагин для конвертфції файлїв, які мають розширення .ttf. у формат ttf2woff*/


export function moveFontsWoff (cb)  {/*експортуемо tasks moveFontsWoff*/
	return src([config.src.fonts])/*беремо всі вихідні файли у формат .ttf які прописання у вас у файлі конфігурації*/
		.pipe(ttf2woff())/*пропускаемо через .pipe плагина*/
		.pipe(dest(config.build.fonts)),/*та виводимо у кінцеву папку*/
		cb();
};
