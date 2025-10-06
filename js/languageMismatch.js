(() => {
  // <stdin>
  (function() {
    const DISMISSED_KEY = "langMismatchDismissed";
    if (localStorage.getItem(DISMISSED_KEY)) {
      return;
    }
    const path = window.location.pathname;
    const isEnglishPage = path.startsWith("/en/");
    const pageLanguage = isEnglishPage ? "en" : "de";
    const browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
    const prefersEnglish = browserLang.startsWith("en");
    const prefersGerman = browserLang.startsWith("de");
    let shouldShow = false;
    let suggestedUrl = "";
    let currentLangName = "";
    let suggestedLangName = "";
    if (pageLanguage === "de" && prefersEnglish) {
      shouldShow = true;
      currentLangName = "Deutsch";
      suggestedLangName = "English";
      suggestedUrl = "/en" + path;
    } else if (pageLanguage === "en" && prefersGerman && !prefersEnglish) {
      shouldShow = true;
      currentLangName = "English";
      suggestedLangName = "Deutsch";
      suggestedUrl = path.replace(/^\/en/, "") || "/";
    }
    if (!shouldShow) return;
    const dialog = document.createElement("div");
    dialog.className = "lang-dialog-container";
    dialog.style.cssText = `
    position: fixed;
    bottom: 16px;
    right: 16px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 14px 16px;
    max-width: calc(100vw - 32px);
    width: max-content;
    z-index: 10000;
    font-family: system-ui, -apple-system, sans-serif;
    animation: slideIn 0.3s ease-out;
  `;
    const message = pageLanguage === "de" ? `This page is available in English.` : `Diese Seite ist auf Deutsch verf\xFCgbar.`;
    const switchText = pageLanguage === "de" ? `Switch to English` : `Zu Deutsch wechseln`;
    const stayText = pageLanguage === "de" ? `No thanks` : `Nein danke`;
    dialog.innerHTML = `
    <style>
      .lang-dialog-container {
        --bg: white;
        --text: #333;
        --accent: #16a34a;
        --accent-dark: #15803d;
        --accent-light: #f0fdf4;
        --border-width: 2px;
      }

      @media (prefers-color-scheme: dark) {
        .lang-dialog-container {
          --bg: #1f2937;
          --text: #f1f1f4;
          --accent: #0fdd42;
          --accent-dark: #00002d;
          --accent-light: #374151;
        }
      }

      @keyframes slideIn {
        from {
          transform: translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .lang-dialog-container {
        background: var(--bg);
      }

      .lang-dialog-message {
        margin: 0 0 12px 0;
        color: var(--text);
        font-size: 14px;
        line-height: 1.4;
      }

      .lang-dialog-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: nowrap;
      }

      .lang-dialog-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;
      }

      .lang-dialog-btn-primary {
        background: var(--accent);
        color: var(--bg);
        border: var(--border-width) solid var(--accent);
      }

      .lang-dialog-btn-primary:hover {
        background: var(--accent-dark);
        color: var(--bg);
      }

      .lang-dialog-btn-secondary {
        background: var(--bg);
        color: var(--accent);
        border: var(--border-width) solid var(--accent);
      }

      .lang-dialog-btn-secondary:hover {
        background: var(--accent-light);
      }

      @media (prefers-color-scheme: dark) {
        .lang-dialog-btn-primary {
          color: var(--accent-dark);
        }

        .lang-dialog-btn-primary:hover {
          background: var(--accent);
          color: var(--accent-dark);
        }

        .lang-dialog-btn-secondary {
          background: transparent;
        }
      }
    </style>
    <p class="lang-dialog-message">${message}</p>
    <div class="lang-dialog-buttons">
      <button class="lang-dialog-btn lang-dialog-btn-secondary" id="langDialogStay">${stayText}</button>
      <a href="${suggestedUrl}" class="lang-dialog-btn lang-dialog-btn-primary">${switchText}</a>
    </div>
  `;
    document.body.appendChild(dialog);
    dialog.querySelector("#langDialogStay").addEventListener("click", function() {
      localStorage.setItem(DISMISSED_KEY, "true");
      dialog.style.animation = "slideIn 0.3s ease-out reverse";
      setTimeout(() => dialog.remove(), 300);
    });
  })();
})();
