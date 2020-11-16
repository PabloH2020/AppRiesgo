class Input{
    constructor(name){
        this.element = document.querySelector(`[name='${name}']`);
        this.isValid = false;
        this.value = this.element.value;
    }

    validate(){
        this.isValid = this.element.required && this.element.value != "";
    }
}