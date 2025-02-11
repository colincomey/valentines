function checkAnswers(event) {
    event.preventDefault();
    
    // Get form responses
    const anniversary = document.getElementById('q1').value;
    const song = document.getElementById('song').value.toLowerCase();
    const flower = document.getElementById('q2').value;
    const games = Array.from(document.querySelectorAll('input[name="games"]:checked')).map(cb => cb.value);
    const firstDate = document.querySelector('input[name="firstDate"]:checked')?.value;

    // Set correct answers (customize these!)
    const correctAnswers = {
        anniversary: '2023-01-26', // Change this to your actual anniversary
        flower: 'rose',
        games: ['connections', 'mini'], // Change these to the correct colors
        firstDate: 'blackfizz', // Change this to the correct location
        song: 'material girl'
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

    // Check flower
    if (flower === correctAnswers.flower) {
        score++;
        feedback.push("✅ You know my favorite flower!");
    } else {
        feedback.push("❌ My favorite flower is " + correctAnswers.flower);
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

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Score: ${score}/5</h2>
        ${feedback.join('<br>')}
        ${score === 5 ? '<h3>Perfect Score! You know me so well! ❤️</h3>' : '<h3>Keep learning about us! 😊</h3>'}
    `;
    resultDiv.style.display = 'block';
    resultDiv.className = score === 5 ? 'correct' : 'incorrect';

    return false;
}
