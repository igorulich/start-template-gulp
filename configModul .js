export const config = {
	clean: `./dist/**/*.*`,
	srcFonts: `./src/scss/_fonts.scss`,
	appFonts: `./dist/fonts/`,
	build: {
		html: `./dist/`,
		js: `./dist/js`,
		css: `./dist/css/`,
		icons: `./src/scss/`,
		images: `./dist/images/`,
		fonts: `./dist/fonts/`,
		resources: `./dist/`,
	},
	src: {
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
	watch: {
		html: `./src/**/*.html`,
		js: [`./src/dist/js/*.js`, `!./src/dist/js/scripts.js.map`],
		css: [`./src/scss/**/*.scss`, `!./src/scss/styles.css.map`],
		images: `./src/images/*.{jpg,png,jpeg,webp}`,
		icons: [`./src/scss/*.svg`, `!./src/scss/*.scss`],
		svg: `./src/images/icons/*.svg`,
		fonts: `./src/fonts/*.{ttf, woff, woff2 }`,
		resources: `./src/resources/*.*`,
	},
	svgSpriteConfig: {
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
	serverConfig: {
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
	autoprefixerConfig: {
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
