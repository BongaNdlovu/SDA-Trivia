// leaderboard-server.js
// Simple Express backend for a global trivia leaderboard

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for all origins (for development)
app.use(cors());
// Parse JSON bodies
app.use(express.json());

// In-memory leaderboards by question count
const VALID_COUNTS = [10, 20, 50, 100];
let leaderboards = {
  10: [],
  20: [],
  50: [],
  100: []
};

// POST /submit - Add a new score
app.post('/submit', (req, res) => {
  const { name, score, time, questionCount } = req.body;
  if (
    typeof name === 'string' &&
    typeof score === 'number' &&
    typeof time === 'number' &&
    VALID_COUNTS.includes(Number(questionCount))
  ) {
    const count = Number(questionCount);
    leaderboards[count].push({ name, score, time, date: new Date(), questionCount: count });
    // Sort: highest score, then fastest time
    leaderboards[count].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.time - b.time;
    });
    // Keep only top 10
    leaderboards[count] = leaderboards[count].slice(0, 10);
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: 'Invalid data' });
  }
});

// GET /leaderboard?questionCount=XX - Get top scores for a question count
app.get('/leaderboard', (req, res) => {
  const count = Number(req.query.questionCount);
  if (VALID_COUNTS.includes(count)) {
    res.json(leaderboards[count]);
  } else {
    // Default: return all leaderboards
    res.json(leaderboards);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Leaderboard server running on http://localhost:${PORT}`);
}); 