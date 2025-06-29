const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMsg = errorDiv.querySelector('p');
const ipInfoDiv = document.getElementById('ipInfo');
const infoGrid = document.getElementById('infoGrid');

let ipAddress = null;

// Mock API
function mockFetchIpData(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (query.toLowerCase() === 'invalid') {
        resolve(null);
        return;
      }

      const isIPv6 = query.includes(':');
      const isPrivate = query.startsWith('192.168.') || query.startsWith('10.') || query.startsWith('172.16.');

      resolve({
        ip: query,
        country: isPrivate ? 'Local Network' : 'United States',
        region: isPrivate ? 'N/A' : 'California',
        city: isPrivate ? 'N/A' : 'San Francisco',
        lat: isPrivate ? 0 : 37.7749,
        lon: isPrivate ? 0 : -122.4194,
        timezone: isPrivate ? 'UTC' : 'America/Los_Angeles',
        postal: isPrivate ? '' : '94107',
        org: isPrivate ? 'Internal Network' : 'Cloudflare, Inc',
        asn: isPrivate ? '' : 'AS13335',
        country_flag: isPrivate ? '🔒' : '🇺🇸',
        type: isIPv6 ? 'IPv6' : 'IPv4',
      });
    }, 800);
  });
}

async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;

  showLoading(true);
  showError(null);
  ipInfoDiv.classList.add('hidden');

  try {
    const data = await mockFetchIpData(query);
    if (!data) {
      throw new Error('Invalid IP address or no data found.');
    }
    updateUI(data);
  } catch (err) {
    showError(err.message);
  } finally {
    showLoading(false);
  }
}

function updateUI(data) {
  infoGrid.innerHTML = '';
  const entries = [
    ['IP Address', data.ip],
    ['Type', data.type],
    ['Country', `${data.country_flag} ${data.country}`],
    ['Region', data.region],
    ['City', data.city],
    ['Postal Code', data.postal || 'N/A'],
    ['Coordinates', `${data.lat}, ${data.lon}`],
    ['ISP', `${data.asn} - ${data.org}`],
    ['Timezone', data.timezone]
  ];

  entries.forEach(([label, value]) => {
    const card = document.createElement('div');
    card.className = 'bg-gray-700 rounded-lg p-4';
    card.innerHTML = `
      <h3 class="text-sm text-gray-400 uppercase tracking-wider">${label}</h3>
      <p class="mt-1 text-lg font-medium">${value}</p>
    `;
    infoGrid.appendChild(card);
  });

  ipInfoDiv.classList.remove('hidden');
}

function showLoading(show) {
  loadingDiv.classList.toggle('hidden', !show);
}

function showError(message) {
  if (message) {
    errorMsg.textContent = message;
    errorDiv.classList.remove('hidden');
  } else {
    errorDiv.classList.add('hidden');
  }
}

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

// Initial Load
window.addEventListener('DOMContentLoaded', async () => {
  showLoading(true);
  try {
    const data = await mockFetchIpData('8.8.8.8'); // Default IP to show on load
    updateUI(data);
  } catch (err) {
    showError('Failed to load initial data.');
  } finally {
    showLoading(false);
  }
});
