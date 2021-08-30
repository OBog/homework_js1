/* 1. Создайте переменную a и присвойте ей значение 3. Выведите значение этой переменной на экран.*/
var a = 3;

console.log('1. значение переменной a: '+a);
document.getElementById("1data").innerHTML=a;

/* 2. Создайте переменные a = 10 и b = 2. Выведите на экран их сумму, разность, произведение и частное (результат деления).*/
var a = 10;
var b = 2;

console.log('2_1. сумма a и b: '+ (a+b));
console.log('2_2. разность a и b: '+ (a-b));
console.log('2_3. произведение a и b: '+ (a*b));
console.log('2_4. частное a и b: '+ (a/b));
document.getElementById("2_1data").innerHTML=a+b;
document.getElementById("2_2data").innerHTML=a-b;
document.getElementById("2_3data").innerHTML=a*b;
document.getElementById("2_4data").innerHTML=a/b;

/* 3. Создайте переменные c = 15 и d = 2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.*/
var c = 15;
var d = 2;
var result = c+d;

console.log('3. значение переменной result: '+ result);
document.getElementById("3data").innerHTML=result;

/* 4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.*/
var a = 10;
var b = 2;
var c = 5;

console.log('4. сумма a, b и c: '+ (a + b +c));
document.getElementById("4data").innerHTML=a + b +c;

/* 5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7.
Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.*/
var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c+d;

console.log('5. значение переменной result: '+ result);
document.getElementById("5data").innerHTML=result;

/* 6. Создайте переменную text и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.*/
var text = 'Привет, Мир!';

console.log('6. значение переменной text: '+ text);
document.getElementById("6data").innerHTML=text;

/* 7. Создайте переменные text1 = 'Привет, ' и text2 = 'Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.*/
var text1 = 'Привет, ';
var text2 = 'Мир!';

console.log('7. значение переменных text1 + text2: '+ text1 + text2);
document.getElementById("7data").innerHTML=text1 + text2;

/* 8. Создайте переменную text и присвойте ей значение 'Привет, Мир!'. Выведите слово ‘Мир' используя эту переменную.*/
var text = 'Привет, Мир!';

console.log('8. Выведите слово ‘Мир\' используя переменную text: '+ text.substr(8,3));
document.getElementById("8data").innerHTML=text.substr(8,3);


/* 9. Напишите скрипт, который считает количество секунд в часе, сутках, неделе, месяце из 30 дней.*/
const min = 60;
var hour = 60*min;
var day = 24*hour;
var week = 7*day;
var month = 30*day;

console.log('9_1. количество секунд в часе: '+ hour +' сек');
console.log('9_2. количество секунд в сутках: '+ day +' сек');
console.log('9_3. количество секунд в неделе: '+ week +' сек');
console.log('9_4. количество секунд в месяце из 30 дней: '+ month +' сек');
document.getElementById("9_1data").innerHTML=hour;
document.getElementById("9_2data").innerHTML=day;
document.getElementById("9_3data").innerHTML=week;
document.getElementById("9_4data").innerHTML=month;

/* 10. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться! Код для переделки:
• let num = 1;
• num = num + 12;
• num = num - 14;
• num = num * 5;
• num = num / 7;
• num = num + 1;
• num = num - 1;*/

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
console.log(num);
document.getElementById("10data").innerHTML=num;

/* 11. Создайте три переменные - час, минуты, секунды. С их помощью выведите текущее время в формате 'час:минуты:секунды'.*/
var now = new Date();
var minute = now.getMinutes();
var hour = now.getHours();
var sec = now.getSeconds();

console.log('11. выведите текущее время в формате час:минуты:секунды : '+ hour+':'+minute+':'+sec);
document.getElementById("11data").innerHTML=hour+':'+minute+':'+sec;

/* 12. Переделайте этот код так, чтобы в нем использовалась операция +=. Количество строк кода при этом не должно измениться!
• let text = 'Я';
• text = text +' хочу' ;
• text = text +' знать' ;
• text = text +' JS!' ;
• console.log(text)*/

let text12 = 'Я';
text12 +=' хочу' ;
text12 +=' знать' ;
text12 +=' JS!' ;
console.log(text12);Ларнака, Кипр
document.getElementById("12data").innerHTML=text12;

/* 13. Даны два числа. Найти их сумму и произведение.*/
var a = 10;
var b = 2;

console.log('13_1. сумма a и b: '+ (a+b));
console.log('13_2. произведение a и b: '+ (a*b));
document.getElementById("13_1data").innerHTML=a+b;
document.getElementById("13_2data").innerHTML=a*b;

/* 14. Даны два числа. Найдите сумму их квадратов.*/
var a = 10;
var b = 2;

console.log('14. сумма квадратов a и b: '+ ((a**2)+(b**2)));
document.getElementById("14data").innerHTML=(a**2)+(b**2);

/* 15. Даны три числа. Найдите их среднее арифметическое.*/
var a = 10;
var b = 2;
var c = 15;

console.log('15. среднее арифметическое a,b и с: '+ ((a+b+c)/3));
document.getElementById("15data").innerHTML=((a+b+c)/3);

/* 16. Даны три числа x,y и z. Найдите (x+1)−2(z−2x+y)*/
var x = 3;
var y = 2;
var z = 10;

