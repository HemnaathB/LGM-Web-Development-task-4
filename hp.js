let hp = document.getElementById('hp');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                hp.innerText = '';
                break;
            case '=':
                try{
                    hp.innerText = eval(hp.innerText);
                } catch {
                    hp.innerText = "Error"
                }
                break;
            case '←':
                if (hp.innerText){
                   java.innerText = hp.innerText.slice(0, -1);
                }
                break;
            default:
                hp.innerText += e.target.innerText;
            }
    });
});
