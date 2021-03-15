

let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");
let result5 = document.querySelector(".result5");
let result6 = document.querySelector(".result6");
let result7 = document.querySelector(".result7");


let allResults = document.querySelector(".allResults");
let wynik = document.querySelector(".wynik");


allResults.addEventListener("click", (event) => {
    event.preventDefault();


    let v2 = +document.querySelector(".v2").value;
    let v3 = +document.querySelector(".v3").value;
    let v4 = +document.querySelector(".v4").value;
    let v5 = +document.querySelector(".v5").value;
    let v6 = +document.querySelector(".v6").value;
    let v7 = +document.querySelector(".v7").value;
    let v8 = +document.querySelector(".v8").value;

    let b2 = +document.querySelector(".b2").value;
    let b3 = +document.querySelector(".b3").value;
    let b4 = +document.querySelector(".b4").value;
    let b5 = +document.querySelector(".b5").value;
    let b6 = +document.querySelector(".b6").value;
    let b7 = +document.querySelector(".b7").value;
    let b8 = +document.querySelector(".b8").value;

    let c2 = +document.querySelector(".c2").value;
    let c3 = +document.querySelector(".c3").value;
    let c4 = +document.querySelector(".c4").value;
    let c5 = +document.querySelector(".c5").value;
    let c6 = +document.querySelector(".c6").value;
    let c7 = +document.querySelector(".c7").value;
    let c8 = +document.querySelector(".c8").value;

    let d2 = +document.querySelector(".d2").value;
    let d3 = +document.querySelector(".d3").value;
    let d4 = +document.querySelector(".d4").value;
    let d5 = +document.querySelector(".d5").value;
    let d6 = +document.querySelector(".d6").value;
    let d7 = +document.querySelector(".d7").value;
    let d8 = +document.querySelector(".d8").value;

    let e2 = +document.querySelector(".e2").value;
    let e3 = +document.querySelector(".e3").value;
    let e4 = +document.querySelector(".e4").value;
    let e5 = +document.querySelector(".e5").value;
    let e6 = +document.querySelector(".e6").value;
    let e7 = +document.querySelector(".e7").value;
    let e8 = +document.querySelector(".e8").value;

    let f2 = +document.querySelector(".f2").value;
    let f3 = +document.querySelector(".f3").value;
    let f4 = +document.querySelector(".f4").value;
    let f5 = +document.querySelector(".f5").value;
    let f6 = +document.querySelector(".f6").value;
    let f7 = +document.querySelector(".f7").value;
    let f8 = +document.querySelector(".f8").value;

    let g2 = +document.querySelector(".g2").value;
    let g3 = +document.querySelector(".g3").value;
    let g4 = +document.querySelector(".g4").value;
    let g5 = +document.querySelector(".g5").value;
    let g6 = +document.querySelector(".g6").value;
    let g7 = +document.querySelector(".g7").value;
    let g8 = +document.querySelector(".g8").value;

  //  console.log(v2);

    result1.innerHTML = v2 + v3 + v4 + v5 + v6 + v7 + v8;
    result2.innerHTML = b2 + b3 + b4 + b5 + b6 + b7 + b8;
    result3.innerHTML = c2 + c3 + c4 + c5 + c6 + c7 + c8;
    result4.innerHTML = d2 + d3 + d4 + d5 + d6 + d7 + d8;
    result5.innerHTML = e2 + e3 + e4 + e5 + e6 + e7 + e8;
    result6.innerHTML = f2 + f3 + f4 + f5 + f6 + f7 + f8;
    result7.innerHTML = g2 + g3 + g4 + g5 + g6 + g7 + g8;



  //  wynik.innerHTML = 'v2 + v3 + v4 + v5 + v6 + v7 + v8';
});

