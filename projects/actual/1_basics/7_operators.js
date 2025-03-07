/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log(10 * (10+10));
console.log('--------------');

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);
console.log('--------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number); // 1 2 출력됨

result = number --;
console.log(result, number); // 2 1 출력됨

result = ++ number; //그러나 이거 쓰지 마시오. 선임한테 뒷통수 맞을 수 있음
console.log(result, number); // 2 2 출력됨

result = -- number; //그러나 이거 쓰지 마시오. 선임한테 뒷통수 맞을 수 있음
console.log(result, number); // 1 1 출력됨
console.log('--------------');

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '99';

console.log(+sample); //숫자가 될 수 있는 string에 +를 붙이면
console.log(typeof +sample); //number가 출력됨

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample); //1 출력
console.log(typeof +sample); //number가 출력됨

sample = false;
console.log(+sample); //0 출력
console.log(typeof +sample); //number가 출력됨

console.log(sample);
console.log(typeof sample);

sample = '안유진';
console.log(+sample); //NaN 출력됨 (NaN -> Not a Number)

sample = '99'
console.log(-sample); //-99 출력됨
console.log(typeof -sample); //number 출력됨
console.log('--------------');

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10; //더해서 할당한다.
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number); //0 출력
console.log('--------------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교 (==, != 실무에서는 안 씀)
 * 2) 값과 타입의 비교 (===, !==)
 */
// 1) 값의 비교
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1'); //다 true
console.log('--------------');

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1'); //다 false
console.log('--------------');

// 2) 값과 타입의 비교
console.log(5 === 5); //true
console.log(5 === '5'); //아래 다 false 출력
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log('--------------');

console.log(5 !== 5); //false
console.log(5 !== '5'); //아래 다 true
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1'); //다 false
console.log('--------------');

/**
 * 대소 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 * 
 * ?를 사용
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
console.log('--------------');

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('--------------');

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('--------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('--------------');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * 외워야함!!!!!!
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

console.log(true || '아이브'); //true 반환
console.log(false || '아이브'); //'아이브' 반환
console.log(false && '아이브'); //false 반환
console.log(true && '아이브'); //'아이브' 반환

console.log(true && true && '아이브'); //'아이브' 반환
console.log(true && false && '아이브'); //false 반환
console.log('--------------');

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);
console.log('--------------');

/**
 * null 연산자
 * 
 * ??, ??=
 */
let name;
console.log(name); //undefined 출력

name = name ?? '코드팩토리';
console.log(name); //코드팩토리 출력

name = name ?? '아이브';
console.log(name); //코드팩토리 출력

let name2;
name2 ??= '코드팩토리';
console.log(name2);