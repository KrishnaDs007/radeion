# Future Extension Architecture

No extension code is included in this project.

If Radeion later needs a browser extension, build it as a separate repository using WXT, React, TypeScript, and Tailwind. Keep API calls behind the Radeion backend so authentication, audit logging, and healthcare data handling stay controlled server-side.

Suggested extension surfaces:

- Background service worker for authenticated API communication.
- Content script for approved page context detection.
- Sidebar or popup UI for reviewed insights.
- Chrome storage wrapper for settings and session state.
- Explicit privacy and compliance documentation before reading any healthcare page content.
