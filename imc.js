const calcular = document.getElementById('calcular'); /* cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.*/
function imc(){ /* função*/
    const altura = document.getElementById('altura').value; 
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura !=='' && peso !==''){  /*E se*/
     const valorIMC = (peso / (altura * altura)).toFixed(1);
    let classificacao = '';  /* deixar*/
    if (valorIMC <18.5){
    classificacao = 'abaixo do peso'
    }else if (valorIMC <25){  /*senão se*/
    classificacao = 'peso ideal';
    }else if (valorIMC <30){
    classificacao = 'sobrepeso';
    }else if (valorIMC <40){
    classificacao = 'obesidade';
    }else{
    classificacao = 'Obesidade Grave, Cuidado!!';
}
resultado.textContent = `Seu IMC é ${valorIMC} e sua classificacao é: ${classificacao}.`;
     
}
else{
     resultado.textContent = `Preencha todos os campos !!`
   /* SE Altura for diferente de em branco e peso 
   for diferente de em branco faça
   !== diferente
   == igual
   >maior
   <menor
   */
    }
}
calcular.addEventListener('click', imc)