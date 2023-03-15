function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var ano = document.getElementById('txtano')
    var r
    es = document.querySelector('div#res')
     
    if (ano.value.length == 0 || ano.value > anoAtual){          //verifica se o campo está vazio OU é maior que o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(ano.value)      
        var genero = '' //começa vazia pois não tem um gênero selecionado
        var img = document.createElement('img') //gerando img dinamicamento no JS
        img.setAttribute('id', 'foto') //gerando um id = foto 

        if (fsex[0]. checked){ //se o campo que estiver marcado (checked) for o '0' então é masculino
            genero = 'Homem'       
            if(idade >=0 && idade < 10) {    //criança
                img.setAttribute('src', 'criança.jpg' )

            }else if (idade < 21){    //jovem
                img.setAttribute('src', 'homem_jovem.jpg' )

            } else if (idade < 50) {  //Adulto
                img.setAttribute('src', 'homem_adulto.jpg' )
            } else{  //idoso
                img.setAttribute('src', 'homem_velho.jpg' )
            }
                

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //criança
            }else if (idade < 21){
                //jovem
            } else if (idade < 50) {
                //Adulto
            } else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}   



