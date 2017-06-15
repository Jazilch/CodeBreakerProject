let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value = ' ' || attempt.value = ' '){
      setHiddenFields();
    }
}

function setHiddenFields(){
  answer.value = Math.floor(Math.random() * 10000).toString();
  while(answer.value.length < 4){
    answer.value = "0" + answer.value;
  }
  attempt.value = "0";
}

function setMessage(message){
  document.getElementById('message').innerHTML = message;
}

function validateInput(input){
  if(input.length != 4){
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
    return true;

}
