// 연습문제 1.
// 2단부터 9단까지 구구단표 출력
// for문, while문 출력
        let x, y;
		for(x=2;x<=9;x++) {
			for(y=1;y<=9;y++) {
				console.log(x + "*" + y + "=" + x*y);
			}
		}

        let i=2;
        let j=1;
        
        while(i<10) {
            j=1;
            console.log(i+"단 시작 : ");
            while(j<10) {
                console.log(i + "*" + j + "=" + (i*j) + "\t");
              j++;
            }
            console.log();
            i++;
        }

// 연습문제 2.
// 역삼각형 그리기
// *****
// ****
// ***
// **
// *  for문, while문 출력
//var line = 5;
//var result = "";

//for (let i = line; i >= 1; i--) {
//  for (let j = 1; j <= i; j++) {
//    result += "*";
//  }
//  result += "\n";
//}
for (let i = 0; i < 5; i++) {
    var result="";
    for (let j = 5; j > i; j--) {
      result += "*";
    }
    console.log(result);
  }


let star="";
let a=0;
while(a<5){
    a++;
    let j=0;
    while(j<6-a){
        j++
        star+="*";
 
    }
    star+="\n";
}
console.log(star);

// for ... in : 객체의 속성 키를 반복
const obj = {
  name: "홍길동",
  age: 28,
  job: "도적"
}

for (let key in obj){
  console.log(`${key} -> ${obj[key]}`);
}

// for ... of : 배열을 순회
const arr = [1, 2, 3, 4, 5];
for (let item of arr){
  console.log(item);
} 
  
  
  