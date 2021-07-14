function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade >= 0 && idade <= 10){
                     // criança
                     img.setAttribute('src','homen-bebe.png')
                }
                else if (idade <= 21){
                    // jovem
                    img.setAttribute('src', 'homen-jovem.png')
                }
                else if (idade < 60){
                    img.setAttribute('src', 'homen-adulto.png')
                    // adulto
                }
                else {
                    //idos
                    img.setAttribute('src', 'idoso.png')
                }
               

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src','mulher-bebe.png')
           }
           else if (idade <= 21){
               // jovem
               img.setAttribute('src', 'mulher-jovem.png')
           }
           else if (idade < 60){
               img.setAttribute('src', 'mulher-adulta.png')
               // adulto
           }
           else {
               //idos
               img.setAttribute('src', 'idosa.png')
           }
            
        }
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }

}