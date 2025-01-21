// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Store username in localStorage
        localStorage.setItem('username', username);
        
        // Show login success message in a gamer style
        const message = document.getElementById('login-message');
        message.textContent = `Welcome, ${username}! Login Successful!`;
        message.classList.remove('hidden');
        
        // Clear login fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert("Please enter username and password.");
    }
}

// Function to submit report and ask follow-up questions
function submitReport() {
    const concern = document.getElementById('concern').value;
    const gameName = document.getElementById('game-name').value;
    const reportText = document.getElementById('report').value;
    const assistanceNumber = document.getElementById('assistance-number').value;

    if (!concern || !gameName || !reportText || !assistanceNumber) {
        alert("Please fill out all fields.");
        return;
    }

    const reportData = {
        concern,
        gameName,
        report: reportText,
        assistanceNumber,
        timestamp: new Date().toLocaleString()
    };

    // Store report data in localStorage
    let reports = JSON.parse(localStorage.getItem('reports')) || [];
    reports.push(reportData);
    localStorage.setItem('reports', JSON.stringify(reports));

    alert("Report submitted successfully!");

    // Clear report fields
    document.getElementById('concern').value = '';
    document.getElementById('game-name').value = '';
    document.getElementById('report').value = '';
    document.getElementById('assistance-number').value = '';
}

// Function to show game rules for 10 games
function showGameRules() {
    const gameRules = {
        "PUBG": [
            "No cheating or using hacks.",
            "Respect other players and play fairly.",
            "Follow the game's age rating guidelines."
        ],
        "Minecraft": [
            "Respect the game community.",
            "No griefing or destroying others' builds.",
            "Use in-game resources fairly."
        ],
        "Fortnite": [
            "Play responsibly, no cheating.",
            "Respect the age rating and game content.",
            "Avoid toxic behavior."
        ],
        "Apex Legends": [
            "Play as a team and communicate.",
            "No trolling or throwing the game.",
            "Follow the code of conduct."
        ],
        "League of Legends": [
            "Be respectful to teammates and opponents.",
            "No trolling, spamming, or flaming.",
            "Play for the fun of the game."
        ],
        "Valorant": [
            "No cheating, using hacks, or exploiting.",
            "Communicate and coordinate with your team.",
            "Maintain sportsmanship."
        ],
        "Call of Duty": [
            "Play fairly and respect the rules.",
            "Avoid using unfair advantages.",
            "Respect other players."
        ],
        "Overwatch": [
            "Work as a team and coordinate.",
            "No harassment or toxic behavior.",
            "Follow the community guidelines."
        ],
        "Rocket League": [
            "No cheating or using exploits.",
            "Respect the community and players.",
            "Don't ruin the fun for others."
        ],
        "FIFA": [
            "Play the game fairly.",
            "Respect the rules of the game.",
            "No abusive language or behavior."
        ]
    };

    let rulesHTML = '';
    for (const [game, rules] of Object.entries(gameRules)) {
        rulesHTML += `<h3>${game}</h3><ul>`;
        rules.forEach(rule => {
            rulesHTML += `<li>${rule}</li>`;
        });
        rulesHTML += '</ul>';
    }

    // Show the modal with all rules
    document.getElementById('rules-list').innerHTML = rulesHTML;
    document.getElementById('game-rules-modal').style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById('game-rules-modal').style.display = "none";
}

// Function to submit community feedback
function submitFeedback() {
    const feedback = document.getElementById('community-suggestion').value;
    
    if (!feedback) {
        alert("Please provide feedback.");
        return;
    }

    // Store feedback in localStorage
    let feedbackData = JSON.parse(localStorage.getItem('feedback')) || [];
    feedbackData.push({ feedback, timestamp: new Date().toLocaleString() });
    localStorage.setItem('feedback', JSON.stringify(feedbackData));

    alert("Thank you for your feedback!");

    // Clear the feedback field
    document.getElementById('community-suggestion').value = '';
}
