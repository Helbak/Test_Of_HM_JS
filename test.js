// if (a < 0 || b > 10500 || isNaN(a) || isNaN(b)|| a+b>999999) {
//     return false;
describe(" tests a+b or a*b", () => {
    it(`test value 5 and 2`, function () {
        const act = ab(5, 2);
        const exp = 7;
        assert.equal(act, exp);
    });
    it(`test value 2 and 5`, function () {
        const act = ab(2, 5);
        const exp = 10;
        assert.equal(act, exp);
    });
    it(`test value 0 and 5`, function () {
        const act = ab(0, 5);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test value NaN and 5`, function () {
        const act = ab("test", 5);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test value 5 and NaN`, function () {
        const act = ab(5, "test");
        const exp = false;
        assert.isFalse(act);
    });
    it(`test value NaN and NaN`, function () {
        const act = ab("test", "test");
        const exp = false;
        assert.isFalse(act);
    });
});
describe(" whereIsPoint(x, y)", () => {
    it(`test whereIsPoint(2, 2)`, function () {
        const act = whereIsPoint(2, 2);
        const exp = 1;
        assert.equal(act, exp);
    });
    it(`test whereIsPoint(2, -2)`, function () {
        const act = whereIsPoint(2, -2);
        const exp = 2;
        assert.equal(act, exp);
    });
    it(`test whereIsPoint(-2, -2)`, function () {
        const act = whereIsPoint(-2, -2);
        const exp = 3;
        assert.equal(act, exp);
    });
    it(`test whereIsPoint(-2, 2)`, function () {
        const act = whereIsPoint(-2, 2);
        const exp = 4;
        assert.equal(act, exp);
    });
    it(`test whereIsPoint(0, 2)`, function () {
        const act = whereIsPoint(0, 2);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test whereIsPoint(2, 0)`, function () {
        const act = whereIsPoint(2, 0);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test whereIsPoint(0, 0)`, function () {
        const act = whereIsPoint(0, 0);
        const exp = 'center';
        assert.equal(act, exp);
    });
    it(`test whereIsPoint(test, 2)`, function () {
        const act = whereIsPoint('test', 2);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test whereIsPoint(2, test)`, function () {
        const act = whereIsPoint(2, 'test');
        const exp = false;
        assert.isFalse(act);
    });
});
describe(" sumOnlyPositive(a, b, c)", () => {

    it(`test sumOnlyPositive(2,2,2)`, function () {
        const act = sumOnlyPositive(2, 2, 2);
        const exp = 6;
        assert.equal(act, exp);
    });
    it(`test sumOnlyPositive(-2,2,2)`, function () {
        const act = sumOnlyPositive(-2, 2, 2);
        const exp = 4;
        assert.equal(act, exp);
    });
    it(`test sumOnlyPositive(-2,-2,2)`, function () {
        const act = sumOnlyPositive(-2, -2, 2);
        const exp = 2;
        assert.equal(act, exp);
    });
    it(`test sumOnlyPositive(-2,-2,-2)`, function () {
        const act = sumOnlyPositive(-2, -2, -2);
        const exp = 0;
        assert.equal(act, exp);
    });
    const mock1 = [0, -5, 10, -100, 1000, -10500];
    const mock2 = [0, 5, -10, 100, -1000, 10500];
    const mock3 = [0, -5, 10, -100, 1000, -10500];
    for (let i = 0; i < mock1.length; i++) {
        var value1 = 0;
        var value2 = 0;
        var value3 = 0;

        if (mock1[i] > 0) {
            value1 = mock1[i];
        }
        if (mock2[i] > 0) {
            value2 = mock2[i];
        }
        if (mock3[i] > 0) {
            value3 = mock3[i];
        }
        it(`test value ${value1} value2 ${value2} value3 ${value3}`, function () {
            const act = sumOnlyPositive(value1, value2, value3);
            const exp = value1 + value2 + value3;

            assert.equal(act, exp);
        });
    }
    it(`test sumOnlyPositive(test,2,2)`, function () {
        const act = sumOnlyPositive('test', 2, 2);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test sumOnlyPositive(2,test,2)`, function () {
        const act = sumOnlyPositive(2, 'test', 2);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test sumOnlyPositive(2,2,test)`, function () {
        const act = sumOnlyPositive(2, 2, 'test');
        const exp = false;
        assert.isFalse(act);
    });


});
describe(" sumFromMaxPlus3(a, b, c)", () => {

    it(`test sumFromMaxPlus3(a, b, c)`, function () {
        const act = sumFromMaxPlus3(2, 2, 2);
        const exp = 11;
        assert.equal(act, exp);
    });
    it(`test sumFromMaxPlus3(a, b, c)`, function () {
        const act = sumFromMaxPlus3(-2, 2, 2);
        const exp = 5;
        assert.equal(act, exp);
    });
    it(`test sumFromMaxPlus3(test, 2, 2)`, function () {
        const act = sumFromMaxPlus3('test', 2, 2);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test sumFromMaxPlus3(2, test, 2)`, function () {
        const act = sumFromMaxPlus3(2, 'test', 2);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test sumFromMaxPlus3(2, 2, test)`, function () {
        const act = sumFromMaxPlus3(2, 2, 'test');
        const exp = false;
        assert.isFalse(act);
    });

});
describe(" scoringOfStudent(a)", () => {

    it(`test scoringOfStudent(0)`, function () {
        const act = scoringOfStudent(0);
        const exp = ' F ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(9))`, function () {
        const act = scoringOfStudent(9);
        const exp = ' F ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(19))`, function () {
        const act = scoringOfStudent(19);
        const exp = ' F ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(20))`, function () {
        const act = scoringOfStudent(20);
        const exp = ' E ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(30))`, function () {
        const act = scoringOfStudent(30);
        const exp = ' E ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(39))`, function () {
        const act = scoringOfStudent(39);
        const exp = ' E ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(40))`, function () {
        const act = scoringOfStudent(40);
        const exp = ' D ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(50))`, function () {
        const act = scoringOfStudent(50);
        const exp = ' D ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(59))`, function () {
        const act = scoringOfStudent(59);
        const exp = ' D ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(60))`, function () {
        const act = scoringOfStudent(60);
        const exp = ' C ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(70))`, function () {
        const act = scoringOfStudent(70);
        const exp = ' C ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(74))`, function () {
        const act = scoringOfStudent(74);
        const exp = ' C ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(75))`, function () {
        const act = scoringOfStudent(75);
        const exp = ' B ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(85))`, function () {
        const act = scoringOfStudent(85);
        const exp = ' B ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(89))`, function () {
        const act = scoringOfStudent(89);
        const exp = ' B ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(90))`, function () {
        const act = scoringOfStudent(90);
        const exp = ' A ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(95))`, function () {
        const act = scoringOfStudent(95);
        const exp = ' A ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(100))`, function () {
        const act = scoringOfStudent(100);
        const exp = ' A ';
        assert.equal(act, exp);
    });
    it(`test scoringOfStudent(-1))`, function () {
        const act = scoringOfStudent(-1);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test scoringOfStudent('test')`, function () {
        const act = scoringOfStudent('test');
        const exp = false;
        assert.isFalse(act);
    });
    it(`test scoringOfStudent(101)`, function () {
        const act = scoringOfStudent(101);
        const exp = false;
        assert.isFalse(act);
    });
});
describe("sumAndAmount()", () => {

    it(`test sumAndAmount()`, function () {
        const act = sumAndAmount();
        const exp = 'sum =  2450 amount = 49';
        assert.equal(act, exp);
    });
    it(`test sumAndAmount(2)`, function () {
        const act = sumAndAmount(2);
        // const exp = false;
        // assert.isFalse(act);
        const exp = 'sum =  2450 amount = 49';
        assert.equal(act, exp);
    });
    it(`test sumAndAmount(test)`, function () {
        const act = sumAndAmount('test');
        // const exp = false;
        // assert.isFalse(act);
        const exp = 'sum =  2450 amount = 49';
        assert.equal(act, exp);
    });
});
describe("is this number (a) justNumber", () => {
    it(`test justNumber(1)`, function () {
        const act = justNumber(1);
        const exp = ' true ';
        assert.equal(act, exp);
    });
    it(`test justNumber(11)`, function () {
        const act = justNumber(11);
        const exp = ' true ';
        assert.equal(act, exp);
    });
    it(`test justNumber(10)`, function () {
        const act = justNumber(10);
        const exp = ' false ';
        assert.equal(act, exp);
    });
    it(`test justNumber(-10)`, function () {
        const act = justNumber(-10);
        const exp = ' false ';
        assert.equal(act, exp);
    });
    it(`test justNumber(0)`, function () {
        const act = justNumber(0);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test justNumber('test')`, function () {
        const act = justNumber("test");
        const exp = false;
        assert.isFalse(act);
    });
});
describe("tets  sqRound(a) ", () => {
    it(`test sqRound(9)`, function () {
        const act = sqRound(9);
        const exp = 3;
        assert.equal(act, exp);
    });
    it(`test sqRound(10)`, function () {
        const act = sqRound(10);
        const exp = 3;
        assert.equal(act, exp);
    });
    it(`test sqRound(1)`, function () {
        const act = sqRound(1);
        const exp = 1;
        assert.equal(act, exp);
    });
    it(`test sqRound(0)`, function () {
        const act = sqRound(0);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test sqRound(-9)`, function () {
        const act = sqRound(-9);
        const exp = false;
        assert.isFalse(act);
    });
    it(`test sqRound(test)`, function () {
        const act = sqRound('test');
        const exp = false;
        assert.isFalse(act);
    });
});
describe("tets  factorial(a) ", () => {
    it(`test factorial(3)`, function () {
        const act = factorial(3);
        const exp = 6;
        assert.equal(act, exp);
    });
    it(`test factorial(0)`, function () {
        const act = factorial(0);
        const exp = 0;
        assert.equal(act, exp);
    });
    it(`test factorial(test)`, function () {
        const act = factorial('test');
        const exp = 0;
        assert.equal(act, exp);
    });
    it(`test factorial(-3)`, function () {
        const act = factorial(-3);
        const exp = false;
        assert.isFalse(act);
    });


});
describe("tests  sumOfSign(a) ", () => {
    it(`test sumOfSign(3)`, function () {
        const act = sumOfSign(3);
        const exp = 3;
        assert.equal(act, exp);
    });
    it(`test sumOfSign(333)`, function () {
        const act = sumOfSign(333);
        const exp = 9;
        assert.equal(act, exp);
    });
    it(`test sumOfSign(-333)`, function () {
        const act = sumOfSign(-333);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test sumOfSign(0)`, function () {
        const act = sumOfSign(0);
        const exp = 0;
        assert.equal(act, exp);
    });
    it(`test sumOfSign(-1)`, function () {
        const act = sumOfSign(-1);
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("tests  mirror(a) ", () => {
    it(`test sumOfSign(12345)`, function () {
        const act = mirror(12345);
        const exp = 54321;
        assert.equal(act, exp);
    });
    it(`test sumOfSign(0)`, function () {
        const act = mirror(0);
        const exp = 0;
        assert.equal(act, exp);
    });
    it(`test sumOfSign(-1)`, function () {
        const act = mirror(-1);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test sumOfSign("test")`, function () {
        const act = mirror("test");
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  mirror(a) ", () => {
    it(`test sumOfSign(12345)`, function () {
        const act = mirror(12345);
        const exp = 54321;
        assert.equal(act, exp);
    });
});
describe("tests  minFromArray ", () => {
    it(`test minFromArray int`, function () {
        const act = minFromArray([5, 1, 100, 2, 3]);
        const exp = 1;
        assert.equal(act, exp);
    });
    it(`test minFromArray empty`, function () {
        const act = minFromArray([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test minFromArray int & string`, function () {
        const act = minFromArray([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  maxFromArray ", () => {
    it(`test maxFromArray int`, function () {
        const act = maxFromArray([5, 1, 100, 2, 3]);
        const exp = 100;
        assert.equal(act, exp);
    });
    it(`test maxFromArray empty`, function () {
        const act = maxFromArray([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test maxFromArray int & string`, function () {
        const act = maxFromArray([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  indexOfMinFromArray ", () => {
    it(`test indexOfMinFromArray int`, function () {
        const act = indexOfMinFromArray([5, 1, 100, 2, 3]);
        const exp = 1;
        assert.equal(act, exp);
    });
    it(`test indexOfMinFromArray empty`, function () {
        const act = indexOfMinFromArray([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test indexOfMinFromArray int & string`, function () {
        const act = indexOfMinFromArray([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  indexOfMaxFromArray ", () => {
    it(`test indexOfMaxFromArray int`, function () {
        const act = indexOfMaxFromArray([5, 1, 100, 2, 3]);
        const exp = 2;
        assert.equal(act, exp);
    });
    it(`test indexOfMaxFromArray empty`, function () {
        const act = indexOfMaxFromArray([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test indexOfMinFromArray int & string`, function () {
        const act = indexOfMaxFromArray([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  indexOfMinFromArray ", () => {
    it(`test indexOfMinFromArray int`, function () {
        const act = indexOfMinFromArray([5, 1, 100, 2, 3]);
        const exp = 1;
        assert.equal(act, exp);
    });
    it(`test indexOfMinFromArray empty`, function () {
        const act = indexOfMinFromArray([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test indexOfMinFromArray int & string`, function () {
        const act = indexOfMinFromArray([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  sumOfUnevenFromArray ", () => {
    it(`test sumOfUneven int`, function () {
        const act = sumOfUneven([5, 1, 100, 2, 3]);
        const exp = 3;
        assert.equal(act, exp);
    });
    it(`test sumOfUneven empty`, function () {
        const act = sumOfUneven([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test sumOfUneven int & string`, function () {
        const act = sumOfUneven([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  reversArray ", () => {
    it(`test reversArray int`, function () {
        const act = reversArray([1,2,3,4,5]);
        const exp = [5,4,3,2,1];
        assert.deepEqual(act, exp);
    });
    it(`test reversArray empty`, function () {
        const act = reversArray([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test reversArray int & string`, function () {
        const act = reversArray([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  sumOfUnevenFromArray ", () => {
    it(`test sumOfUneven int`, function () {
        const act = sumOfUneven([5, 1, 100, 2, 3]);
        const exp = 3;
        assert.equal(act, exp);
    });
    it(`test sumOfUneven empty`, function () {
        const act = sumOfUneven([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test sumOfUneven int & string`, function () {
        const act = sumOfUneven([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  unevenFromArray ", () => {
    it(`test sumOfUneven int`, function () {
        const act = uneven([5, 1, 100, 2, 3]);
        const exp = 3;
        assert.equal(act, exp);
    });
    it(`test sumOfUneven empty`, function () {
        const act = uneven([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test sumOfUneven int & string`, function () {
        const act = uneven([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  changeHalfsArray ", () => {
    it(`test changeHalfs even int`, function () {
        const act = changeHalfs([1,2,3,4,5,6]);
        const exp = [4,5,6,1,2,3];
        assert.equal(act, exp);
    });
    it(`test changeHalfs uneven int`, function () {
        const act = changeHalfs([1,2,3,4,5]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test changeHalfs empty`, function () {
        const act = changeHalfs([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test changeHalfs int & string`, function () {
        const act = changeHalfs([1, 2, 3, 'a']);
        const exp = [3,'a',1,2];
        assert.equal(act, exp);
    });

});
describe("tests  sortBubbleArray ", () => {
    it(`test sortBubble even int`, function () {
        const act = sortBubble([4,5,6,1,2,3]);
        const exp = [1,2,3,4,5,6];
        assert.equal(act, exp);
    });
    it(`test sortBubble uneven int`, function () {
        const act = sortBubble([5,4,1,2,3]);
        const exp = [1,2,3,4,5];
        assert.equal(act, exp);
    });
    it(`test sortBubble empty`, function () {
        const act = sortBubble([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test sortBubble int & string`, function () {
        const act = sortBubble([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  sortSelectionArray ", () => {
    it(`test sortSelection even int`, function () {
        const act = sortSelection([4,5,6,1,2,3]);
        const exp = [1,2,3,4,5,6];
        assert.equal(act, exp);
    });
    it(`test sortSelection uneven int`, function () {
        const act = sortSelection([5,4,1,2,3]);
        const exp = [1,2,3,4,5];
        assert.equal(act, exp);
    });
    it(`test sortSelection empty`, function () {
        const act = sortSelection([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test sortSelection int & string`, function () {
        const act = sortSelection([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  sortSelectionArray ", () => {
    // it(`test sortInsert even int`, function () {
    //     const act = sortInsert([4,5,6,1,2,3]);
    //     const exp = [1,2,3,4,5,6];
    //     assert.equal(act, exp);
    // });
    // it(`test sortInsert uneven int`, function () {
    //     const act = sortInsert([5,4,1,2,3]);
    //     const exp = [1,2,3,4,5];
    //     assert.equal(act, exp);
    // });
    it(`test sortInsert empty`, function () {
        const act = sortInsert([]);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test sortInsert int & string`, function () {
        const act = sortInsert([1, 2, 3, 'a']);
        const exp = false;
        assert.equal(act, exp);
    });

});
describe("tests  dayOfWeek(dayIndex) ", () => {
    it(`test dayOfWeek(int)`, function () {
        const act = dayOfWeek(2);
        const exp = "Wednesday";
        assert.equal(act, exp);
    });
    it(`test dayOfWeek(int)`, function () {
        const act = dayOfWeek(6);
        const exp = "Sunday";
        assert.equal(act, exp);
    });
    it(`test dayOfWeek(int)`, function () {
        const act = dayOfWeek(0);
        const exp = "Monday";
        assert.equal(act, exp);
    });
    it(`test dayOfWeek(string)`, function () {
        const act = dayOfWeek('a');
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test dayOfWeek(8)`, function () {
        const act = dayOfWeek(8);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test dayOfWeek(-8)`, function () {
        const act = dayOfWeek(-8);
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("tests  numberToWord(num) ", () => {
    it(`test numberToWord(2int)`, function () {
        const act = numberToWord(11);
        const exp = 'eleven';
        assert.equal(act, exp);
    });
    it(`test numberToWord(2int)`, function () {
        const act = numberToWord(45);
        const exp = 'forty five';
        assert.equal(act, exp);
    });
    it(`test numberToWord(1int)`, function () {
        const act = numberToWord(5);
        const exp = 'five';
        assert.equal(act, exp);
    });
    it(`test numberToWord(3int)`, function () {
        const act = numberToWord(555);
        const exp = 'five hundred fifty five';
        assert.equal(act, exp);
    });
    it(`test numberToWord(0)`, function () {
        const act = numberToWord(0);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test numberToWord(-222)`, function () {
        const act = numberToWord(-222);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test numberToWord(1000)`, function () {
        const act = numberToWord(1000);
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("tests  wordToNumber(word)) ", () => {
    it(`test wordToNumber(2int)`, function () {
        const act = wordToNumber('eleven');
        const exp = 11;
        assert.equal(act, exp);
    });
    it(`test wordToNumber(2int)`, function () {
        const act = wordToNumber('forty five');
        const exp = 45;
        assert.equal(act, exp);
    });
    it(`test wordToNumber(1int)`, function () {
        const act = wordToNumber('five');
        const exp = 5;
        assert.equal(act, exp);
    });
    it(`test wordToNumber(3int)`, function () {
        const act = wordToNumber('five hundred fifty five');
        const exp = 555;
        assert.equal(act, exp);
    });
    it(`test wordToNumber(22)`, function () {
        const act = wordToNumber(22);
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test wordToNumber(0)`, function () {
        const act = wordToNumber("zero");
        const exp = false;
        assert.equal(act, exp);
    });
    it(`test wordToNumber(1000)`, function () {
        const act = wordToNumber("thousand");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("tests  distance(xa, ya, xb, yb) ", () => {
    it(`test distance(2,2,0,2)`, function () {
        const act = distance(2,2,0,2);
        const exp = 2;
        assert.equal(act, exp);
    });
    it(`test distance(2,2,2,2)`, function () {
        const act = distance(2,2,2,2);
        const exp = 0;
        assert.equal(act, exp);
    });
    it(`test distance(a,2,2,2)`, function () {
        const act = distance('a',2,2,2);
        const exp = false;
        assert.equal(act, exp);
    });


});
