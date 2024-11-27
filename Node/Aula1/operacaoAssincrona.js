async function operacaoAssincrona(){
    console.log('Iniciando operação assíncrona');
    await operacaoPassoAPasso('   |||', 2000);
    await operacaoPassoAPasso('   |||', 2000);
    console.log('----Função finalizada----');
}

function operacaoPassoAPasso(log, delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(log);
            resolve();
        }, delay);
    })
}

module.exports = operacaoAssincrona;