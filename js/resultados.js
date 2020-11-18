let inputs = Array.from(document.querySelectorAll('input[type="number"]'));

inputs.forEach( (input)=>{
    input.value = 0;

});

mlactual.element.addEventListener('mouseout',e=>{
    ventasml.element.value = Math.round( parseFloat(e.target.value) / parseFloat(vactual.element.value) *100);
})

mexterno.element.addEventListener('mouseout' , e=>{
    ventasme.element.value = Math.round( parseFloat(e.target.value) / parseFloat(vactual.element.value) *100);
})

ventasml.element.addEventListener('mouseout' , e=>{
    mexterno.element.value = parseInt(vactual.element.value) - parseInt(mlactual.element.value);
})

res.element.addEventListener('mouseout', e=>{
    resVts.element.value = Math.round( parseFloat(e.target.value) / parseFloat(vactual.element.value) *100);
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



ml2.addEventListener('mouseout',e=>{
    vml2.value  = Math.round( parseFloat(e.target.value) / parseFloat(v2.value) * 100);
})

ml1.addEventListener('mouseout',e=>{
    vml1.value  = Math.round( parseFloat(e.target.value) / parseFloat(v1.value) * 100);
})

vml2.addEventListener('mouseout' , e=>{
    mex2.value = parseInt(v2.value) - parseInt(ml2.value);
})

vml1.addEventListener('mouseout' , e=>{
    mex1.value = parseInt(v1.value) - parseInt(ml1.value);
})

mex2.addEventListener('mouseout' , e=>{
    vme2.value = Math.round( parseFloat(e.target.value) / parseFloat(v2.value) * 100);
})

mex1.addEventListener('mouseout' , e=>{
    vme1.value = Math.round( parseFloat(e.target.value) / parseFloat(v1.value) * 100);
})

res2.addEventListener('mouseout', e=>{
    resVts2.value = Math.round( parseFloat(e.target.value) / parseFloat(v2.value) * 100);
});

res1.addEventListener('mouseout', e=>{
    resVts1.value = Math.round( parseFloat(e.target.value) / parseFloat(v1.value) * 100);
});





//Aca termina el segundo formulario
let deuda = document.querySelector('input[name="deuda"]');

prestamo.element.addEventListener('mouseout' , e=>{
    deudacp.element.value = parseInt(e.target.value) + parseInt(deuda.value);
})

vposteriores.element.addEventListener('mouseout' , e=>{
    dtvp.element.value = Math.round( parseFloat(deudacp.element.value) / parseFloat(e.target.value) * 100);
    povp.element.value = Math.round( parseFloat(prestamo.element.value) / parseFloat(e.target.value) * 100);
})

vultimo.element.addEventListener('mouseout' , e=>{
    dtvu.element.value = Math.round( parseFloat(deudacp.element.value) / parseFloat(e.target.value) * 100);
    povu.element.value = Math.round( parseFloat(prestamo.element.value) / parseFloat(e.target.value) * 100);
    financ.element.value = Math.round( parseFloat(prestamo.element.value) / parseFloat(deudacp.element.value) * 100);
})




