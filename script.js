const btn = document.querySelector(".btn");
const result = document.querySelector("#bmi-result");
const remark = document.querySelector("#weight-condition")
function calculateBMI(){
    const height = document.querySelector("#height").value / 100;
    const weight = document.querySelector("#weight").value;

    result.value = weight/(height * height);

    if(result.value < 18.5){
        remark.innerText = "Under Weight";
    }
    else if(result.value>=18.5 && result.value <= 24.9){
        remark.innerText = "Normal Weight";
    }
    else if(result.value >= 25 && result.value <= 29.9){
        remark.innerText = "Over Weight";
    }
    else if(result.value>=30){
        remark.innerText = "Obesity";
    }
}

btn.addEventListener("click",calculateBMI)