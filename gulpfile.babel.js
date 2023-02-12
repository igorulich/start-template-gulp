"use strict";
import requireDir from "require-dir";/*бібліотека для підключення tasks*/
/*импортуемо gulp*/
import { series, parallel } from "gulp";

import { Webp } from "./tasks/Webp";/*імпорт tasks для форматуемо фото в webp*/
import { resources } from "./tasks/resources";/*імпорт tasks для переносимо допоміжні матеріали в корінь проекту такі як audio video favicon*/
import { clean } from "./tasks/clean";/*імпорт tasks для видаленя папок з файлами з старим кодом*/
import { icons } from "./tasks/icons";/*імпорт tasks для створення спрайтів*/
import { svgIcons } from "./tasks/svgIcons";/*імпорт tasks для перенесеня спрайтів зи стилями в корневу папку src*/
import { server } from "./tasks/server";/*імпорт tasks для запуск програми на локальному сервері*/
import { js } from "./tasks/js";/*імпорт tasks для компиляція js файлів*/
import { jsBuild } from "./tasks/jsbuid";/*імпорт tasks для компиляция js файлів перед продакшеном*/
import { html } from "./tasks/html";/*імпорт tasks для компіляція html файлів*/
import { css } from "./tasks/css";/*імпорт tasks для компіляція css файлів*/
import { cssBuild } from "./tasks/cssbuild";/*імпорт tasks для компіляція css файлів перед продакшеном*/
import { watchFiles } from "./tasks/watchFiles";/*імпорт tasks для відсліжування змін у коді файлів*/
import { moveFontsWoff2 } from "./tasks/moveFontsWooff2";/*імпорт tasks для створення ttf2woff файла з шрифтами*/
import { moveFontsWoff } from "./tasks/moveFontsWooff";/*імпорт tasks для створення ttf2woff2 файла з шрифтами*/
import { connectionFonts } from "./tasks/connectionFonts"/*імпорт tasks для створення підключення шрифтів різноі конфігурації та стилю*/

//Dev
/*ЕКСПОРТУЕМО ФУНКЦІЇ*/
(exports.connectionFonts = connectionFonts);
(exports.moveFontsWoff2 = moveFontsWoff2);
(exports.moveFontsWoff = moveFontsWoff);
(exports.Webp = Webp);
(exports.svgIcons = svgIcons);
(exports.icons = icons);
(exports.recurse = resources);
(exports.js = js);
(exports.server = server);
(exports.html = html);
(exports.clean = clean);
(exports.css = css);
export { watchFiles as watch };
/*ЗАПУСКАЕМО gulp*/
exports.default = series(
	clean,
	parallel(
		icons,
		svgIcons
	),
	parallel(
		moveFontsWoff2,
		moveFontsWoff,
		connectionFonts
	),
	parallel(
		resources,
		Webp,
		css,
			js
	),
	parallel(
		html,
		server,
		watchFiles
	),
);

//Build

(exports.cssBuild = cssBuild);
(exports.jsBuild = jsBuild);
exports.build = series(
	clean,
	parallel(
		icons,
		svgIcons
	),
	parallel(
		moveFontsWoff2,
		moveFontsWoff,
		connectionFonts
	),
	parallel(
		resources,
		Webp,
		cssBuild,
			jsBuild
	),
	parallel(
		html,
		server,
		watchFiles
	),
);
// deploy
/*підключаемо в проект tasks*/
requireDir("./tasks", { recurse: true });
