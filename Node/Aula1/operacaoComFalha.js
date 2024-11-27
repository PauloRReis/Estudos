function operacaoComFalha(){
    console.log('Iniciando operação com falha');
    setTimeout(()=>{
        console.log('   ///')
    }, 1000);

    console.log('-------Função finalizada-------');
}

module.exports = operacaoComFalha;