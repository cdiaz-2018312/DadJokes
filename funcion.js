const chisteHTML = document.getElementById('chiste');
const boton =document.getElementById('chisteBtn');
const chiste = ['¿por que un tamarindo esta en la cárcel? ¡por su pulpa!',
                '¿por que mickey mouse esta en la cárcel? ¡por rata!',
                '¿como se llama el chino mas pobre? ¡chin yun chentavo!',
                '¿que hace un abeja en un Gimnasio? ¡Zum-Ba!',
                '¿por que los esqueletos no pelean entre ellos? ¡por que no tienen agallas!',
                '¿por que los pajaros no tienen facebook? ¡por que ya tienen Twitter!',
                '¿como se llama el campeón olimpico de buceo? Toko Fondho','¿que le dijo una impresora a otra? ¿esa hoja es tuya o es impresión mia?',
                '¿que le dijo un semáforo a un carro? no me mires que me estoy cambiando',
                '¿que le dijo una cocacola a un vino blanco? tsssssssssssssssss'];
let clic = -1;
let cambio = true;
boton.addEventListener('click',()=> {
    if (cambio===false){
            clic--;
            chisteHTML.innerHTML=chiste[clic];
            if(clic==0){
                cambio=!cambio;
                clic=-1;
        
            } 
    }

    if(cambio===true){
        clic++
        chisteHTML.innerHTML=chiste[clic];
    if (clic==9){
        cambio=!cambio;
     }
    }
})