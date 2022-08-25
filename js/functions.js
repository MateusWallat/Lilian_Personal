function goToURL() {

    var number = '5527997257509'
    //! Numero deve seguir o formato 
    //! +55 (11) 9 0000-0000 ---> 5511900000000
    var link = 'https://wa.me/' + number + '?text='
    var introducao = "Olá eu sou " + $('#nome').val() + '%0A%0A';
    var msg = $('#assunto').val();
    
    var msgPadrao = 'Estou interessado(a) em fazer um orçamento'

    location.href = link;

    if($('#nome').val()){
        
        if($('#assunto').val()){

            location.href = link + introducao + msg;

        }else{

            location.href = link + introducao + msgPadrao;

        }

    }else{

        if($('#assunto').val()){

            location.href = link + msg;

        }else{

            location.href = link + msgPadrao;
            
        }

    }

}