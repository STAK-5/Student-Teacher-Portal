// map tells the System loader where to look for things
var map = {
    'app': 'js/app', // 'dist',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular'

};

// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    'app': {main: 'boot.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'}
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade',
    '@angular/forms'
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function (pkgName) {
    packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
});

var config = {
    map: map,
    packages: packages
};

System.config(config);
