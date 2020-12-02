//Criei um array String para ficar mais facil a iteração da lista para ficar mais facil mudar a cor dos pontinhos
var bgs = ['bg', 'bg1', 'bg2', 'bg3']

//Já chamo de cara a funcão no carregamento da tela para colocar a cor branca no pontinho
changeSlide('0px', 'bg');

function dots() {
    changeSlide('0px', 'bg');
}

function dots2() {
    changeSlide('-880px', 'bg1');
}

function dots3() {
    changeSlide('-1760px', 'bg2');
}

function dots4() {
    changeSlide('-2640px', 'bg3');
}


function changeSlide(marginLeft, bg) {
    document.getElementById('slide-cont').style.marginLeft = marginLeft;

    //Esse for executa item a item que esta na lista iniciada lá em cima (['bg', 'bg1', 'bg2', 'bg3'])
    //Arrow Function que vai receber o item que foi iterado no FOR
    bgs.forEach(item => {
        //Compara item a item da lista de bgs e compara se é o cara que vamos pintar de branco... c não deixa o cinza 
        if (item == bg) {
            document.getElementById(item).style.backgroundColor = '#ccc';
        } else {
            document.getElementById(item).style.backgroundColor = '#aaa';
        }
    })
}