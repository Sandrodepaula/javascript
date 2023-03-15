function contar(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO! Faltam dados')
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(txtinicio.value)
        let f = Number(txtfim.value)
        let p = Number(txtpasso.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }

        if (i < f){ //contagem crescente
            for(let c = i; c <= f; c += p) {  //contador começa com 1; enquanto o c for menor f ele recebe ele mesmo + o passo
                res.innerHTML += `${c} \u{1f449}` //o + nesse caso é concatenação  
            }
        
        } else {
             //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`    
    }
}