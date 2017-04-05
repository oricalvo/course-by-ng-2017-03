var appModule = angular.module("myApp", []);

function BoardCtrl($scope) {
    initBoard();

    $scope.cellClicked = function(cell) {
        if(cell.val) {
            return;
        }

        cell.val = $scope.currentPlayer;
        $scope.currentPlayer = ($scope.currentPlayer=="X" ? "0" : "X");
    }

    $scope.start = function() {
        initBoard();
    }

    function initBoard() {
        $scope.currentPlayer = "X";
        $scope.rows = [];

        for(var y=0; y<3; y++) {
            var row = [];
            $scope.rows.push(row);

            for(var x=0; x<3; x++) {
                row.push(new Cell(x, y));
            }
        }
    }
}

function Cell(x,y) {
    this.x = x;
    this.y = y;
    this.val = undefined;
}

appModule.controller("BoardCtrl", BoardCtrl);
