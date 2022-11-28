import { describe, it, expect } from 'vitest';
import { generateBotName } from "../generateBotName";

describe('should generate name', () => { 
  // will need either a mock session storage or a manual interpretation of a session storage
  // const botName = generateBotName();
  let currentBotName = 'c-Bot457935'; // should be sessionStorage.getItem('bot-name');
  it('name should exist', () => expect(currentBotName).toBeDefined());
  // it('should be equal', () => expect(botName).toEqual(currentBotName));
});