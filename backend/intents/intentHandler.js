const fs = require('fs');
const path = require('path');

class IntentHandler {
  constructor() {
    this.intents = this.loadIntents();
  }

  loadIntents() {
    try {
      const data = fs.readFileSync(path.join(__dirname, 'intents.json'), 'utf8');
      return JSON.parse(data).intents;
    } catch (err) {
      console.error('Error loading intents:', err);
      return [];
    }
  }

  findIntent(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Check for exact matches first
    for (const intent of this.intents) {
      for (const pattern of intent.patterns) {
        if (input === pattern.toLowerCase()) {
          return intent;
        }
      }
    }

    // Check for partial matches if no exact match found
    for (const intent of this.intents) {
      for (const pattern of intent.patterns) {
        if (input.includes(pattern.toLowerCase())) {
          return intent;
        }
      }
    }

    // Return fallback intent if no matches
    return this.intents.find(intent => intent.tag === 'fallback');
  }

  getResponse(userInput) {
    const intent = this.findIntent(userInput);
    if (!intent) return this.getFallbackResponse();
    
    const randomIndex = Math.floor(Math.random() * intent.responses.length);
    return intent.responses[randomIndex];
  }

  getFallbackResponse() {
    const fallback = this.intents.find(intent => intent.tag === 'fallback');
    return fallback ? fallback.responses[0] : "I'm not sure how to respond to that.";
  }
}

module.exports = IntentHandler;
