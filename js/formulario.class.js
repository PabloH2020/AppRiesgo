class Formulario{
    constructor(name){
        this.element = document.querySelector(`[name="${name}"]`);
        this.components = [];
    }

    bindSubmit(){
        var that = this;

        this.element.addEventListener('submit', (event)=>{
            const finalElems = that.components.filter( (component)=>{
                component.validate()
                return !component.isValid;
            });
            if ( finalElems.length > 0 ){ 
                event.preventDefault();
                
            }else if( !this.element[name="formTres"] ){
                event.preventDefault();
                pasarAProximoForm();
            }else{
                alert('ACA GUARDO LOS DATOS DE TODO EL FORMULARIO YA QUE TODO FUE VALIDADO')
            };

        });
    }

}