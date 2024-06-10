
//함수 선언문
function testerone (arg) { 
    console.log(arg)
}

testerone (1)

//함수 표현식
const testertwo = function (arg) { 
    console.log (arg)
}

testertwo (1)


//function 생성자 함수 
function Testerthree (arg) { 
    console.log(arg)
}

let hwanSung = new Testerthree("hwansung") 



// 화살표 함수 
const testerfour = (arg) => {
    return console.log (arg)
}
testerfour(2)


// 즉시실행 함수
// (function () {
//     var a = 3;
//     var b = 5;
//     return console.log (a * b);
//    }());


// 재귀함수
function reflexive (arg) {
    if (arg === 5) {
        return
    } 
    console.log (arg) 
    reflexive (arg+1); 
}
reflexive (1);


// 중첩함수
function primary (arg) { 
    function secondary () { 
        console.log (arg)
    }
    secondary();
}
primary (100); 



// 콜백함수 
function tertiary (arg) { 
    return console.log(arg()); 
}

tertiary (function () { 
    return 5;
}) 
