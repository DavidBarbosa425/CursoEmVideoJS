function clicar(){
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 )
    {
        window.alert('[ERRO] Faltam Dados!')
    }
    else
    {
        res.innerHTML = ('Contando...')
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p= Number(passo.value)

        if (p <= 0) {
            window.alert('Impossível Contar!')
            p = 1  
        } 
           else if (i <f)
            {
                for (var c = i; c <= f; c +=p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            } else 
            {
                for (var c = i; c >= f; c -=p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            } 
        
        res.innerHTML += `\u{1F3C1}`
        
    }
   
    
}