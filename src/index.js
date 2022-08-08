import validator from "./validator.js";

   
let runbtn = document.getElementById("btnCartao");
let finalResult = document.getElementById("outCard");
runbtn.addEventListener("click", validatorCard);

    function validatorCard(){
     let numCartao = document.getElementById("numCartao").value;
console.log(numCartao)



     /*let result = validator.isValid(numDigitado);
     let cardMaskify = validator.maskify(numDigitado);
     console.log (result)
     
    

     if(result === "") {
        return alert ("Digite um número");
     }
     else if(result == true) {
         alert ( cardMaskify + " CARTÃO VÁLIDO");
     }
     else{
         alert ( cardMaskify + " CARTÃO INVÁLIDO");
     }*/
	}





















/*const cartao = document.querySelector('#cartao'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
	 formulario = document.querySelector('#formulario-cartao');

	  numCartao = document.querySelector("=numDigitado");
	  nomCartao = document.querySelector("nomeCartao");

	  mesValidade = document.querySelector('#cartao .mes');
	  anoValidade = document.querySelector('#cartao .ano');
	

// * Btn de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});


// * Input numero cartão
formulario.inputNumCartao.addEventListener('keyup', (e) );
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminar espaços em branco
	.replace(/\s/g, '')
	// Eliminar as letras
	.replace(/\D/g, '')
	// Colocar Espaço a cada quatro números 
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina o ultimo espaço
	.trim();

	numCartao.textContent = valorInput;

	if(valorInput == ''){
		numCartao.textContent = '#### #### #### ####';
	}

// * Input nome do cartão
formulario.inputNome.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNome.value = valorInput.replace(/[0-9]/g, '');
	nomeCartao.textContent = valorInput;

	if(valorInput == ''){
		nomeCartao.textContent = 'Luciana Chamma';
	}

});



/*import validator from './validator.js';

const cardInput = document.getElementById ("creditCard");
const btn = document.getElementById ("validar");
btn.addEventListener ("click", function (){

    console.log ("click")
})
*/


//console.log(validator.isValid ("8956895654788978"));

