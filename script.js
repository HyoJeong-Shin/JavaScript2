/*
// 배열의 메소드 (대괄호로 생성)
const arr = ['A','B','C','D','E','F','G','H','I','J','K'];

        arr.forEach(function(element, index, array){
            console.log(`${array}의 ${index}번째 요소: ${element}`);
        });

const arr2 = ['강수지', '김예진', '이태림'];
        arr2.forEach(function(element, index, array){
          console.log(`${index+1}번째 운영진 : ${element}`);
        });

//인수 이름 바꿔도 됨 element => e, index => i와 같이


//객체 생성 (중괄호로 묶어 줘야 함)
const person = {
  name : '신효정',
  age: 23,
  gender:'Female',
  isLikeLion : true,
  introduce : function(){
    return `저는 ${this.age}살 ${this.name}입니다.`;
  }
  //:와 function키워드 생략하고도 메소드 선언 가능
  //introduce(){
  //  return `저는 ${this.age}살 ${this.name}입니다.`;
  //}
}
console.log(person);

// name, age, gender, isLikeLion 프로퍼티
// introduce 메서드

console.log(person.name);
console.log(person['age']);

//속성 추가 //대괄호 이용해서 접근
person['favorite color'] = 'red';
console.log(person);

//메서드 접근 //객체이름.메소드이름();
console.log(person.introduce());

//프로퍼티와 메소드 추가
person.address = '서울';
person.isLionMember = function(){
  if (this.isLikeLion){
    return `멋쟁이사자처럼 회원입니다.`;
  }
}
console.log(person.address);  //서울
console.log(person.isLionMember()); //멋쟁이사자처럼 회원입니다.

console.log(person);
//속성 삭제
delete person.address;
delete person.isLionMember;
delete person['favorite color'];

console.log(person);
//콘솔의 메서드 확인 //console.log(console);

//0부터 1사이의 랜덤 값을 뽑아줌 //0.xxxxxxxxx 매번 할 때마다 달라짐
console.log(Math.random());

//각각 숫자를 정수값으로 내림
console.log(Math.floor(5.5));
//각각 숫자를 정수값으로 올림
console.log(Math.ceil(5.5));
//각각 숫자를 정수값으로 반올림
console.log(Math.round(5.5));
console.log(Math.round(5.49));

//0과 100사이의 무작위 정수를 출력
console.log(Math.floor(Math.random()*100));

//DOM
colors = ['red', 'blue', 'green'];

let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++){
  lis[i].style.color = colors[i];
}


// querySelector를 사용하면 제일 첫번째 객체만을 리턴함
let li = document.querySelector('li');
li.style.color='red';

li = document.querySelector('.active');
li.style.color='blue';


//querySelectorAll사용하여 모든 요소 색깔 적용
let lis = document.querySelectorAll('li');

for (let i = 0; i< lis.length; i++){
  lis[i].style.color = 'violet';
}

//alert 창
window.alert('경고창');

//confirm 창
window.confirm('확인창');

//prompt //사용자가 입력한 값을 반환
let input = window.prompt('압력하세요');
document.write(input);

location.href = 'https://www.naver.com/'; 

//새 창으로 로드 
window.open('https://www.naver.com/');

//현재 창으로 로드
window.open('https://www.naver.com/', '_self');

//새 창으로 로드 //새로 고침할 때마다 전 화면 뜸
window.open('https://www.naver.com/', '_blank');

//새 창으로 로드시, 전 화면이 계속 뜨지 않음
window.open('https://www.naver.com/', 'naver');

window.open('https://www.naver.com/', '_blank', 'width=200, height=200, resizable=yes');
*/
let t = document.getElementById('target');
t.onclick = function(){
  alert('Hello world');
}
t.addEventListener('click', function(event){
  alert('Hello world, '+event.target.value);
});