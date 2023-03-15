function gerar(){
    let num = document.getElementById(txtnum)
    let tab = document.getElementById(seltab)

    if (num.ariaValueMax.length==0){
        window.alert('[ERRO!] Digite um valor')

    } else{
        let n = Number(num.value)
        let c = 1

        while(c <= 10){
            let item = document.createElement('option')
            item.text = ${n} x ${c} = ${n*c}
            tab.appendChild(item)
        }
    }

}