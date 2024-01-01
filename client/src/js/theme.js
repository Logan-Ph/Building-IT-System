// Always set the light theme on page load
document.documentElement.classList.remove('dark');

// Set the theme to light in localStorage
localStorage.theme = 'light';

// Since you're always using the light theme, there's no need to check for user's preference or system settings.
// Therefore, the code related to adding 'dark' class, choosing dark mode, and respecting OS preference can be removed.
