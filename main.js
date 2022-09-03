function getValue(e) {
    e.preventDefault();
    const selected = document.querySelector('input[type="radio"]:checked').value;

    let rate=document.getElementsByClassName('rate')[0];
    let thanks=document.getElementsByClassName('thanks')[0];
    let text=document.getElementById('selected');

    text.innerHTML=`You selected ${selected} out of 5.`

    rate.style.display = 'none';
    rate.style.display = 'hidden';
    thanks.style.display = 'flex';

};

let form = document.querySelector('form');
form.addEventListener('submit', getValue); 


