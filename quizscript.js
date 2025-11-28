document.getElementById('personality-quiz').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting normally
    
    // Get all radio buttons that are checked
    const answers = document.querySelectorAll('#personality-quiz input[type="radio"]:checked');
    
    // Check if all 5 questions have been answered
    if (answers.length < 5) {
        alert("Please answer all 5 questions before getting your assessment!");
        return;
    }

    let totalScore = 0;
    
    // Sum the values of the checked answers
    answers.forEach(answer => {
        // The value attribute in HTML is a string, so convert it to an integer
        totalScore += parseInt(answer.value, 10);
    });

    const resultBox = document.getElementById('quiz-result');
    const statusText = document.getElementById('status-text');
    const guidanceLink = document.getElementById('guidance-link');
    
    let status = '';
    let journeyZone = '';
    
    /* The total score ranges from a minimum of 5 (1 point per question) 
    to a maximum of 15 (3 points per question). 
    
    Scoring Tiers:
    5 - 7: Lowest Self-Awareness (Comfort/Fear Zone)
    8 - 11: Developing Self-Awareness (Fear/Learning Zone)
    12 - 15: High Self-Awareness (Learning/Growth Zone)
    */
    
    if (totalScore >= 12) {
        status = "You have a **High Level of Self-Awareness!**";
        journeyZone = "You are likely in the **Learning Zone** or **Growth Zone**.";
    } else if (totalScore >= 8) {
        status = "You are in the **Developing Stage** of Self-Awareness.";
        journeyZone = "You are likely navigating the **Fear Zone** and moving into the **Learning Zone**.";
    } else { // Score 5-7
        status = "Your self-awareness journey is just **beginning.**";
        journeyZone = "You are likely in the **Comfort Zone** or just entering the **Fear Zone**.";
    }

    // Display the results
    statusText.innerHTML = `Your Score: **${totalScore} / 15**.<br><br>${status} ${journeyZone}`;
    guidanceLink.innerHTML = 'For guidance on your next steps, visit your <a href="status.html">My Journey Map</a>.';
    
    // Make the result box visible
    resultBox.style.display = 'block';
    
    // Scroll down to the result for visibility
    resultBox.scrollIntoView({ behavior: 'smooth' });
});