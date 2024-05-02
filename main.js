const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }classificaSenha(tamanhoAlfabeto){
        let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
        console.log(entropia);
        forcaSenha.classList.remove('faz nada','mais ou meno','GRAÚDO');
        if (entropia > 57){
            forcaSenha.classList.add('GRAÚDO');
        } else if (entropia > 35 && entropia < 57 ) {
            forcaSenha.classList.add('mais ou meno');
        } else if (entropia <= 35){
            forcaSenha.classList.add('faz nada');
        }
        const valorEntropia = document.querySelector('.entropia');
        valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
    }Senha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('faz nada','mais ou meno','GRAÚDO');
    if (entropia > 57){
        forcaSenha.classList.add('GRAÚDO');
    } else if (entropia > 35 && entropia < 57 ) {
        forcaSenha.classList.add('mais ou meno');
    } else if (entropia <= 35){
        forcaSenha.classList.add('faz nada');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
}
