angular.module('starter.controllers').controller('DoorCtrl', function ($scope) {

    $scope.doorDetails = [
        { doorNo: 301, trailerNo: 12345, deliveryNo: '100' },
        { doorNo: 302, trailerNo: 12675, deliveryNo: '110' },
        { doorNo: 305, trailerNo: 87345, deliveryNo: '114' },
        { doorNo: 312, trailerNo: 90345, deliveryNo: '121' }
    ]
});