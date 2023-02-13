"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { src, dest } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import browserSync from "browser-sync";/*Налаштуйте набір налаштувань синхронізації з інтерфейсу користувача або командного рядка, 
щоб створити персоналізоване тестове середовище*/
export function svgIcons(cb) {/*експортуемо tasks svgIcons*/
	return src(config.src.icons)/*беремо створений спрайт та переносим у кінцеву папку яка йде на продакшен*/
		.pipe(dest(config.build.css))/*кінцува папка*/
		.pipe(browserSync.reload({ stream: true })), cb();/*відночасно запускаемо браузер для відтвореня у режимі онлайн у нашому проекті*/
};
