const myForm = document.querySelector('#my-form')
const msgOdabir = document.querySelector('.msgOdabir')
const msgRand = document.querySelector('.msgRand')
const msgReza = document.querySelector('.msgReza')
const dropDown = document.querySelector('#dropDownOdabir')
myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
  e.preventDefault();

    let odabraniBroj = parseInt(dropDown.value)
    let random = Math.floor((Math.random()*3)+1)
    
    switch (odabraniBroj) {
      case 1:
        msgOdabir.innerHTML="Vas odabir je bio: kamen";
        break;
      case 2:
        msgOdabir.innerHTML="Vas odabir je bio: skare";
        break;
      case 3:
        msgOdabir.innerHTML="Vas odabir je bio: papir";
        break;
    }

    switch (random) {
      case 1:
        msgRand.innerHTML="Njegov odabir je bio: kamen";
        break;
      case 2:
        msgRand.innerHTML="Njegov odabir je bio: skare";
        break;
      case 3:
        msgRand.innerHTML="Njegov odabir je bio: papir";
        break;
    }

    if (random === 1 && odabraniBroj === 1 || random === 2 &&   odabraniBroj === 2 || random === 3 && odabraniBroj === 3){
      msgReza.classList.add('nerjeseno')
      msgReza.innerHTML="Nerjeseno!";
    }

    else if (random === 1 && odabraniBroj === 2 || random === 2 && odabraniBroj === 3 || random === 3 && odabraniBroj === 1){
      msgReza.classList.add('poraz')
      msgReza.innerHTML="Izgubili ste!";
    }
      
    else{
      msgReza.classList.add('pobjeda')
      msgReza.innerHTML="Pobjedili ste!";
    }
}