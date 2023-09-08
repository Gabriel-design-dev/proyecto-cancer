// Set up variables and initialize game board
var scene = document.getElementById('scene');
var email = document.getElementById('email');
var checkBtn = document.getElementById('check-btn');

var phishWords = ['urgency', 'password', 'security', 'verify', 'bank', 'login', 'paypal', 'click', 'link'];
var currentEmail = '';
var currentScene = '';
var phishCount = 0;
var gameInProgress = false;

// Function to generate a random email with phishing words
function generateEmail() {
    var randomWords = [];
    for (var i = 0; i < 10; i++) {
        randomWords.push(phishWords[Math.floor(Math.random() * phishWords.length)]);
    }
    currentEmail = '<h2>From: support@bank.com</h2><p>Dear customer,</p><p>Please click on the following link to verify your account: <a href="#">' + randomWords.join('') + '</a></p><p>Thank you,</p><p>The Bank Team</p>';
    email.innerHTML = currentEmail;
}

// Function to generate a random scene
function generateScene() {
    var scenes = ['office', 'cafe', 'store'];
    currentScene = scenes[Math.floor(Math.random() * scenes.length)];
    scene.className = 'scene ' + currentScene;
}

// Function to check if email contains phishing words
function checkEmail() {
    if (!gameInProgress) {
        return;
    }
    if (currentEmail.includes(phishWords[phishCount])) {
        phishCount++;
        if (phishCount === phishWords.length) {
            alert('You caught the phishing email!');
            resetGame();
        }
    } else {
        alert('This email is safe.');
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    phishCount = 0;
    gameInProgress = false;
    generateEmail();
    generateScene();
}

// Event listener for check email button
checkBtn.addEventListener('click', checkEmail);

// Initialize game board
resetGame();
gameInProgress = true;
