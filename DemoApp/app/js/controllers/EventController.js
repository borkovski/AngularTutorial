'use strict';

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
                duration: 2,
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and outs of directives',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John Doe',
                duration: 1,
                level: 'Introductory',
                abstract: 'This session will take a closer look at scopes. Learn what they do, and how to get them to do it for you',
                upVoteCount: 0
            },
            {
                name: 'Well behaved controllers',
                creatorName: 'Jane Doe',
                duration: 3,
                level: 'Intermediate',
                abstract: 'Controllers are the beginning of everything Angular does offer',
                upVoteCount: 0
            }
        ]
    };

    $scope.sortOrder = '-upVoteCount';
    $scope.buttonDisabled = true;
    $scope.snippet = '<span>TEST HTML SNIPPET</span>';
    $scope.boolValue = false;
    $scope.mystyle = { color: 'red' };
    $scope.myclass = 'blue';

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    };
})