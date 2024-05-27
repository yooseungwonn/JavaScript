// forEach : 배열 내부 요소들을 하나씩 추출, 콜백함수로 전달
function testForEach(){
    console.log("=======================testForEach");
    let source = ["Apple", "Banana", "Carrot", "Durian"];

    console.log("======================요소들만 전달");
    source.forEach(item => {
        console.log(item);
    })

    console.log("=====요소와 함께 인덱스 전달")
    source.forEach((item, index) =>{
        console.log(`${index} -> ${item}`);
    });

    console.log("=====요소, 인덱스와 함께 배열 자체도 전달")
    source.forEach((item, index, arr) =>{
        console.log(`${index} -> ${item}`, arr);
    })
}
//testForEach();

function testEverySome(){
    let data = [
        { name: "홍길동", age: 28 },
        { name: "장길산", age: 35 },
        { name: "전우치", age: 25 },
        ];
    console.log("원본데이터:", data);

    // 데이터 내부의 모든 객체의 나이가 25세 초과하는지 검증
    let result = data.every(obj => {
        return obj.age > 25; // 검증 로직
        });
    console.log("모든 인물의 나이가 25세 초과인가?", result);

    // 데이터 내부의 일부 객체의 나이가 25세 초과하는지 검증
    result = data.some(obj => obj.age > 25) // 검증 로직
    console.log("일부 인물의 나이가 25세 초과인가?", result);
}
testEverySome();