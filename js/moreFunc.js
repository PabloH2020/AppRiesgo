var inputsArray = Array.from(document.querySelectorAll(`input[required]`));
    inputsArray.forEach( (input)=>{

        input.addEventListener('blur', (ev)=>{
            if( ev.target.value.trim() != "" ){
                ev.target.style.borderColor = "lightgreen";
                ev.target.style.borderWidth = "medium";
            }
        })
    });