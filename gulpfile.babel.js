import gulp from 'gulp';
import zip from 'gulp-zip';
import package from './package.json';

gulp.task('update-info', () => {
    
})

gulp.task('default', () => {
    return gulp.src('src/*')
        .pipe(zip(`${package.name}_${package.version}.zip`))
        .pipe(gulp.dest('dist'));
});
