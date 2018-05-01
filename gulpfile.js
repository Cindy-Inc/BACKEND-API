const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('mocha-test', function () {
    return gulp.src('test/*.js', { read: false })
        .pipe(mocha({
            globals: ['expect'],
            timeout: 3000,
            ignoreLeaks: true,
            ui: 'bdd',
            colors: true
        }));
});
