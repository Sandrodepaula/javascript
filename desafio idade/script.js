function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
     
    if (ano.value.length == 0 || ano.value > anoAtual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(ano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        if (fsexo[0]. checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', )
            }else if (idade < 21){
                //jovem
            } else if (idade < 50) {
                //Adulto
            } else{
                //idoso
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
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

}   



