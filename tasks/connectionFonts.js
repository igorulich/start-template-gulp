"use strict";
import { config } from "../configModul ";/*підключення файла з конфігураціями*/
import { readFileSync, writeFile, readdir, appendFile } from "fs";/*імпортуемо бібліотеку fs */
const checkWeight = (fontname) => {
	let weight = 400;
	switch (true) {
		case /Thin/.test(fontname):
			weight = 100;
			break;
		case /ExtraLight/.test(fontname):
			weight = 200;
			break;
		case /Light/.test(fontname):
			weight = 300;
			break;
		case /Regular/.test(fontname):
			weight = 400;
			break;
		case /Medium/.test(fontname):
			weight = 500;
			break;
		case /SemiBold/.test(fontname):
			weight = 600;
			break;
		case /Semi/.test(fontname):
			weight = 600;
			break;
		case /Bold/.test(fontname):
			weight = 700;
			break;
		case /ExtraBold/.test(fontname):
			weight = 800;
			break;
		case /Heavy/.test(fontname):
			weight = 700;
			break;
		case /Black/.test(fontname):
			weight = 900;
			break;
		default:
			weight = 400;
	}
	return weight;
};
const cb = () => {};
export function connectionFonts (cb){
	let file_content = readFileSync(config.srcFonts);
	writeFile(config.srcFonts, "", cb);
	readdir(config.appFonts, function (err, items) {
		if (items) {
			let c_fontname;
			for (var i = 0; i < items.length; i++) {
				let fontname = items[i].split(".");
				fontname = fontname[0];
				let font = fontname.split("-")[0];
				let weight = checkWeight(fontname);

				if (c_fontname != fontname) {
					appendFile(
						config.srcFonts,
						'@include connectionFonts("' +
							font +
							'", "' +
							fontname +
							'", ' +
							weight +
							");\r\n",
						cb
					);
				}
				c_fontname = fontname;
			}
		}
	})
	cb();
};
