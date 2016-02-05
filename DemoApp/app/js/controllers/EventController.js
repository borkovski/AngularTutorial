﻿'use strict';

eventsApp.controller('EventController', function EventController($scope) {
    $scope.event = {
        name: "Angular Boot Camp",
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Google HQ',
            city: "Mountain View",
            province: 'CA'
        },
        imageUrl: 'img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and outs of directives'
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John Doe',
                duration: '30 mins',
                level: 'Introductory',
                abstract: 'This session will take a closer look at scopes. Learn what they do, and how to get them to do it for you'
            },
            {
                name: 'Well behaved controllers',
                creatorName: 'Jane Doe',
                duration: '2 hours',
                level: 'Intermediate',
                abstract: 'Controllers are the beginning of everything Angular does offer'
            }
        ]
    }
})