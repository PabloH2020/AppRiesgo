let inputs = Array.from(document.querySelectorAll('input[type="number"]'));

inputs.forEach( (input)=>{
    input.value = 0;

});

mlactual.element.addEventListener('blur',e=>{
    ventasml.element.value =  Math.round( parseFloat(e.target.value) / parseFloat(vactual.element.value) *100);
    mexterno.element.value = Math.round( parseInt(vactual.element.value) - parseInt(e.target.value) );
    ventasme.element.value =  Math.round( parseFloat(mexterno.element.value) / parseFloat(vactual.element.value) *100);
    vultimo.element.value = vactual.element.value;
})

res.element.addEventListener('blur', e=>{
    resVts.element.value =  Math.round( parseFloat(e.target.value) / parseFloat(vactual.element.value) *100);
});

//Datos de períodos -2 y -1


let v2 = document.querySelector('input[name="v2"]');
let v1 = document.querySelector('input[name="v1"]');
let ml2 = document.querySelector('input[name="ml2"]');
let ml1 = document.querySelector('input[name="ml1"]');
let vml2 = document.querySelector('input[name="vml2"]');
let vml1 = document.querySelector('input[name="vml1"]');
let mex2 = document.querySelector('input[name="mex2"]');
let mex1 = document.querySelector('input[name="mex1"]');
let vme2 = document.querySelector('input[name="vme2"]');
let vme1 = document.querySelector('input[name="vme1"]');
let vprom2 = document.querySelector('input[name="vprom2"]');
let vprom1 = document.querySelector('input[name="vprom1"]');
let res2 = document.querySelector('input[name="res2"]');
let res1 = document.querySelector('input[name="res1"]');
let resVts2 = document.querySelector('input[name="resVts2"]');
let resVts1 = document.querySelector('input[name="resVts1"]');
let gan2 = document.querySelector('input[name="gan2"]');
let gan1 = document.querySelector('input[name="gan1"]');
let actpas2 = document.querySelector('input[name="actpas2"]');
let actpas1 = document.querySelector('input[name="actpas1"]');



ml2.addEventListener('blur',e=>{
    vml2.value  =  Math.round(parseFloat(e.target.value) / parseFloat(v2.value) * 100);
    mex2.value = Math.round(parseInt(v2.value) - parseInt(ml2.value));
    vme2.value = Math.round(parseFloat(mex2.value) / parseFloat(v2.value) * 100);
})

ml1.addEventListener('blur',e=>{
    vml1.value  =  Math.round(parseFloat(e.target.value) / parseFloat(v1.value) * 100);
    mex1.value = Math.round(parseInt(v1.value) - parseInt(ml1.value));
    vme1.value =  Math.round(parseFloat(mex1.value) / parseFloat(v1.value) * 100);
})

res2.addEventListener('blur', e=>{
    resVts2.value =  Math.round(parseFloat(e.target.value) / parseFloat(v2.value) * 100);
});

res1.addEventListener('blur', e=>{
    resVts1.value =  Math.round(parseFloat(e.target.value) / parseFloat(v1.value) * 100);
});





//Aca termina el segundo formulario
let deuda = document.querySelector('input[name="deuda"]');

prestamo.element.addEventListener('blur' , e=>{
    deudacp.element.value = Math.round(parseInt(e.target.value) + parseInt(deuda.value));
})

vposteriores.element.addEventListener('blur' , e=>{
    dtvp.element.value =  Math.round(parseFloat(deudacp.element.value) / parseFloat(e.target.value) * 100);
    povp.element.value =  Math.round(parseFloat(prestamo.element.value) / parseFloat(e.target.value) * 100);
    dtvu.element.value =  Math.round( parseFloat(deudacp.element.value) / parseFloat(e.target.value) * 100);
    povu.element.value =  Math.round( parseFloat(prestamo.element.value) / parseFloat(e.target.value) * 100);
    financ.element.value =  Math.round( parseFloat(prestamo.element.value) / parseFloat(deudacp.element.value) * 100);
})






