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

    it(`test scoringOfStudent(a))`, function () {
        const act = scoringOfStudent(2);
        const exp = 11;
        assert.equal(act,exp);
    });




});

    // const mock1 = [0, 5, 10, 100, 1000, 10500];
    // const mock2 = [0, 5, 10, 100, 1000, 10500];
    //
    // for (let i = 0; i < mock1.length-1; i++) {
    //
    //     const value1 = mock1[i];
    //     const value2 = mock2[i];
    //
    //     it(`test value ${value1} value2 ${value2}`, function () {
    //         const act = calculate(value1, value2);
    //         const exp = value1 + value2;
    //
    //         assert.equal(act, exp);
    //     });
    // }
    //
    // it('test value -1, and 5', function () {
    //     const act = calculate(-1, 5);
    //     const exp = false;
    //
    //     assert.isFalse(act);
    // });
    //
    // it('test value 1, and 10501', function () {
    //     const act = calculate(1, 10501);
    //
    //
    //     assert.isFalse(act);
    // });
    // it('test first arg NaN',  () => {
    //     const act = calculate("test", 5);
    //
    //
    //     assert.isFalse(act);
    // });
    //
    // it('test first arg NaN',  () => {
    //     const act = calculate(4, "test");
    //
    //
    //     assert.isFalse(act);
    // });
    //
    // it('test first arg NaN',  () => {
    //     const act = calculate("test", "test");
    //
    //
    //     assert.isFalse(act);
    // });
    //
    // it('test first & second undefind', () => {
    //     const act = calculate();
    //
    //     assert.isFalse(act);
    // })
    // it('test sum > 999999', function () {
    //     const act = calculate(999999, 1);
    //     const exp = false;
    //
    //     assert.isFalse(act);
    // });






// describe("multi tests", () => {
//     it(`test value 4 and 2`, function () {
//         const act = divide(4, 2);
//         const exp = 8;
//         assert.equal(act,exp);
//     });
//
//
//
// });

