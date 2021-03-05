

let result1 = document.querySelector(".result1");
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

  //  console.log(v2);

    result1.innerHTML = v2 + v3 + v4 + v5 + v6 + v7 + v8;

  //  wynik.innerHTML = 'v2 + v3 + v4 + v5 + v6 + v7 + v8';
});

