const resultado = document.querySelector(".resultado");
const btn1 = document.querySelector("[data-btn1]");
const btn2 = document.querySelector("[data-btn2]");
const btn3 = document.querySelector("[data-btn3]");
const btn4 = document.querySelector("[data-btn4]");
const btn5 = document.querySelector("[data-btn5]");
const btn6 = document.querySelector("[data-btn6]");
const btn7 = document.querySelector("[data-btn7]");
const btn8 = document.querySelector("[data-btn8]");
const btn9 = document.querySelector("[data-btn9]");
const btn0 = document.querySelector("[data-btn0]");
const dot = document.querySelector("[data-dot]");
const equals = document.querySelector("[data-equals]");
const plus = document.querySelector("[data-plus]");
const minus = document.querySelector("[data-minus]");
const dividedby = document.querySelector("[data-dividedby]");
const times = document.querySelector("[data-times]");
const del = document.querySelector("[data-del]");
const btnclear = document.querySelector("[data-clear]");

function insert(num) {
  const numero = resultado.innerHTML;
  resultado.innerHTML = numero + num;
}

function clear() {
  resultado.innerHTML = "";
}

function deletar() {
  var resultado2 = document.querySelector(".resultado").innerHTML;
  document.querySelector(".resultado").innerHTML = resultado2.substring(
    0,
    resultado2.length - 1
  );
}

function calcular() {
  var resultado = document.querySelector(".resultado").innerHTML;
  if (resultado) {
    document.querySelector(".resultado").innerHTML = parseFloat(
      eval(resultado).toFixed(2)
    );
  } else {
    document.querySelector(".resultado").innerHTML = "Nada para calcular";
  }
}

btn1.addEventListener("click", () => {
  insert(btn1.innerHTML);
});

btn2.addEventListener("click", () => {
  insert(btn2.innerHTML);
});

btn3.addEventListener("click", () => {
  insert(btn3.innerHTML);
});

btn4.addEventListener("click", () => {
  insert(btn4.innerHTML);
});

btn5.addEventListener("click", () => {
  insert(btn5.innerHTML);
});

btn6.addEventListener("click", () => {
  insert(btn6.innerHTML);
});

btn7.addEventListener("click", () => {
  insert(btn7.innerHTML);
});

btn8.addEventListener("click", () => {
  insert(btn8.innerHTML);
});

btn9.addEventListener("click", () => {
  insert(btn9.innerHTML);
});

btn0.addEventListener("click", () => {
  insert(btn0.innerHTML);
});

dot.addEventListener("click", () => {
  insert(dot.innerHTML);
});

dividedby.addEventListener("click", () => {
  insert(dividedby.innerHTML);
});

minus.addEventListener("click", () => {
  insert(minus.innerHTML);
});

plus.addEventListener("click", () => {
  insert(plus.innerHTML);
});

times.addEventListener("click", () => {
  insert(times.innerHTML);
});

btnclear.addEventListener("click", () => {
  clear();
});

del.addEventListener("click", () => {
  deletar();
});

equals.addEventListener("click", () => {
  calcular();
});

// teste