console.log('16. Найдите (x+1)−2(z−2x+y) : '+ ((x+1) - 2*(z-2*x+y)));
document.getElementById("16data").innerHTML=((x+1) - 2*(z-2*x+y));

/* 17. Дано натуральное числа. Найдите остатки от деления этих чисел на 3 и на 5. Дано число. Увеличьте его на 30%, на 120%.*/
var number = 9;

console.log('17_1. остаток от деления этого числа на 3: '+ number%3);
console.log('17_2. остаток от деления этого числа на 5:  '+ number%5);
console.log('17_3. Увеличьте число на 30%: '+ (number + number/100*30));
console.log('17_4. Увеличьте число на 120%: '+ (number + number/100*120));
document.getElementById("17_1data").innerHTML=number%3;
document.getElementById("17_2data").innerHTML=number%5;
document.getElementById("17_3data").innerHTML=(number + number/100*30);
document.getElementById("17_4data").innerHTML=(number + number/100*120);


/* 18. 3 > 2 ? 'сдал экзамен' : 'не сдал экзамен’; По этому примеру реализуй три задачи
• тебе есть 18 лет
• есть ли у тебя загран паспорт
• есть ли тебе 16*/
var age = 20;
var pass = true;

(age == 18) ? console.log("18_1. You're adult"): console.log("18_1. You're too old or too young") ;
(pass == true) ? console.log("18_2. Go on vacation"): console.log('18_2. No pasaran!') ;
(age > 16) ? console.log("18_3. You're adult"): console.log('18_3. No pasaran!') ;

document.getElementById("18_1data").innerHTML= ((age == 18) ? " You're adult" : " You're too old or too young") ;
document.getElementById("18_2data").innerHTML= ((pass == true) ? " Go on vacation" : " No pasaran!") ;
document.getElementById("18_3data").innerHTML= ((age > 16)  ? " You're adult" : "No pasaran!") ;

/* 19. Задача деление по модулю: определить какое число четное или не четное. Реализовать через тернарную операцию.*/

var number = 21;

console.log("19. Определить какое число четное или не четное. Реализовать через тернарную операцию.");
(number % 2 == 0) ? console.log(" Number is even"): console.log("Number is odd") ;
document.getElementById("19data").innerHTML=((number % 2 == 0) ? "Number is even" : "Number is odd");

/* 20. Создайте массив orders с несколькими элементами в формате “название товара: цена”. Добавьте в него один элемент в начало и в конец. Выведите все элементы массива на экран.*/

var orders = [
    ["Twix", 25],
    ["Baunty", 24],
    ["Mars", 16]
];
orders.unshift(['Snikers',17]);
orders.push(['Lion',17]);

console.log("20. Создайте массив orders с несколькими элементами в формате “название товара: цена”. Добавьте в него один элемент в начало и в конец. Выведите все элементы массива на экран.:" +orders);
document.getElementById("20data").innerHTML=orders;

/* 21. Создайте массив с пятью элементами. Удалите второй и четвертый элемент. Выведите все элементы массива.*/
var numb = ["One","Two","Three","Four","Five"];

numb.splice(0,1);
numb.splice(2,1);

console.log("21. Создайте массив с пятью элементами. Удалите второй и четвертый элемент. Выведите все элементы массива."+numb);
document.getElementById("21data").innerHTML=numb;

/* 22. Создайте массив с несколькими элементами. Выведите все четные элементы массива.*/
var numb22 = ["Zero","One","Two","Three","Four","Five"];
let str=" ";

for (let key in numb22) {
    if (key%2==0){
        console.log(numb22[key]);
        str = str + key+' - '+numb22[key]+'<br>';
    }
    document.getElementById("22data").innerHTML=str;
}

/* 23. Создайте массив с несколькими числами, используя цикл найдите максимальное число в массиве.*/

var numb23 = [1,3,5,10,12,-13,0];

let max = null;
for (let key in numb23) {
        if(numb23[key] > max || max === null)
        {
            max = numb23[key];
        }
    }
console.log('23. Создайте массив с несколькими числами, используя цикл найдите максимальное число в массиве. : '+ max);
document.getElementById("23data").innerHTML=max;

/* 24. Создайте два массива с числами одинаковой длины, сравните элементы одного массива с элементами другого.*/
var a1 = [1,2,3];
var a2 = [1,3,3];
var a3=[];

for (let i = 0; i < a1.length; i++) {
    (a1[i]==a2[i]) ? a3.push("true") : a3.push("false") ;``
}
console.log("24. Создайте два массива с числами одинаковой длины, сравните элементы одного массива с элементами другого.: " +a3);
document.getElementById("24data").innerHTML=a3;


/* 25. Создайте массив со строками ‘Я хочу знать JS’ и ‘Я не хочу знать JS’. Используя поиск по строке удалите из него элемент ‘Я не хочу знать JS’.*/
var a1 = ['Я хочу знать JS','Я не хочу знать JS'];
let str1 = "Я не хочу знать JS";
for (let key in a1) {
    if(a1[key] ==str1)
    {
        a1.splice(key,1);
    }
    console.log("25. Создайте массив со строками ‘Я хочу знать JS’ и ‘Я не хочу знать JS’. Используя поиск по строке удалите из него элемент ‘Я не хочу знать JS’." +a1);
    document.getElementById("25data").innerHTML=a1;
}








