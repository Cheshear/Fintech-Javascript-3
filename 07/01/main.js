
let input;
let reference;
window.onload=function () {

  input = document.getElementById("phone");
  reference = document.getElementById('reference');
  input.addEventListener('keydown', phoneMask);
};
const numberOfDigits = 10;

const digitCode = [];
for(i=48; i < 58; ++i){
  digitCode.push(i);
}

const backspaceCode = 8;
let counter = 0;

function putElement(counter, evt) {
  let value = input.value;
  let pos=0;
  let a;
  let values=value.split(' ');
  if(counter<4){
    if(counter===1){
      a=values[2].split('');
      a[1]=evt.key;
      values[2]=a.join('');
    }else if(counter===3){
      a=values[4].split('');
      a[0]=evt.key;
      values[4]=a.join('');
    }else {
      values[3]=evt.key;
    }
  }else if(counter>3 && counter<7){
    pos=2+counter;
    values[pos]=evt.key;
  }else if(counter>6 && counter<9){
    pos=3+counter;
    values[pos]=evt.key;
  }else if(counter>8){
    pos=4+counter;
    values[pos]=evt.key;
  }
  input.value=values.join(' ');
}

function deleteElement(counter) {
  let value = input.value;
  let pos = 0;
  let values=value.split(' ');
  if(counter<4){
      if(counter===1){
        a=values[2].split('');
        a[1]='_';
        values[2]=a.join('');
      }else if(counter===3){
        a=values[4].split('');
        a[0]='_';
        values[4]=a.join('');
      }else {
        values[3] = '_';
      }
    }else if(counter>3 && counter<7){
      pos=2+counter;
      values[pos]='_';
    }else if(counter>6 && counter<9){
      pos=3+counter;
      values[pos]='_';
    }else if(counter>8){
      pos=4+counter;
      values[pos]='_';
    }
  input.value=values.join(' ');
}
function changeReference() {
  let phoneNumber='+';
  let value = input.value;
  phoneNumber+=value.replace(/\D/g,'');
  reference.textContent = `Позвонить на ${input.value}`;
  reference.setAttribute('href', `tel:${phoneNumber}`);
  reference.classList.toggle('shown', phoneNumber.length === 11);
}


function phoneMask(evt) {
  let charCode = evt.keyCode;
  if (digitCode.includes(charCode) && counter < numberOfDigits) {
    event.preventDefault();
    counter++;
    putElement(counter, evt);
  }
  else if (charCode === backspaceCode && counter > 0) {
    event.preventDefault();
    deleteElement(counter);
    counter--;
  }
  else{
    event.preventDefault();
  }
  changeReference();

}