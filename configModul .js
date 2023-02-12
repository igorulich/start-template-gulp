export const config = {/*експортуемо файл з кофігурацфями*/
	clean: `./dist/**/*.*`,/*чистка проекту*/
	srcFonts: `./src/scss/_fonts.scss`,/*шлях до файла підключеня шріфтів*/
	appFonts: `./dist/fonts/`,/*шлях до файлів зшрифтами*/
	build: {/*папка для продакшена*/
		html: `./dist/`,
		js: `./dist/js`,
		css: `./dist/css/`,
		icons: `./src/scss/`,
		images: `./dist/images/`,
		fonts: `./dist/fonts/`,
		resources: `./dist/`,
	},
	src: {/*папка с вихідниками*/
		html: `./src/*.html`,
		js: `./src/js/**/*.js`,
		css: `./src/scss/**/*.scss`,
		images: `./src/images/*.{jpg,png,jpeg,webp}`,
		svg: `./src/images/icons/*.svg`,
		icons: [
			`./src/scss/icons/*.svg`,
			`!./src/scss/icons/_sprite.scss`,
		],
		fonts: `./src/fonts/*.ttf `,
		resources: `./src/resources/*.*`,
	},
	watch: {/*папка для стеження за змінами у файлах*/
		html: `./src/**/*.html`,
		js: [`./src/dist/js/*.js`, `!./src/dist/js/scripts.js.map`],
		css: [`./src/scss/**/*.scss`, `!./src/scss/styles.css.map`],
		images: `./src/images/*.{jpg,png,jpeg,webp}`,
		icons: [`./src/scss/*.svg`, `!./src/scss/*.scss`],
		svg: `./src/images/icons/*.svg`,
		fonts: `./src/fonts/*.{ttf, woff, woff2 }`,
		resources: `./src/resources/*.*`,
	},
	svgSpriteConfig: {/*конфігурація для спрайту*/
		log: "info",
		shape: {
			dimension: {
				maxWidth: 40,
				maxHeight: 40,
			},
			spacing: {
				padding: 10,
				box: "content",
			},
			svg: {
				dimensionAttributes: false,
			},
		},
		mode: {
			stack: false,
			symbol: false,
			view: false,
			example: false,
			dest: ".",
			css: {
				dest: "icons",
				sprite: "sprite.svg",
				bust: false,
				inline: true,
				prefix: ".",
				render: {
					scss: {
						dest: "_sprite.scss",
					},
				},
			},
		},
	},
	serverConfig: {/*конфігурація для сервера*/
			server: {
			baseDir: "./dist/",
		},
		host: "localhost",
		port: "5678",
		notify: false,
		open: "local",
		logPrefix: "the process is running",
		files: false,
	},
	autoprefixerConfig: {/*конфігурація для автопрефіксу*/
		overrideBrowserslist: [
			"last 3 versions",
			"Chrome >= 20",
			"Firefox >= 24",
			"Explorer >= 8",
			"iOS >= 6",
			"Opera >= 12",
			"Safari >= 6",
		],
		cascade: false,
	},
};
