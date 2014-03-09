'use strict';

angular.module('resumeApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.bootstrap',
        'pascalprecht.translate'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/cv/:type', {
                templateUrl: 'views/main.html',
                controller: 'CVCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).config(function ($translateProvider) {

        $translateProvider.translations('en-US', {
            SKILLS: 'Skills',
            LANGUAGES: 'Languages',
            SYSTEMS_SERVERS: 'Systems / Servers',
            OTHER: 'Other',
            EXPERIENCE: 'Experience',
            EDUCATION: 'Education',
            INTERESTS: 'Interests',
            THANK_YOU: 'Thank you',
            READ_LESS: 'read less',
            READ_MORE: 'read more',
            TITLE: 'Résumé'
        });

        $translateProvider.fallbackLanguage('en');

        var language = window.navigator.userLanguage || window.navigator.language;

        if (language !== undefined && language !== '') {
            $translateProvider.preferredLanguage(language);
        }


    });
