import { DateTime } from './luxoncode.js';

function currentTime() {
  const date = document.getElementById('date');

  setInterval(() => {
    const now = DateTime.now();
    date.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
}

// eslint-disable-next-line import/prefer-default-export
export { currentTime };
