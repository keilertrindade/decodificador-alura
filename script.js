function validarCaracteres(texto){
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar(){

    let textboxEncrypt = document.getElementById('text-encrypt');
    let texto = textboxEncrypt.value;


    if (validaTexto(texto)) {
        let textoEncriptado = texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        atualizarTela(textoEncriptado);
    }

}

function decriptar(){
    let textboxEncrypt = document.getElementById('text-encrypt');
    let texto = textboxEncrypt.value;

    if (validaTexto(texto)) {
        let textoDescriptado = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

        atualizarTela(textoDescriptado);
    }

}

function validaTexto(texto){
    console.log(texto);
    
    if(texto == ''){
        alert("Por favor insira um texto!");
        return false;
    }
    
    if(!validarCaracteres(texto)){
        alert("Por favor insira um texto contendo apenas letras minusculas!");
        return false;
    }
    
    return true;
}

function atualizarTela(texto){
    document.getElementById('image').style.display = 'none';
    document.getElementById('title-message').style.display = 'none';
    document.getElementById('message').style.overflow = 'auto';
      
    let botaoCopiar = document.getElementById('copy');

    let painelDireito = document.getElementById('painel-direito');
    painelDireito.style.display='flex';
    painelDireito.style.justifyContent = 'space-between';
    painelDireito.style.alignItems = 'flex-start';

    botaoCopiar.style.display = 'inline';
    botaoCopiar.style.alignSelf = 'center'
   
    let textoExibido = document.getElementById('text-message');
    
    textoExibido.style.justifySelf = 'flex-start';
    textoExibido.style.fontSize = '2rem';
    textoExibido.style.textAlign ='start';
    textoExibido.innerText = texto;
   
}

function copiar(){

    let textoExibido = document.getElementById('text-message'); 
    let texto = textoExibido.innerText;
    
    navigator.clipboard.writeText(texto);
    
    alert('Texto copiado com sucesso!');
}