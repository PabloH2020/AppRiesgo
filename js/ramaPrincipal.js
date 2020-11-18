    const name = new Input('name');
    const actprinc = new Input('actprinc');
    const personal = new Input('personal');
    const activos = new Input('activos');
    const dem = new Input('dem');

    const vactual = new Input('vactual');
    const mlactual = new Input('mlactual');
    const ventasml = new Input('ventasml');
    const mexterno = new Input('mexterno');
    const ventasme = new Input('ventasme');
    const vpromedio = new Input('vpromedio');
    const res = new Input('res');
    const resVts = new Input('resVts');
    const ganancias = new Input('ganancias');
    const actpas = new Input('actpas');
    const comm = new Input('comm');

    const prestamo = new Input('prestamo');
    const deudacp = new Input('deudacp');
    const vposteriores = new Input('vposteriores');
    const vultimo = new Input('vultimo');
    const dtvp = new Input('dtvp');
    const dtvu = new Input('dtvu');
    const povp = new Input('povp');
    const povu = new Input('povu');
    const financ = new Input('financ');
    
    const formUno = new Formulario('formUno');
    
    formUno.components = [name,actprinc,personal,activos,dem,vactual,mlactual,ventasml,mexterno,ventasme,vpromedio,res,resVts,ganancias,actpas,comm,prestamo,deudacp,vposteriores,vultimo,dtvp,dtvu,povp,povu,financ];

    formUno.bindSubmit();
    
    const sig = document.querySelector('button[name="sig"]');
    sig.addEventListener('click', ()=>{
        let inputs = Array.from(document.querySelectorAll('.data input[required]'));
        
        const arregloFinal = inputs.filter( (inp)=>{

            if ( inp.required && inp.value === "" ){
                return inp;
            };
            
        })
        
            if ( arregloFinal.length > 0  ){

                arregloFinal.forEach( (element)=>{
                    element.style.borderColor = "red";
                    element.style.borderWidth = "medium";
            })
            }else{
                window.scrollBy(0,300);
            };
    });

    const sig2 = document.querySelector('button[name="sig2"]');
    sig2.addEventListener('click', ()=>{
        let inputs = Array.from(document.querySelectorAll('.contable input[required]'));
        
        const arregloFinal = inputs.filter( (inp)=>{

            if ( inp.required && inp.value === "" ){
                return inp;
            };
            
        })
        
            if ( arregloFinal.length > 0  ){

                arregloFinal.forEach( (element)=>{
                    element.style.borderColor = "red";
                    element.style.borderWidth = "medium";
            })
            }else{
                window.scrollBy(0,300);
            };
    })
