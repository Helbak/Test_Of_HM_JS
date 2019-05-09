// if (a < 0 || b > 10500 || isNaN(a) || isNaN(b)|| a+b>999999) {
//     return false;
describe(" tests a+b or a*b", () => {
    it(`test value 5 and 2`, function () {
        const act = ab(5, 2);
        const exp = 7;
        assert.equal(act,exp);
    });
    it(`test value 2 and 5`, function () {
        const act = ab(2, 5);
        const exp = 10;
        assert.equal(act,exp);
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
        assert.equal(act,exp);
    });
    it(`test whereIsPoint(2, -2)`, function () {
        const act = whereIsPoint(2, -2);
        const exp = 2;
        assert.equal(act,exp);
    });
    it(`test whereIsPoint(-2, -2)`, function () {
        const act = whereIsPoint(-2, -2);
        const exp = 3;
        assert.equal(act,exp);
    });
    it(`test whereIsPoint(-2, 2)`, function () {
        const act = whereIsPoint(-2, 2);
        const exp = 4;
        assert.equal(act,exp);
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
        assert.equal(act,exp);
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
    //sumOnlyPositive(a, b, c)
describe(" sumOnlyPositive(a, b, c)", () => {

    it(`test sumOnlyPositive(2,2,2)`, function () {
        const act = sumOnlyPositive(2, 2, 2);
        const exp = 6;
        assert.equal(act,exp);
    });
    it(`test sumOnlyPositive(-2,2,2)`, function () {
        const act = sumOnlyPositive(-2, 2, 2);
        const exp = 4;
        assert.equal(act,exp);
    });
    it(`test sumOnlyPositive(-2,-2,2)`, function () {
        const act = sumOnlyPositive(-2, -2, 2);
        const exp = 2;
        assert.equal(act,exp);
    });
    it(`test sumOnlyPositive(-2,-2,-2)`, function () {
        const act = sumOnlyPositive(-2, -2, -2);
        const exp = 0;
        assert.equal(act,exp);
    });
    const mock1 = [0, -5, 10, -100, 1000, -10500];
    const mock2 = [0, 5, -10, 100, -1000, 10500];
    const mock3 = [0, -5, 10, -100, 1000, -10500];
    for (let i = 0; i < mock1.length; i++) {
        var value1=0;
        var value2=0;
        var value3=0;

if(mock1[i]>0){
         value1 = mock1[i];}
        if(mock2[i]>0){
         value2 = mock2[i];}
        if(mock3[i]>0){
         value3 = mock3[i];}
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
        assert.equal(act,exp);
    });
    it(`test sumFromMaxPlus3(a, b, c)`, function () {
        const act = sumFromMaxPlus3(-2, 2, 2);
        const exp = 5;
        assert.equal(act,exp);
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
    //scoringOfStudent(a)

describe(" scoringOfStudent(a)", () => {

    it(`test scoringOfStudent(0)`, function () {
        const act = scoringOfStudent(0);
        const exp = ' F ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(9))`, function () {
        const act = scoringOfStudent(9);
        const exp = ' F ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(19))`, function () {
        const act = scoringOfStudent(19);
        const exp = ' F ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(20))`, function () {
        const act = scoringOfStudent(20);
        const exp = ' E ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(30))`, function () {
        const act = scoringOfStudent(30);
        const exp = ' E ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(39))`, function () {
        const act = scoringOfStudent(39);
        const exp = ' E ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(40))`, function () {
        const act = scoringOfStudent(40);
        const exp = ' D ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(50))`, function () {
        const act = scoringOfStudent(50);
        const exp = ' D ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(59))`, function () {
        const act = scoringOfStudent(59);
        const exp = ' D ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(60))`, function () {
        const act = scoringOfStudent(60);
        const exp = ' C ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(70))`, function () {
        const act = scoringOfStudent(70);
        const exp = ' C ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(74))`, function () {
        const act = scoringOfStudent(74);
        const exp = ' C ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(75))`, function () {
        const act = scoringOfStudent(75);
        const exp = ' B ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(85))`, function () {
        const act = scoringOfStudent(85);
        const exp = ' B ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(89))`, function () {
        const act = scoringOfStudent(89);
        const exp = ' B ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(90))`, function () {
        const act = scoringOfStudent(90);
        const exp = ' A ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(95))`, function () {
        const act = scoringOfStudent(95);
        const exp = ' A ';
        assert.equal(act,exp);
    });
    it(`test scoringOfStudent(100))`, function () {
        const act = scoringOfStudent(100);
        const exp = ' A ';
        assert.equal(act,exp);
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
        assert.equal(act,exp);
    });
    it(`test sumAndAmount(2)`, function () {
        const act = sumAndAmount(2);
        // const exp = false;
        // assert.isFalse(act);
        const exp = 'sum =  2450 amount = 49';
        assert.equal(act,exp);
    });
    it(`test sumAndAmount(test)`, function () {
        const act = sumAndAmount('test');
        // const exp = false;
        // assert.isFalse(act);
        const exp = 'sum =  2450 amount = 49';
        assert.equal(act,exp);
    });
});

describe("is this number (a) justNumber", () => {
    it(`test justNumber(1)`, function () {
        const act = justNumber(1);
        const exp = ' true ';
        assert.equal(act,exp);
    });
    it(`test justNumber(11)`, function () {
        const act = justNumber(11);
        const exp = ' true ';
        assert.equal(act,exp);
    });
    it(`test justNumber(10)`, function () {
        const act = justNumber(10);
        const exp = ' false ';
        assert.equal(act,exp);
    });
    it(`test justNumber(-10)`, function () {
        const act = justNumber(-10);
        const exp = ' false ';
        assert.equal(act,exp);
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
        assert.equal(act,exp);
    });
    it(`test sqRound(10)`, function () {
        const act = sqRound(10);
        const exp = 3;
        assert.equal(act,exp);
    });
    it(`test sqRound(1)`, function () {
        const act = sqRound(1);
        const exp = 1;
        assert.equal(act,exp);
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
        assert.equal(act,exp);
    });
    it(`test factorial(0)`, function () {
        const act = factorial(0);
        const exp = 0;
        assert.equal(act,exp);
    });
    it(`test factorial(test)`, function () {
        const act = factorial('test');
        const exp = 0;
        assert.equal(act,exp);
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
        assert.equal(act,exp);
    });
    it(`test sumOfSign(333)`, function () {
        const act = sumOfSign(333);
        const exp = 9;
        assert.equal(act,exp);
    });
    it(`test sumOfSign(-333)`, function () {
        const act = sumOfSign(-333);
        const exp = false;
        assert.equal(act,exp);
    });
    it(`test sumOfSign(0)`, function () {
        const act = sumOfSign(0);
        const exp = 0;
        assert.equal(act,exp);
    });
    it(`test sumOfSign(-1)`, function () {
        const act = sumOfSign(-1);
        const exp = false;
        assert.equal(act,exp);
    });
});

describe("tests  mirror(a) ", () => {
    it(`test sumOfSign(12345)`, function () {
        const act = mirror(12345);
        const exp = 54321;
        assert.equal(act,exp);
    });
    it(`test sumOfSign(0)`, function () {
        const act = mirror(0);
        const exp = 0;
        assert.equal(act,exp);
    });
    it(`test sumOfSign(-1)`, function () {
        const act = mirror(-1);
        const exp = false;
        assert.equal(act,exp);
    });
    it(`test sumOfSign("test")`, function () {
        const act = mirror("test");
        const exp = false;
        assert.equal(act,exp);
    });


});