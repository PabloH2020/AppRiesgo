class Input{
    constructor(name){
        this.element = document.querySelector(`[name='${name}']`);
        this.isValid = false;
    }

    validate(){
        this.isValid = this.element.required && this.element.value != "";
    }
}