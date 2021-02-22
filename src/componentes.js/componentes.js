let pedir = document.querySelectorAll('button');

function reservar(){ pedir.forEach(pedirr => pedirr.addEventListener('click',()=>{
    conf= confirm("Fecha de publicación: 15/08/2019, presiona 'Aceptar' si quieres pedir prestado el libro");

    if (!confirm) {
        console.log('');
        
    }
    else{
        pedirr.innerText='Reservado';
    }
    
    }
        
 )
    );
    
};
reservar();