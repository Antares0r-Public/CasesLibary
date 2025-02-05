"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Case = void 0;
var Case = /** @class */ (function () {
    function Case(possibleOutcome, range) {
        this.possibleOutcome = possibleOutcome;
        this.range = range;
    }
    Case.prototype.openCase = function () {
        var min = this.range[0];
        var max = this.range[1];
        var founds = [];
        var r = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("Random Number: ".concat(r, "."));
        for (var i = 0; i < this.possibleOutcome.length; i++) {
            var percentage = this.possibleOutcome[i].percentage;
            if (r < percentage) {
                founds.push(percentage);
                console.log(founds);
            }
        }
        if (founds.length > 0) {
            var smallestNum = Math.min.apply(Math, founds);
            var winningOutcome = void 0;
            for (var i = 0; i < this.possibleOutcome.length; i++) {
                if (this.possibleOutcome[i].percentage === smallestNum) {
                    winningOutcome = this.possibleOutcome[i];
                    break;
                }
            }
            if (winningOutcome) {
                console.log("You've won: ".concat(winningOutcome.name));
            }
        }
    };
    return Case;
}());
exports.Case = Case;
