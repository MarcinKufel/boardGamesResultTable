

let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
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

  //  console.log(v2);

    result1.innerHTML = v2 + v3 + v4 + v5 + v6 + v7 + v8;
    result2.innerHTML = b2 + b3 + b4 + b5 + b6 + b7 + b8;
    result3.innerHTML = c2 + c3 + c4 + c5 + c6 + c7 + c8;

  //  wynik.innerHTML = 'v2 + v3 + v4 + v5 + v6 + v7 + v8';
});

