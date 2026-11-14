// Week 10: Time-Based Greeting
const greetingElement = document.querySelector('#greeting');
const currentHour = new Date().getHours();

if (greetingElement) {
  if (currentHour < 12) {
    greetingElement.textContent = "Good morning! Welcome to my portfolio.";
  } else if (currentHour < 18) {
    greetingElement.textContent = "Good afternoon! Welcome to my portfolio.";
  } else {
    greetingElement.textContent = "Good evening! Welcome to my portfolio.";
  }
}

// Week 11: Dark Mode Button Event Listener
const themeButton = document.querySelector('#theme-toggle');

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}