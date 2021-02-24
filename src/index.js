import HtmlWebpackPlugin from 'html-webpack-plugin';
import './styles.css';


 export let pedir = document.querySelectorAll('button');

 export function reservar(){ pedir.forEach(pedirr => pedirr.addEventListener('click',()=>{
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