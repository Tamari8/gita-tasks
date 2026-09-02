const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const errorMsg = document.getElementById('error-message');
const themeBtn = document.getElementById('theme-btn');
const themeText = document.getElementById('theme-text');
const themeIcon = document.getElementById('theme-icon');

// Icons
const moonIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.656.656 0 00-.102-.924.703.703 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.612.625.625 0 00-.46-.808z"/></svg>`;
const sunIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.895 4.395v-3.79a.605.605 0 011.21 0v3.79a.605.605 0 01-1.21 0zM17.158 9.5H20.95a.605.605 0 010 1.21h-3.792a.605.605 0 010-1.21zM9.895 16.395v3.79a.605.605 0 011.21 0v-3.79a.605.605 0 01-1.21 0zM2.842 9.5H-.95a.605.605 0 010 1.21h3.792a.605.605 0 010-1.21zM14.935 3.32a.605.605 0 01.856 0l2.67 2.68a.605.605 0 01-.857.855l-2.67-2.68a.605.605 0 010-.855zM17.604 14.852a.605.605 0 010 .856l-2.67 2.67a.605.605 0 01-.857-.855l2.67-2.67a.605.605 0 01.857 0zM3.32 14.935a.605.605 0 010 .856l2.68 2.67a.605.605 0 01.855-.855l-2.68-2.67a.605.605 0 01-.855 0zM5.989 3.32a.605.605 0 010 .856l-2.67 2.68a.605.605 0 01-.857-.855l2.67-2.68a.605.605 0 01.857 0zM10.5 6.002a4.498 4.498 0 100 8.996 4.498 4.498 0 000-8.996z"/></svg>`;

// Theme Management
function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-theme');
    themeText.textContent = 'LIGHT';
    themeIcon.innerHTML = sunIcon;
    try { localStorage.setItem('theme', 'dark'); } catch(e) {}
  } else {
    document.body.classList.remove('dark-theme');
    themeText.textContent = 'DARK';
    themeIcon.innerHTML = moonIcon;
    try { localStorage.setItem('theme', 'light'); } catch(e) {}
  }
}

// Initialize Theme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let savedTheme = null;
try {
  savedTheme = localStorage.getItem('theme');
} catch(e) {}

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  setTheme(true);
} else {
  setTheme(false);
}

themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-theme');
  setTheme(!isDark);
});

// GitHub API
const API_URL = 'https://api.github.com/users/';

async function getUser(username) {
  try {
    const res = await fetch(API_URL + username);
    if (!res.ok) {
      if (res.status === 404) {
        errorMsg.style.display = 'block';
      }
      return;
    }
    errorMsg.style.display = 'none';
    const data = await res.json();
    renderUser(data);
  } catch (err) {
    console.error('Error fetching user:', err);
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return \`Joined \${date.toLocaleDateString('en-GB', options)}\`;
}

function checkNull(value, element) {
  const parent = element.parentElement;
  if (value === null || value === "") {
    parent.style.opacity = 0.5;
    return "Not Available";
  } else {
    parent.style.opacity = 1;
    return value;
  }
}

function renderUser(data) {
  // Avatar
  document.getElementById('avatar').src = data.avatar_url;
  
  // Header Info
  document.getElementById('name').textContent = data.name || data.login;
  document.getElementById('username').textContent = \`@\${data.login}\`;
  document.getElementById('username').href = data.html_url;
  document.getElementById('date').textContent = formatDate(data.created_at);

  // Bio
  const bio = document.getElementById('bio');
  if (data.bio) {
    bio.textContent = data.bio;
    bio.style.opacity = 1;
  } else {
    bio.textContent = 'This profile has no bio';
    bio.style.opacity = 0.75;
  }

  // Stats
  document.getElementById('repos').textContent = data.public_repos;
  document.getElementById('followers').textContent = data.followers;
  document.getElementById('following').textContent = data.following;

  // Links
  const locText = document.getElementById('location');
  locText.textContent = checkNull(data.location, locText);

  const twitterText = document.getElementById('twitter');
  const twValue = checkNull(data.twitter_username, twitterText);
  twitterText.textContent = twValue;
  if (data.twitter_username) {
    twitterText.href = \`https://twitter.com/\${data.twitter_username}\`;
    twitterText.style.pointerEvents = 'auto';
  } else {
    twitterText.removeAttribute('href');
    twitterText.style.pointerEvents = 'none';
  }

  const blogText = document.getElementById('blog');
  let blogValue = checkNull(data.blog, blogText);
  if (data.blog) {
    blogText.textContent = blogValue;
    blogText.href = data.blog.startsWith('http') ? data.blog : \`https://\${data.blog}\`;
    blogText.style.pointerEvents = 'auto';
  } else {
    blogText.textContent = "Not Available";
    blogText.removeAttribute('href');
    blogText.style.pointerEvents = 'none';
  }

  const compText = document.getElementById('company');
  const compValue = checkNull(data.company, compText);
  compText.textContent = compValue;
  if (data.company) {
    const companyName = data.company.replace('@', '');
    compText.href = \`https://github.com/\${companyName}\`;
    compText.style.pointerEvents = 'auto';
  } else {
    compText.removeAttribute('href');
    compText.style.pointerEvents = 'none';
  }
}

// Event Listeners
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = searchInput.value.trim();
  if (user) {
    getUser(user);
  }
});

// Initial Load
getUser('octocat');
