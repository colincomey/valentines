function checkAnswers(event) {
    event.preventDefault();
    
    // Get form responses
    const anniversary = document.getElementById('q1').value;
    const song = document.getElementById('song').value.toLowerCase();
    const wine = document.getElementById('wine').value;
    const games = Array.from(document.querySelectorAll('input[name="games"]:checked')).map(cb => cb.value);
    const firstDate = document.querySelector('input[name="firstDate"]:checked')?.value;
    const valentine = document.querySelector('input[name="valentine"]:checked')?.value;

    // Set correct answers (customize these!)
    const correctAnswers = {
        anniversary: '2023-01-26', // Change this to your actual anniversary
        wine: 'cabslob',
        games: ['connections', 'mini'], // Change these to the correct colors
        firstDate: 'blackfizz', // Change this to the correct location
        song: 'material girl',
        valentine : 'yes'
    };

    // Calculate score
    let score = 0;
    let feedback = [];

    // Check anniversary
    if (anniversary === correctAnswers.anniversary) {
        score++;
        feedback.push("✅ You remembered our anniversary!");
    } else {
        feedback.push("❌ Our anniversary is " + correctAnswers.anniversary);
    }

    // Check Song
    if (song === correctAnswers.song) {
        score++;
        feedback.push("✅ You know our song!");
    } else {
        feedback.push("❌ Our song is " + correctAnswers.anniversary);
    }

    // Check wine
    if (wine === correctAnswers.wine) {
        score++;
        feedback.push("✅ Yeyy Cayspah!");
    } else {
        feedback.push("❌ Casper's favourite wine is in fact " + correctAnswers.flower);
    }

    // Check colors
    const correctGames = games.every(games => correctAnswers.games.includes(games)) 
        && games.length === correctAnswers.games.length;
    if (correctGames) {
        score++;
        feedback.push("✅ You know our games!");
    } else {
        feedback.push("❌ Our games are: " + correctAnswers.colors.join(", "));
    }

    // Check first date
    if (firstDate === correctAnswers.firstDate) {
        score++;
        feedback.push("✅ You remember our first date!");
    } else {
        feedback.push("❌ Our first date was at the " + correctAnswers.firstDate);
    }

        // Check valentine
        if (valentine === correctAnswers.valentine) {
            score++;
            feedback.push("✅ YAYYYY!");
        } else {
            feedback.push("❌ NAURRRR");
        }

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Score: ${score}/6</h2>
        ${feedback.join('<br>')}
        ${score === 6 ? '<h3>Perfect Score! You\'re the best girlfriend ever! ❤️</h3>' : '<h3>Not quite. But you\'re still the best girlfriend ever! 😊</h3>'}
    `;
    resultDiv.style.display = 'block';
    resultDiv.className = score === 5 ? 'correct' : 'incorrect';

    return false;
}
