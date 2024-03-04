const page = {
    fConvert: function(){
        const fTempF = document.querySelector("#convertBox");
        const output = document.querySelector(".output");
        const fToCButton = document.querySelector("#fahrenheit");
            if(fTempF.value != ""){
                output.innerHTML = (fTempF.value - 32) * (5/9) + "°C";
            } else {
                output.innerHTML = "";
            }
    },
    cConvert: function(){
        const fTempC = document.querySelector("#convertBox");
        const output = document.querySelector(".output");
        const cToFButton = document.querySelector("#celsius");
            if(fTempC.value != ""){
                output.innerHTML = (fTempC.value * (5/9)) - 32 + "°F";
            } else {
                output.innerHTML = "";
            }
    },
    getRadioValue: function(){
        const radioButtons = document.querySelectorAll('input[name="convertType"]');
        let returnValue;
        for(const radioButton of radioButtons){
            if(radioButton.checked) {
                returnValue = radioButton.value;
                break;
            }
        }
        return returnValue;
    },
    init: function(){
        const fConvertButton = document.querySelector("#convertButton");
        fConvertButton.addEventListener("click", () => {
            if(page.getRadioValue() === "fahrenheit"){
                page.fConvert();
            }else if(page.getRadioValue() === "celsius"){
                page.cConvert();
            }
        });
    }
}

window.addEventListener("load", page.init);
