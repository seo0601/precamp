//반복문 실습 1
let persons = [
    {name:"철수",age:17},
    {name:"영희",age:22},
    {name:"도우너",age:5},
    {name:"그루트",age:65},
    {name:"도비",age:3}
]
//undefined

for(let count=0; count<persons.length; count++){

    if(persons[count].age >= 19){
        console.log("성인입니다");
    }else{
        console.log("미성년자입니다")
    }
}
//VM2017:6 미성년자입니다
//VM2017:4 성인입니다
//VM2017:6 미성년자입니다
//VM2017:4 성인입니다
//VM2017:6 미성년자입니다
//undefined
for(let count=0; count<persons.length; count++){

    if(persons[count].age >= 19){
        console.log(persons[count].name + "님은 성인입니다");
    }else{
        console.log(persons[count].name + "님은 미성년자입니다")
    }
}
//VM2154:6 철수님은 미성년자입니다
//VM2154:4 영희님은 성인입니다
//VM2154:6 도우너님은 미성년자입니다
//VM2154:4 그루트님은 성인입니다
//VM2154:6 도비님은 미성년자입니다
//undefined

//반복문 실습 2
const fruits = [
    {number: 1, title:"레드향"},
    {number: 2, title:"샤인머스켓" },
    {number: 3, title:"산청딸기" },
    {number: 4, title:"한라봉" },
    {number: 5, title:"사과" },
    {number: 6, title:"애플망고" },
    {number: 7, title:"딸기" },
    {number: 8, title:"천혜향" },
    {number: 9, title:"과일선물세트" },
    {number: 10, title:"귤" }
]
//undefined

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title);
}
// VM2339:2 1 레드향
// VM2339:2 2 샤인머스켓
// VM2339:2 3 산청딸기
// VM2339:2 4 한라봉
// VM2339:2 5 사과
// VM2339:2 6 애플망고
// VM2339:2 7 딸기
// VM2339:2 8 천혜향
// VM2339:2 9 과일선물세트
// VM2339:2 10 귤
// undefined
for(let i=0; i<fruits.length; i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`);
}
// VM2357:2 1 레드향
// VM2357:2 2 샤인머스켓
// VM2357:2 3 산청딸기
// VM2357:2 4 한라봉
// VM2357:2 5 사과
// VM2357:2 6 애플망고
// VM2357:2 7 딸기
// VM2357:2 8 천혜향
// VM2357:2 9 과일선물세트
// VM2357:2 10 귤
// undefined
for(let i=0; i<fruits.length; i++){
    console.log(`과일 차트${fruits[i].number} 위는 ${fruits[i].title}`);
}
// VM2382:2 과일 차트1 위는 레드향
// VM2382:2 과일 차트2 위는 샤인머스켓
// VM2382:2 과일 차트3 위는 산청딸기
// VM2382:2 과일 차트4 위는 한라봉
// VM2382:2 과일 차트5 위는 사과
// VM2382:2 과일 차트6 위는 애플망고
// VM2382:2 과일 차트7 위는 딸기
// VM2382:2 과일 차트8 위는 천혜향
// VM2382:2 과일 차트9 위는 과일선물세트
// VM2382:2 과일 차트10 위는 귤
// undefined