function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value.length > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }

}