let app = angular.module('jepapp', []);




let questions = [{
    question: "Who is the cousin of spaghetti?",
    answer: "penne",
    points: 400
}, {
        question: "What color is pizza sauce?",
        answer: "red",
        points: 100
    }, {
        question: "What shape is a pizza?",
        answer: "circle",
        points: 200
    }, {
        question: "What shape is Italy?",
        answer: "boot",
        points: 300
    }, {
        question: "Why are all these questions Italy related?",
        answers: "because reasons",
        points: 500
    }];

app.controller('MainController', function ($scope) {

    let counter = 0;
    $scope.score = 100;
    $scope.question = questions[counter].question
    $scope.nextquestion = function () {

        $scope.info = [];


        if($scope.score > 0){
        if ($scope.answer !== questions[counter].answer) {
            $scope.correct = "Incorrect!" + " -" + questions[counter].points + " points";
            $scope.score = $scope.score - questions[counter].points;
            
            $scope.question = questions[counter].question

            $scope.info.push({
                question:"Question: " + $scope.question,
                answer: "Answered: " + $scope.correct
        });
            counter++;
        } else {
            $scope.correct = "Correct!" + " +" + questions[counter].points + " points";
            $scope.score = $scope.score + questions[counter].points;

            $scope.info.push({
                question:"Question: " + $scope.question,
                answer: "Answered: " + $scope.correct
        });

            counter++;
            $scope.question = questions[counter].question

        }



    }else{
        $scope.lose = "You Lost";
    }
    }

    


});