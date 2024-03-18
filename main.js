
let intervalId = '';
function add_time() {
    const label = document.getElementById('time');
    let passed_time = 0; // in seconds

    intervalId = setInterval(() => {
        passed_time++;
        let symbol = 's';
        let display_time = passed_time;

        if (passed_time >= 3600) {
            symbol = 'h';
            display_time = passed_time / 3600;
        } else if (passed_time >= 60) {
            symbol = 'm';
            display_time = passed_time / 60;
        }

        label.textContent = `Time not pressed: ${display_time.toFixed(2)}${symbol}`;
    }, 1000); // increment passed_time every second
}

let insults_count = [];

let insults = [
    'You lost mate',
    'Your so bad lol',
    'You suck',
    'You are a failure',
    'LOSER!!! 🫵🫵🫵',
    'u might wanna rethink your life tbh',
    'WHY just WHY did you have to press the button',
    'Boooo Boooo 👎👎',
    'You are a disgrace to humanity',
    '😡😡🤬🤬👎👎👎',
    'Stupidity is not a crime. You’re free to go.',
    'u r stupeed',
    "you flunked the test didn't you?",
    'You are a failure',
    'really, just really',
    'get better at uhh life',
    '👎',
]


function choose_insult() {
    let the_insult = insults[Math.floor(Math.random() * insults.length)];
    
    while (insults_count.includes(the_insult)) {
        if (insults_count.length >= insults.length) {
            return 'You have found all the insults, great job! 👀';
        }
        the_insult = insults[Math.floor(Math.random() * insults.length)];
    }

    insults_count.push(the_insult); // Add the insult to the table

    return the_insult;
}


let originalBody;

function button_pressed() {
    // Store the original state of the body
    originalBody = document.body.cloneNode(true);

    document.body.style.backgroundColor = 'red';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.flexDirection = 'column';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.transition = 'background-color 2s'; // Add a transition effect

    // Remove all existing elements from the body
    document.body.innerHTML = '';

    const label = document.createElement('h1');
    const p = document.createElement('p');
    const br = document.createElement('br');

    label.style.fontSize = '100px';
    label.style.color = 'white';
    label.style.opacity = '0'; // Start with the label invisible
    label.style.transition = 'opacity 2s'; // Add a transition effect
    label.textContent = choose_insult();

    p.style.color = 'white';
    p.style.marginTop = '20px'; // Add space above the p element
    p.textContent = "You have found " + Object.keys(insults_count).length + "/" + insults.length + ' insults';
    console.log(insults_count);
    

    // Add the label to the body
    document.body.appendChild(label);
    document.body.appendChild(br);
    document.body.appendChild(p);

    // After a short delay, make the label visible
    setTimeout(() => {
        label.style.opacity = '1';
    }, 200);

    setTimeout(restore_original_state, 5000);
}

function restore_original_state() {
    // Replace the current body with the original body
    document.body.replaceWith(originalBody);
    add_time();
}
document.addEventListener('DOMContentLoaded', function(){
    add_time();
})