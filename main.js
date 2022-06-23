function getValue() {
    const selected = document.querySelector('input[type="radio"]:checked').value;
    let main=document.getElementsByClassName('main')[0];

    main.innerHTML = `<img src="./images/illustration-thank-you.svg" id="thanks">
    <p id="selected">You selected ${selected} out of 5.</p>
    <h2>Thank You!</h2>
    <p id="thanks-message">We appreciate you taking the time to give a rating.<br>If you ever need more support
        , don't hesistate to get in touch!
    </p>`;
};

let form = document.querySelector('form');
form.addEventListener('submit', getValue); 


