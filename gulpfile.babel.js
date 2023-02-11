"use strict";
import requireDir from "require-dir";

import { series, parallel } from "gulp";

import { Webp } from "./tasks/Webp";/*форматуемо фото в webp*/
import { resources } from "./tasks/resources";/*переносимо допоміжні матеріали в корінь проекту такі як audio video favicon*/
import { clean } from "./tasks/clean";/*видаленя папок з файлами з старим кодом*/
import { icons } from "./tasks/icons";/*створення спрайтів*/
import { svgIcons } from "./tasks/svgIcons";/*перенесеня спрайтів зи стилями в корневу папку src*/
import { server } from "./tasks/server";/*запуск програми на локальному сервері*/
import { js } from "./tasks/js";/*компиляція js файлів*/
import { jsBuild } from "./tasks/jsbuid";/*компиляция js файлів перед продакшеном*/
import { html } from "./tasks/html";/*компіляція html файлів*/
import { css } from "./tasks/css";/*компіляція css файлів*/
import { cssBuild } from "./tasks/cssbuild";/*компіляція css файлів перед продакшеном*/
import { watchFiles } from "./tasks/watchFiles";/*відсліжування змін у коді файлів*/
import { moveFontsWoff2 } from "./tasks/moveFontsWooff2";/*створення ttf2woff файла з шрифтами*/
import { moveFontsWoff } from "./tasks/moveFontsWooff";/*створення ttf2woff2 файла з шрифтами*/
import { connectionFonts } from "./tasks/connectionFonts"/*створення підключення шрифтів різноі конфігурації та стилю*/

//Dev

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

requireDir("./tasks", { recurse: true });
