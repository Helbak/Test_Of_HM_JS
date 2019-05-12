//Если а – четное посчитать а*б, иначе а+б
function ab(a, b) {
    if (isNaN(a) || isNaN(b)|| a==0) {
        return false;}
    if (a %2==0)
        return a * b;
    else
        return a + b;
};

//Определить какой четверти принадлежит точка с координатами (х,у)
function whereIsPoint(x, y) {
if(x==0 && y==0){
    return 'center';
}
       if(isNaN(x) || isNaN(y) || x==0 || y==0 ){
            return false;
        }


    if (x > 0 && y > 0) {
        return 1;
    }
   if (x > 0 && y < 0) {
        return 2;
    }
   if (x < 0 && y < 0) {
        return 3;
    }
  if (x < 0 && y > 0) {
        return 4
    }
}

//Найти суммы только положительных из трех чисел
function sumOnlyPositive(a, b, c) {
    if(isNaN(a) || isNaN(b) || isNaN(c) ){
        return false;
    }
    if (a < 0)
        a = 0;
    if (b < 0)
        b = 0;
    if (c < 0)
        c = 0;
    return a + b + c;
}

// Посчитать выражение макс(а*б*с, а+б+с)+3
function sumFromMaxPlus3(a, b, c) {
    if(isNaN(a) || isNaN(b) || isNaN(c) ){
        return false;
    }
    return Math.max(a * b * c, a + b + c) + 3
}

//Написать программу определения оценки студента по его рейтингу, на основе
// следующих правил
function scoringOfStudent(a) {
    if(isNaN(a) || a<0 || a>100){
        return false;
    }
    if (a <= 100 && a >= 90)
        return ' A ';
    if (a >= 75 && a <= 89)
        return ' B ';
    if (a >= 60 && a <= 74)
        return ' C ';
    if (a >= 40 && a <= 59)
        return ' D ';
    if (a >= 20 && a <= 39)
        return ' E ';
    if (a >= 0 && a <= 19)
        return ' F ';

}

// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumAndAmount() {
    var sum = 0;
    var amount = 0;
    for (var i = 2; i <= 99; i = i + 2) {
        sum = sum + i;
        amount++;
        var res = 'sum =  ' + sum + ' amount = ' + amount;
    }
    return res;
}

// Проверить простое ли число?
function justNumber(a) {
    if (isNaN(a) ||  a==0) {
        return false;}
    var timesDiv = 0;
    for (i = 2; i <Math.abs(a); i++) {
        if (a % i == 0)
            timesDiv++;
    }
    if (timesDiv > 1)
        return ' false ';
    if (timesDiv == 0)
        return ' true ';
}

//Найти корень натурального числа с точностью до целого
function sqRound(a) {
    if (isNaN(a) ||  a<=0) {
        return false;}
    return Math.round(Math.sqrt(a));
}

//Вычислить факториал числа n.
function factorial(a) {
    if(a==0){
        return 0;
    }
    if (isNaN(a)||a<0) {
        return false;}
    var fac = 1;
    for (i = 1; i <= a; i++) {
        fac = fac * i;
    }
    return fac;
}

//Посчитать сумму цифр заданного числа
function sumOfSign(a) {
    if (isNaN(a)||a<0) {
        return false;}
    var sum = 0;
    output = [];
    aString = a.toString();

    for (var i = 0; i < aString.length; i++) {
        output.push(aString.charAt(i));
    }

    for (i = 0; i < output.length; i++) {

        sum = sum + Number(output[i]);
    }
    return sum;
}

//Вывести число, которое является зеркальным отображением последовательности
// цифр заданного числа
function mirror(a) {

    if (isNaN(a)||a < 0) {
        return false;}
    output = [];
    aString = a.toString();
    var res = "";
    if(aString.length>5){
        return false;
    }
    for (var i = 0; i < aString.length; i++) {
        output.push(aString.charAt(i));
    }
    for (i = output.length - 1; i >= 0; i--) {

        res = res + output[i];
    }
    var resNumber = Number(res);
    return resNumber;
}

// Найти минимальный элемент массива
function minFromArray(array) {

    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    var min = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] < min)
            min = array[i];
    }
    return min;
}

// Найти максимальный элемент массива
function maxFromArray(array) {
    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}

// 3. Найти индекс минимального элемента массива
function indexOfMinFromArray(array) {
    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    var min = array[0];
    var indexMin = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            indexMin = i;
        }
    }
    return indexMin;
}

// 4. Найти индекс максимального элемента массива
function indexOfMaxFromArray(array) {
    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    var max = array[0];
    var indexMax = 0;
    for (i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            indexMax = i;
        }
    }
    return indexMax;
}

