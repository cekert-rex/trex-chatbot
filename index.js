const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const responses = {
    'hi': 'Hello!',
    'how are you': 'I am good, thank you!',
    'bye': 'Goodbye!'
  };
  
  readline.question('You: ', input => {
    const response = responses[input.toLowerCase()] || 'I don\'t understand.';
    console.log(`Trex: ${response}`);
    readline.close();
  });
  