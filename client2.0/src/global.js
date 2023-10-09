// globals.js
let userGlobalValue = 0;
let venueGlobalValue = 0;
let levelGlobalValue = 0;
let emailGlobalValue = '';

//USER ID
export function getUserVariable() {
  return userGlobalValue;
}

export function setUserVariable(newValue) {
  userGlobalValue = newValue;
}

//VENUE ID
export function getVenueVariable() {
  return venueGlobalValue;
}

export function setVenueVariable(newValue) {
  venueGlobalValue = newValue;
}

//LEVEL
export function getLevelVariable(){
  return levelGlobalValue;
}

export function setLevelVariable(newValue) {
  levelGlobalValue = newValue;
}

//EMAIL
export function getEmailVariable(){
  return emailGlobalValue;
}

export function setEmailVariable(newValue) {
  emailGlobalValue = newValue;
}