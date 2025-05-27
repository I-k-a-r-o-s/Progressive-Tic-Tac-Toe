import { useEffect, useState } from 'react';
export default function DarkModeToggle() {
// Toggle dark mode class on body
const [dark, setDark] = useState(true);
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [dark]);

  return (
    <button className="reset-btn" onClick={() => setDark((d) => !d)}>
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
