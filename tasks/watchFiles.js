"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { watch } from "gulp";/*підключення gulp зйого можливими  виконання gulpкоманди прописаними у фігурних дужках{обовязково прописуемо}*/
import browserSync from "browser-sync";/*Налаштуйте набір налаштувань синхронізації з інтерфейсу користувача або командного рядка, 
щоб створити персоналізоване тестове середовище*/
import livereload from "gulp-livereload";
import { Webp } from "./Webp";
import { resources } from "./resources";
import { svgIcons } from "./svgIcons";
import { js } from "./js";
import { html } from "./html";
import { css } from "./css";
import { moveFontsWoff } from "./moveFontsWooff";
import { moveFontsWoff2 } from "./moveFontsWooff2";
import { connectionFonts } from "./connectionFonts";

export function watchFiles(cb) {/*експортуемо tasks watchFiles*/
	livereload.listen();/*буде автоматично відстежувати зміни*/
	watch(config.watch.html, html).on("change", browserSync.reload);
	watch(config.build.fonts, connectionFonts);
	watch(config.watch.fonts, moveFontsWoff2);
	watch(config.watch.fonts, moveFontsWoff);
	watch(config.watch.images, Webp);
	watch(config.watch.css, css);
	watch(config.watch.js, js);
	watch(config.watch.resources, resources);
	watch(config.watch.icons, svgIcons);
	cb();
};
