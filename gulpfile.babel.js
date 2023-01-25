"use strict";
import requireDir from "require-dir";

import { series, parallel } from "gulp";

import { Webp } from "./tasks/Webp";
import { resources } from "./tasks/resources";
import { clean } from "./tasks/clean";
import { icons } from "./tasks/icons";
import { svgIcons } from "./tasks/svgIcons";
import { server } from "./tasks/server";
import { js } from "./tasks/js";
import { jsBuild } from "./tasks/jsbuid";
import { html } from "./tasks/html";
import { css } from "./tasks/css";
import { cssBuild } from "./tasks/cssbuild";
import { watchFiles } from "./tasks/watchFiles";
import { moveFontsWoff2 } from "./tasks/moveFontsWooff2";
import { moveFontsWoff } from "./tasks/moveFontsWooff";
import { connectionFonts } from "./tasks/connectionFonts"

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