// 5. Посчитать сумму элементов массива с нечетными индексами
function sumOfUneven(array2) {
    if(array2.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array2.length;i++){
        if(array2[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array2.length){
        return false;
    }
    var uneven = 0;
    for (i = 1; i < array2.length; i = i + 2) {
        uneven = uneven + array2[i];
    }
    return uneven;
}

// 6. Сделать реверс массива (массив в обратном направлении)
function reversArray(array) {
    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    rev = [];
    for (let i = 0; i < array.length; i++) {
        rev[i] = array[array.length-i-1];
    }

    return rev;
}

// 7. Посчитать количество нечетных элементов массива
function uneven(array) {
    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    var amount = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0)
            amount++;
    }
    return amount;
}

// 8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3
// 4, результат 3 4 1 2
function changeHalfs(array) {
    if(array.length==0 || array.length%2!=0){
        return false;
    }
    changedAr = [];
    for (i = array.length / 2; i < array.length; i++) {
        changedAr.push(array[i]);
    }
    for (i = 0; i <= array.length / 2 - 1; i++) {
        changedAr.push(array[i]);
    }
    // var res = '';
    // for (i = 0; i < changedAr.length; i++) {
    //     res = res + ', ' + changedAr[i];
    // }
    return changedAr.toString();
}

// 9. Отсортировать массив (пузырьком (Bubble),  вставками (Insert))
function sortBubble(array) {
    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    for (i = 0; i < array.length - 1; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array.toString()
}

// 9. Отсортировать массив  выбором (Select)

function sortSelection(array) {
    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    for (i = 0; i < array.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min])
                min = j;
        }
        var temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array.toString();
}

// 9. Отсортировать массив вставками (Insert))

