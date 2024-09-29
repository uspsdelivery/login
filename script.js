const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

const inputs = document.querySelectorAll('input');

                inputs.forEach((input, index)=>{
                    input.addEventListener('input', ()=>{
                        if(input.value.length === 1 && index < inputs.length-1){
                            inputs[index + 1].focus();
                        }
                    })
                    input.addEventListener('keydown', (e)=>{
                        if(e.key === 'Backspace' && index > 0 && input.value === ''){
                            inputs[index - 1].focus();
                        }
                    })
                })