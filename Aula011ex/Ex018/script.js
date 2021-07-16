function clicar() {
    var numero = window.document.querySelector('input#txtn')
    var tab = window.document.querySelector('select#seltab')

    var numT = Number(txtn.value)
    
    tab.innerHTML = ''
    if (numT == 0){
        window.alert('Digite um valor!')
    } else{
        for (c = 1; c <= 10; c++){
            var r = (c * numT) 
            
            var item = document.createElement('option')
            item.text = `${c} x ${numT} = ${r} `
            tab.appendChild(item)
        }
    }

    
    
}