function sortInsert(array) {
    if(array.length==0){
        return false;
    }
    let count=0;
    for(let i =0; i<array.length;i++){
        if(array[i]/0==Infinity){
            count++;
        }
    }
    if(count!=array.length){
        return false;
    }
    for (i = 1; i > array.length; i++) {
        var temp = array[i];
        var j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    return array.toString();
}

// 10. Отсортировать массив (Quick, Merge, Shell, Heap)

// Получить строковое название дня недели по номеру дня.
function dayOfWeek(dayIndex) {
    if (dayIndex < 0 ||  isNaN(dayIndex) ||dayIndex>6){
        return false;
    }
    return ["Monday", "Tuesday","Wednesday" , "Thursday", "Friday", "Saturday", "Sunday"][dayIndex];
}

// 2. Вводим число (0-999), получаем строку с прописью числа.
function numberToWord(a) {
    if (a <= 0 ||  isNaN(a) ||a>999){
        return false;
    }
    var word = String(a);
    var wordArr = word.split('');
    var oneArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var twoArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var threeArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var fourArr = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    if (wordArr.length == 1) {
        return oneArr[a - 1]
    }
    if (wordArr.length == 2 && wordArr[0] == 1) {
        return twoArr[wordArr[1]];
    }
    if (wordArr.length == 2 && wordArr[0] != 1 && wordArr[1] != 0) {
        var res = threeArr[wordArr[0] - 2] + ' ' + oneArr[wordArr[1] - 1];
        return res;
    }
    if (wordArr.length == 2 && wordArr[0] != 1 && wordArr[1] == 0) {
        return threeArr[wordArr[0] - 2];
    }
    if (wordArr.length == 3 && wordArr[1] != 1 && wordArr[1] != 0 && wordArr[2] != 0) {//123
        var res = fourArr[wordArr[0] - 1] + ' ' + threeArr[wordArr[1] - 2] + ' ' + oneArr[wordArr[2] - 1];
        return res;
    }
    if (wordArr.length == 3 && wordArr[1] != 1 && wordArr[1] != 0 && wordArr[2] == 0) {//120
        var res = fourArr[wordArr[0] - 1] + ' ' + threeArr[wordArr[1] - 2];
        return res;
    }
    if (wordArr.length == 3 && wordArr[1] == 0 && wordArr[2] == 0) {//900
        return fourArr[wordArr[0] - 1];
    }
    if (wordArr.length == 3 && wordArr[1] == 0 && wordArr[2] != 0) {//103
        var res = fourArr[wordArr[0] - 1] + ' ' + oneArr[wordArr[2] - 1];
        return res;
    }
}

// 3. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само
// число
function wordToNumber(word) {
    if(word!=String(word)||word/0==Infinity){
        return false;
    }
    var wordArr = word.split(' ');
    var oneArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var twoArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var threeArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var fourArr = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    if (wordArr.length == 1) {
        for (i = 0; i < oneArr.length; i++) {//One word
            if (oneArr[i] == wordArr[0])
                return i + 1;
        }
        for (i = 0; i < twoArr.length; i++) {
            if (twoArr[i] == wordArr[0]) {
                return i + 10;
            }
        }
        for (i = 0; i < threeArr.length; i++) {
            if (threeArr[i] == wordArr[0])
                return (i + 2) * 10;
        }
        return false;
    }
    if (wordArr.length == 2 && wordArr[1] == 'hundred') {
        for (i = 0; i < oneArr.length; i++) {
            if (oneArr[i] == wordArr[0]) {
                var res = String(i + 1) + '00';
                return Number(res);
            }
        }
    }
    if (wordArr.length == 2 && wordArr[1] != 'hundred') {
        var first;
        var second;
        for (i = 0; i < threeArr.length; i++) {
            if (threeArr[i] == wordArr[0])
                first = i + 2;
        }
        for (i = 0; i < oneArr.length; i++) {
            if (oneArr[i] == wordArr[1])
                second = i + 1;
        }
        var res = first + '' + second;
        return Number(res);
    }
    if (wordArr.length == 3) {
        var first;
        var second;
        for (i = 0; i < oneArr.length; i++) {
            if (oneArr[i] == wordArr[0]) {
                first = i + 1;
                for (i = 0; i < oneArr.length; i++) {//101
                    if (oneArr[i] == wordArr[2]) {
                        second = i + 1;
                        var res = first + '' + '0' + second;
                        return Number(res);
                    }
                }
                for (i = 0; i < twoArr.length; i++) {//111
                    if (twoArr[i] == wordArr[2]) {
                        second = i + 10;
                        var res = first + '' + second;
                        return Number(res);
                    }
                }
                for (i = 0; i < threeArr.length; i++) {//120
                    if (threeArr[i] == wordArr[2]) {
                        second = (i + 2) * 10;
                        var res = first + '' + second;
                        return Number(res);
                    }
                }
            }
        }
    }
    if (wordArr.length == 4) {
        var first;
        var second;
        var third;
        for (i = 0; i < oneArr.length; i++) {
            if (oneArr[i] == wordArr[0]) {
                first = i + 1;
            }
        }
        for (i = 0; i < threeArr.length; i++) {
            if (threeArr[i] == wordArr[2]) {
                second = (i + 2);
            }
        }
        for (i = 0; i < oneArr.length; i++) {
            if (oneArr[i] == wordArr[3]) {
                third = i + 1;
                var res = first + '' + second + '' + third;
                return Number(res);
            }
        }
    }
    return false;
}

// 4. Найти расстояние между двумя точками в двумерном декартовом пространстве.
function distance(xa, ya, xb, yb) {
    if (isNaN(xa) || isNaN(ya) || isNaN(xb) || isNaN(yb)) {
        return false;
    }
    var dist = Math.sqrt(Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2));
    return dist;
}

function init() {
    var array = [100, 5, 6, -7, 12, 15, 0, 3, -8, 9];
    //5, 6, -7, 12, 15, 0, 3, -8, 100, 9
    var array2 = [1, 1, 1, 1, 1];

    var res1 = ab(3, 10);
    var res2 = whereIsPoint(-1, 1);
    var res3 = sumOnlyPositive(3, -2, -2);
    console.log(res1, ', The point is lacated in the quart N - ', res2, ',  sum of numbers = ', res3, ', sumFromMaxPlus3 = '
        , sumFromMaxPlus3(1, 1, 1), ',  Estimation is -', scoringOfStudent(99), sumAndAmount(), justNumber(11112),
        ', sqRound = ', sqRound(10), ', factorial = ', factorial(6), ', Sum of numbers = ', sumOfSign(12342),
        ', mirror = ', mirror(12345), ', min from array = ', minFromArray(array), ', max from array = ', maxFromArray(array),
        ', index of min from array = ', indexOfMinFromArray(array), ', index of max from array = ', indexOfMaxFromArray(array),
        ' sumOfUneven numbers ', sumOfUneven(array2), ', last number of revers array = ', reversArray(array),
        ', amount of uneven =', uneven(array), ', change Halfs of array- ', changeHalfs(array), ', sort Bubble array- ',
        sortBubble(array), ', sort selection - ', sortSelection(array), 'sort insert - ', sortInsert(array),
        ', day of week(from 0 to 6) - ', dayOfWeek(6), ', numberToWord - ', numberToWord(909),
        ', word to number - ', wordToNumber('two hundred fifty four'), 'distance = ', distance(2, 4, 3, 6));

};
init();