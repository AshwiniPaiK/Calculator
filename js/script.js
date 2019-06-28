// document.querySelectorAll('#val' or '.val')
// display inside html use .value for input and .innerhtml for<p>,<a>etc

document.getElementById("wrapper").addEventListener(
  "click",
  function() {
    var disp = document.getElementById("disp");
    var o_disp = document.getElementById("Odisp");

    if (event.target.classList.contains("inputs")) {
      disp.value += event.target.value;
    } else if (event.target.value === "=") {
      disp.value = disp.value.replace("×", "*");
      disp.value = disp.value.replace("÷", "/");
      o_disp.value = eval(disp.value);
      disp.value = disp.value.replace("*", "×");
      disp.value = disp.value.replace("/", "÷");

      // console.log(disp.value);
    } else if (event.target.value === "C") {
      disp.value = null;
      o_disp.value = null;
    } else {
      return null;
    }
  },
  true
);
