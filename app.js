/*
User stories:
1. I can see a random motivation quote.
2. I can press a button to generate a different quote.
*/

// Generate random quote

var generateQuote = function() {
  var quotes = {
    1: `I can and I will.`,
    2: `Take a deep breath. Loosen your shoulders. Unclench your teeth. Drink some water.`,
    3: `Take a walk outside. Think about the good things in your life. Remember that you are loved and valued.`,
    4: `"Imposter syndrome will have you questioning your place in the spaces that you prayed about being in. It’s a lie. You’re capable. You’re allowed to learn. You belong."<br></br>-Jonathon Pulliam`,
    5: `"Put the things that ground you, heal you, and hold you in your way. Make it impossible to not stumble over them everyday."<br></br>-Chani Nicholas`,
    6: `"Unlike computers…human beings aren’t meant to operate continuously, at high speeds, for long periods of time. Rather, we’re designed to move rhythmically between spending and renewing our energy."<br></br>-Tony Schwartz`,
    7: `"If you are ever unsure about what to do in a situation, you can always ask: How can I become as present as possible, with kindness to myself and others, in this moment? What is available to me right now?"<br></br>-Dr. Dennis Tirch`,
    8: `"Forgive yourself for not knowing what you didn’t know before you learned it."<br></br>-Maya Angelou`,
    9: `"The real difficulty is to overcome how you think about yourself."<br></br>-Maya Angelou`,
    10: `"Note to self: making things feels better than not making things."<br></br>-Mitch Goldstein`,
    11: `Persistence, patience, passion, puppies`,
    12: `"A problem well-stated is a problem half solved."<br></br>-Charles Kettering`,
    13: `"State the problem in words as clearly as possible"<br></br>-Brian Eno, Oblique Strategies`,
    14: `"You can learn a lot from failure. Use it as a learning opportunity instead of letting it demotivate you."<br></br>-Ali Spittel`,
    15: `"Never forget how vitally capable you are."<br></br>-Esmé Weijun Wang`,
    16: `"By becoming a programmer, you're accepting that you'll never truly know everything; there's always going to be room for growth. That's the fun part!"<br></br>-Kelly Vaughn`,
    17: `"Consult other sources."<br></br>-Brian Eno, Oblique Strategies`,
    18: `"Courage!"<br></br>-Brian Eno, Oblique Strategies`,
    19: `"Take a break."<br></br>-Brian Eno, Oblique Strategies`
  };
  var randomKey = Math.floor(Math.random() * (20 - 1)) + 1;
  var randomQuote = quotes[randomKey];
  document.querySelector('#quote').innerHTML = `${randomQuote}`;

  // Render quote to the DOM
};
generateQuote();

// Add button click functionality
document.querySelector('button').addEventListener('click', function() {
  generateQuote();
});
