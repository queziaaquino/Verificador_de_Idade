function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados novamente!')

    }else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      
      
      if (fsex[0].checked){
        genero = 'Homem'
        if(idade>=0 && idade<10){
          img.setAttribute('src', 'menino.jpg')

        }else if (idade <21){
          img.setAttribute('src', 'boyzinho.jpg')

        }else if (idade <60){
          img.setAttribute('src', 'homem.jpg')

        }else {
          img.setAttribute('src', 'senhor.jpg')

        }
        
      }else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade>=0 && idade<10){
          img.setAttribute('src', 'menina.jpg')

        }else if (idade <21){
          img.setAttribute('src', 'boyzinha.jpg')

        }else if (idade <60){
          img.setAttribute('src', 'mulher.jpg')

        }else {
          img.setAttribute('src', 'senhora.jpg')
          
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
    }
}