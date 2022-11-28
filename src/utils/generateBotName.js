/**
 * Sets the bot's name if not already set in session storage
 * 
 * @example
   generateBotName();
 * 
 * @returns string
 */


export const generateBotName = () => {
  const storedBotName = sessionStorage.getItem('bot-name');
  if ( storedBotName ) return storedBotName;
  const uid = Math.floor(Math.random() * 9999999);
  const botName = `c-Bot${uid}`;
  sessionStorage.setItem('bot-name', botName);
  return botName;
};