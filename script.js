
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector(".copiar");

function btnEncriptar(){
	const textoEncriptado = encriptar(inputTexto.value)
	mensagem.value = textoEncriptado;
	mensagem.style.backgroundImage="none"
	
}

function encriptar(stringEncriptada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for (let i=0; i < matrizCodigo.length; i++) {
		
if(stringEncriptada.includes(matrizCodigo[i][0])) {
		stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 	
	}
}
return stringEncriptada;
}

function btnDecriptar(){
	const textoDecriptado = decriptar(inputTexto.value)
 	mensagem.value = textoDecriptado;
	
	 mensagem.style.backgroundImage="none"
	 
	}

function decriptar(stringDecriptada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDecriptada = stringDecriptada.toLowerCase();

	for (let i=0; i < matrizCodigo.length; i++) {
		
if(stringDecriptada.includes(matrizCodigo[i][0])) {
		stringDecriptada = stringDecriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}

}
return stringDecriptada;
}


function btncopiar() {
    const textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Texto copiado,  cole ele na aréa de transferencia!");
   mensagem.style.backgroundImage="none"
}
