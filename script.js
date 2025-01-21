// Function to submit a report
function submitReport() {
    const reportText = document.getElementById('report').value;
    
    if (reportText === "") {
        alert("Please describe the issue!");
        return;
    }

    const reportData = {
        issue: reportText,
        timestamp: new Date().toLocaleString()
    };

    // Store report data in localStorage (mocked as a simple database)
    let reports = JSON.parse(localStorage.getItem('reports')) || [];
    reports.push(reportData);
    localStorage.setItem('reports', JSON.stringify(reports));

    alert("Report submitted successfully!");
    document.getElementById('report').value = ""; // Clear the text area
}

// Function to show game rules
function showGameRules() {
    alert("Game rules: The game is based on skill. Your performance depends on your actions, not on luck.");
}

// Function to set time and spending limits
function setLimits() {
    const timeLimit = document.getElementById('time-limit').value;
    const spendingLimit = document.getElementById('spending-limit').value;

    if (!timeLimit || !spendingLimit) {
        alert("Please set both time and spending limits.");
        return;
    }

    const limits = {
        timeLimit: timeLimit,
        spendingLimit: spendingLimit
    };

    // Store limits data in localStorage
    localStorage.setItem('limits', JSON.stringify(limits));

    alert("Limits set successfully!");
}

// Function for User Login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Store username in localStorage (basic authentication simulation)
        localStorage.setItem('username', username);
        alert("Login successful!");
        displayUserData(); // Optional: Display logged-in user data
    } else {
        alert("Please enter username and password.");
    }
}

// Function to display logged-in user data (for personalization)
function displayUserData() {
    const username = localStorage.getItem('username');
    if (username) {
        alert(`Welcome, ${username}!`);
        // Optionally display username on the page
        document.getElementById('user-greeting').innerText = `Welcome, ${username}!`;
    }
}
