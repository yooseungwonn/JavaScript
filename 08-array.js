// 배열의 생성 : 방법1, new 키워드
const v1 = new Array(10); // 10개짜리 배열
const v2 = new Array();   // 빈 배열
const v3 = new Array(2024, "String", true); // 초기값이 있을 때, 어떤 객체들(함수도) 다 들어간다.

console.log(v1, v1.length, typeof v1);
console.log(v2, v2.length, typeof v2);
console.log(v3, v3.length, typeof v3);

// 배열의 생성 : 방법2, literal로 생성 -> 추천
const v4 = []; // = new Array();
const v5 = ["red", "green", "blue", "yellow"]; // = new Array("red", "green", "blue", "yellow");

console.log(v4, v4.length);
console.log(v5, v5.length);

// ES 특성상 변수가 참조하는 객체의 type 체크가 필요
console.log(typeof v5);

// 주로 Array 판별 함수를 이용, 배열 여부를 판단
console.log("is v5 Array?", Array.isArray(v5));

// ES의 경우 객체 속성도 배열(맵)처럼 사용할 수 있음
const person = {   
    name: "홍길동",
    age: 28
};
console.log(person.name, person.age);        
console.log(person['name'], person['age']); // 객체의 속성을 배열처럼

// ES 배열은 인덱스 범위를 엄격하게 체크하지 않음
// 인덱스 범위를 벗어난 접근도 허용함

const v6 = [];
console.log(v6, v6.length);
v6[10] = 2024;

console.log(v6, v6.length);

console.log("========================주요 메서드");
// 합치기 : concat
const veges = ['배추', '무','쪽파'];
console.log(veges, veges.length);
const sources = ['소금','고춧가루','새우젓'];
console.log(sources, sources.length);
const ingr = veges.concat(sources);
console.log(ingr, ingr.length);

// join : 배열 내부의 요소(아이템)를 한 문장으로 합침
console.log(ingr, "-> 김장 재료: " + ingr.join(", "));
const veges2 = ['배추','무','쪽파'];
const sources2 = ['소금','고춧가루','새우젓'];
const ingredients2 = veges.concat(sources);
console.log("김장 재료: " + ingredients2.join(", "));

// push, pop -> Stack 자료형처럼 활용 가능
// Stsck : Last Input First Output (LIFO 자료형)
let fruits = [];
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);
// 인출 -> pop  -> 배열의 뒤에서
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);

// push, shift -> queue 자료형처럼 활용 가능 
// queue : First Input First Output (FIFO 자료형)
console.log(fruits);
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carrot"), fruits);
// shift : 배열의 첫번째 요소를 인출, 삭제
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);

// splice : 배열 요소 인출 후 삭제, 추가를 동시에 할 수 있는 메서드
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
// 인수가 1개 -> 시작인덱스, 끝까지 추출
console.log(fruits.splice(2));
console.log(fruits);

fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
// 인수가 2개 -> 시작인덱스, 갯수
console.log(fruits.splice(2, 1));
console.log(fruits);

fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
// 인수가 3개 이상 -> 시작인덱스, 갯수, 추가할 요소들
console.log(fruits.splice(2, 1, "Kiwi", "Mango"));
console.log(fruits);

// reverse, slice
// reverse : 순서 반전
fruits = ["Apple", "Banana", "Carrot", "Durian"];
console.log(fruits);
fruits.reverse();
console.log(fruits);

// slice : 배열의 요소를 추출 -> 새 배열로
console.log(fruits);
let slice = fruits.slice(1, 2); // 원본 배열은 유지
console.log(slice);
console.log(fruits);

// split : 구분자를 기준으로 문자열을 분리 -> 배열로 생성
const str = "JavaScript is something strange than other languages";
let chunks = str.split(" "); // 공백을 기준으로 분리
console.log(chunks);

for (let i = 0; i < chunks.length; i++) {
    console.log("Chunk", i, ":" + chunks[i]);
    }

console.log("=====================sort");
fruits = ["Apple", "Banana", "Carrot", "Durian", "Mango", "Kiwi"];
console.log("원본 배열:", fruits);
fruits.sort(); // 정렬 -> 오름차순
console.log("오름차수 정렬:" ,fruits);

// 정렬 규칙을 정하고자 할 때 : 정렬 기준 함수 배개변수로 전달 해줘야 함
fruits = ["Banana", "Apple", "Durian", "Carrot", "Mango", "Kiwi"];
console.log("원본 배열:", fruits);

fruits.sort((v1, v2) => {
    // 키 함수 : 두개 요소의 선후 관계 결정해 줌
    // 리턴값
    //     음수 : -> v1이 앞에 온다
    //     양수 : -> v1이 뒤에 온다(v2가 앞에 온다)
    //      0  : -> 순서 안 바꿈 (순위가 같다)
        if (v1 < v2) return 1;
        if (v1 > v2) return -1;
        if (v1 == v2) return 0;
}); 
console.log(fruits);

fruits.sort((v1, v2) => {
    return v2.length - v1.length;
});
console.log("문자열 길이로 소팅:" ,fruits);

