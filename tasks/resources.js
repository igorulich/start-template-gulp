"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import browserSync from "browser-sync";/*Налаштуйте набір налаштувань синхронізації з інтерфейсу користувача або командного рядка,
щоб створити персоналізоване тестове середовище*/
export function resources(cb) {
	return src(config.src.resources)/*беремо всі вихідні файли які прописання у нас у файлі конфігурації*/
		.pipe(dest(config.build.resources))/*та виводимо у кінцеву папку*/
};
