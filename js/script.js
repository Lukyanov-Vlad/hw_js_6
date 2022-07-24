// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

console.log('Задание 1');
    let strTask1='aaa@bbb@ccc';
    let strNewTask1=strTask1.replace(/@/gi,'!');
    console.log(strNewTask1);
console.log('-----------------------------------------');

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

console.log('Задание 2');
    let dateTask2='2025-12-31';
    let dateNewTask2=dateTask2.replace(/(2025)-(12)-(31)/g,'$3/$2/$1');
    console.log(dateNewTask2);
console.log('-----------------------------------------');

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

console.log('Задание 3');
    let strTask3='Я учу javascript!';
    //1 substr
    let secondWord=strTask3.substr(2,3);
    let thirdWord=strTask3.substr(6,10);
    console.log(`Substr.Первое слово '${secondWord}', второе слово '${thirdWord}'`);
    //2 substring
    secondWord='';
    thirdWord='';
    secondWord=strTask3.substring(2,5);
    thirdWord=strTask3.substring(6,16);
    console.log(`Substring.Первое слово '${secondWord}', второе слово '${thirdWord}'`);
    //3 slice
    secondWord='';
    thirdWord='';
    secondWord=strTask3.slice(2,5);
    thirdWord=strTask3.slice(6,16);
    console.log(`Slice.Первое слово '${secondWord}', второе слово '${thirdWord}'`);
console.log('-----------------------------------------');

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

console.log('Задание 4');
    let arrTask4=[4,2,5,19,13,0,10];
    let summTask4=0;
    for(let i=0;i<arrTask4.length;i++){
        summTask4+=Math.pow(arrTask4[i],3);
    }
    console.log(summTask4);
    summTask4=Math.sqrt(summTask4);
    console.log(summTask4);
console.log('-----------------------------------------');

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

console.log('Задание 5');
    let a=+prompt('Введите число а');
    let b=+prompt('Введите число b');
    c=Math.abs(a-b);
    console.log(c);
console.log('-----------------------------------------');

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

console.log('Задание 6');
    const fTask6=function(date){
        if(date<10){
            date='0'+date;
            return date;
        }
        else {return date;}
    }
    
    let dateTask6=new Date(2022,7,1,1,1,1);
   
    let year=dateTask6.getFullYear();
    let    month=fTask6(+dateTask6.getMonth()+1);
    let    date=fTask6(+dateTask6.getDate()); 
    let    hour=fTask6(+dateTask6.getHours());
    let    minutes=fTask6(+dateTask6.getMinutes());
    let    seconds=fTask6(+dateTask6.getSeconds());
    

    let strDate=hour+':'+minutes+':'+seconds+' '+date+'.'+month+'.'+year;
    console.log(strDate);
  
console.log('-----------------------------------------');

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

console.log('Задание 7');
    let strTask7='aa aba abba abbba abca abea';
    console.log(strTask7.match(/a{1}b+a{1}/gi));
console.log('-----------------------------------------');

// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

console.log('Задание 8');
    //let tel='+375 33 588-89-95';
    let tel=prompt('Введите телефон');
    let exp=/\+[0-9]{3}\s[0-9]{2}\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}/gi;
    console.log(exp.test(tel));
console.log('-----------------------------------------');

// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.
// Функция должна возвращать true или false. Используйте регулярные
// выражения.

console.log('Задание 9');
    let emailTask9=prompt('Введите email');
   //let emailTask9='_sad123@bk.ru';
    let regexp=/^[A-Za-z][A-Za-z0-9\.\_\-]{2,}@[A-Za-z0-9\_\-]*\.[a-z]{2,11}/g;
    console.log(regexp.test(emailTask9));
console.log('-----------------------------------------');

// 10. Напишите ф-цию, которая из полного адреса с параметрами и без,
// например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
// доменного имени (https://tech.onliner.by), остальную часть адреса без
// параметров (/2018/04/26/smart-do-200/), параметры
// (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
// может и не быть каких-либо составляющих. Ф-ция должна возвращать
// массив.

console.log('Задание 10');
    const fTask10=function(path){
        let expTag=/^h[a-z]*\:\/\/.*\.\w*/;
        let domain=path.match(/^h[a-z]*\:\/\/.*\.\w*/);
        let adressWithoutPar;
        let param;
        let hash;
        switch (true){
            case path.indexOf('?')!==-1:
                adressWithoutPar=path.substr(domain.toString().length, path.indexOf('?')-domain.toString().length);
               
                if(path.indexOf('#')!==-1){
                    param=path.substr(path.indexOf('?')+1,(path.indexOf('#')-path.indexOf('?'))-1);
                    hash=path.match(/\#.*/);
                }else{
                    console.log(path[path.indexOf('?')+1]);
                    console.log((path.length)-path.indexOf('?'));
                    param=path.substr(path.indexOf('?')+1, path.length-path.indexOf('?'));
                    hash='Нет хэша';
                }
            break;
            case path.indexOf('#')!==-1:
                adressWithoutPar=path.substr(domain.toString().length, path.indexOf('#')-domain.toString().length);
                param='Нет параметров';
                hash=path.match(/\#.*/);
            break;
            default:
                adressWithoutPar=path.substr(domain.toString().length, path.length-domain.toString().length);
                param='Нет параметров';
                hash='Нет хэша';
            break;
        }
        
        adressWithoutPar.length<=1 ? adressWithoutPar='Нет параметров' : adressWithoutPar;
        
      
       
        return [domain,adressWithoutPar,param,hash]
    }
    let strTask10='https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
    strTask10=prompt('Введите адрес');
    arrayTask10=fTask10(strTask10);
    console.log(`Адрес доменного имени ${arrayTask10[0]}`);
    console.log(`Остальная часть адреса без параметров ${arrayTask10[1]}`);
    console.log(`Параметры ${arrayTask10[2]}`);
    console.log(`Хэш ${arrayTask10[3]}`);
console.log('-----------------------------------------');
