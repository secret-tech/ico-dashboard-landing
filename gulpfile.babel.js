import fs from 'fs';
import gulp from 'gulp';
import bs from 'browser-sync';
import githubPages from 'gulp-gh-pages';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';

import browserify from 'gulp-browserify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';

import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import cssnano from 'gulp-cssnano';
import gcmq from 'gulp-group-css-media-queries';

import realFavicon from 'gulp-real-favicon';

import image from 'gulp-imagemin';

const FAVICON_DATA_FILE = 'faviconData.json';

// paths

const src = {
  html: 'src/pug/*.pug',
  css: 'src/css/styles.css',
	stls: 'src/css/**/*.css',
	js: './src/**/*.js',
	images: 'src/images/**/*',
  favicon: 'src/images/favicon.png'
};

const dist = {
  all: 'build/**/*',
  html: 'build/',
	css: 'build/css/',
	js: 'build/',
	images: 'build/images/',
  favicon: 'build/icons'
};

// rules

const html = () => gulp
	.src(src.html)
	.pipe(plumber())
	.pipe(pug())
	.pipe(gulp.dest(dist.html));

const css = () => {
	const plugins = [
		require('postcss-import')({ root: './src/css *' }),
		autoprefixer({ browsers: ['last 3 version'] })
	];

	return gulp.src(src.css)
		.pipe(plumber())
		.pipe(postcss(plugins))
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(dist.css));
};

const scripts = () => gulp
  .src(src.js)
  .pipe(browserify({
    transform: babelify.configure({ presets: ['es2015'] })
  }))
  .pipe(uglify())
	.pipe(gulp.dest(dist.js));

const images = () => gulp
  .src(src.images)
  .pipe(image())
	.pipe(gulp.dest(dist.images));

const favicon = done => {
	realFavicon.generateFavicon({
		masterPicture: src.favicon,
		dest: dist.favicon,
		iconsPath: '/icons',
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: '#fff'
			}
		},
		settings: {
			compression: 2,
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false
		},
		markupFile: FAVICON_DATA_FILE
	}, () => {
		done();
	});
};

const injectFav = () => gulp
	.src(['./build/index.html'])
	.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
	.pipe(gulp.dest('./build'));


// common

gulp.task('watch', () => {
  gulp.watch(src.html, { debounceDelay: 300 }, ['html']);
	gulp.watch(src.css, ['css']);
	gulp.watch(src.images, ['images']);
});

const watch = () => {
  gulp.watch(src.html, html);
  gulp.watch(src.css, css);
  gulp.watch(src.js, scripts);
  gulp.watch(src.images, images);
};

const browserSync = () => {
  bs.init(['build/**/*'], {
    server: {
      baseDir: './build'
    }
  })
};

const fav = gulp.series(favicon, injectFav);
const build = gulp.series(html, gulp.parallel(scripts, css), images, fav);
const start = gulp.series(html, gulp.parallel(scripts, css), images, gulp.parallel(watch, browserSync));

gulp.task('default', start);
gulp.task('build', build);

gulp.task('deploy',
  () => gulp
    .src(dist.all)
    .pipe(ghp())
);
