"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
export function resources(cb) {
	return src(config.src.resources)/*беремо всі вихідні файли які прописання у нас у файлі конфігурації*/
		.pipe(dest(config.build.resources))/*та виводимо у кінцеву папку*/
};
