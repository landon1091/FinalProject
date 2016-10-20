
let app = angular.module('WowApp', ['ui.router']);

app.factory('ItemFactory', function ($http) {
    let itemstash = [];
    $http({
        method: 'GET',
        url: "https://fathomless-cove-22309.herokuapp.com/"
    }).then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
        response.data[i].inventoryType = parseInt(response.data[i].inventoryType);
            let imageId = response.data[i].icon;
            response.data[i].image = "http://wow.zamimg.com/images/wow/icons/large/" + imageId + ".jpg";
        }

        angular.copy(response.data, itemstash)
        console.log(itemstash)
    });
    return {
        itemreturn: function () {
            return itemstash;
        }
    }
})

app.factory('EquipFactory', function () {
    let gear = {
        head: {},
        neck: {},
        shoulders: {},
        shirt: {},
        chest: {},
        tabard: {},
        belt: {},
        pants: {},
        feet: {},
        wrist: {},
        hands: {},
        ring1: {},
        ring2: {},
        trinket1: {},
        trinket2: {},
        cloak: {},
        righthand: {},
        lefthand: {},
    }
    return {
        add: function (item) {

            if (item.inventoryType === 1) {
                angular.copy(item, gear.head);
            } else if (item.inventoryType === 2) {
                angular.copy(item, gear.neck);
            } else if (item.inventoryType === 3) {
                angular.copy(item, gear.shoulders);
            } else if (item.inventoryType === 4) {
                angular.copy(item, gear.shirt);
            } else if (item.inventoryType === 5) {
                angular.copy(item, gear.chest);
            } else if (item.inventoryType === 6) {
                angular.copy(item, gear.belt);
            } else if (item.inventoryType === 7) {
                angular.copy(item, gear.pants);
            } else if (item.inventoryType === 8) {
                angular.copy(item, gear.feet);
            } else if (item.inventoryType === 9) {
                angular.copy(item, gear.wrist);
            } else if (item.inventoryType === 10) {
                angular.copy(item, gear.hands);
            } else if (item.inventoryType === 11 && gear.ring1.image === undefined) {
                angular.copy(item, gear.ring1);
            } else if (item.inventoryType === 11) {
                angular.copy(item, gear.ring2);
            } else if (item.inventoryType === 12 && gear.trinket1.image === undefined) {
                angular.copy(item, gear.trinket1);
            } else if (item.inventoryType === 12) {
                angular.copy(item, gear.trinket2);
            } else if (item.inventoryType === 16) {
                angular.copy(item, gear.cloak);
            } else if (item.inventoryType === 21) {
                angular.copy(item, gear.righthand);
            } else if (item.inventoryType === 17) {
                angular.copy(item, gear.lefthand);
            } else if (item.inventoryType === 19) {
                angular.copy(item, gear.tabard);
            }
            console.log(gear)
        },
        equipreturn: function () {
            return gear;
        }
    }
})



app.controller('SearchController', function ($scope, ItemFactory, EquipFactory) {
    $scope.test = ItemFactory.itemreturn();
    $scope.x = $scope.test.inventoryType

    $scope.additem = function (item) {
        EquipFactory.add(item);
        console.log(item);
    }

})

app.controller("ItemDisplay", function ($scope, EquipFactory) {
    $scope.gear = EquipFactory.equipreturn();
})
