# Request to IT: app registration for CUP Building Issue Register

**Requested by:** [your name, PS number, project]
**Purpose:** An internal web page where CUP Building teams raise site issues, reply with solutions, and management records the final decision. All data is stored in our own SharePoint site. The page only contains code; no project data is stored outside the company Microsoft 365 tenant.

## What is needed

1. **Register an application in Microsoft Entra ID (Azure AD)**
   - Name: `CUP Building Issue Register`
   - Supported account types: **Accounts in this organizational directory only** (single tenant)
   - Platform: **Single-page application (SPA)**
   - Redirect URI: `https://<github-username>.github.io/<repository-name>/`  ← [fill in the exact page address]
   - No client secret is needed (the page uses the Authorization Code flow with PKCE).

2. **API permissions: Microsoft Graph, Delegated**
   - `User.Read`
   - `Sites.ReadWrite.All`: read and write list items, only in sites the signed-in user already has access to
   - `Sites.Manage.All`: used once by the site owner to create three lists; can be removed afterwards
   - Please **grant admin consent** if user consent is restricted in our tenant.

3. **Share back with me**
   - Directory (tenant) ID
   - Application (client) ID

## Notes for security review

- Delegated permissions only. The app can never do more than the signed-in user can already do in SharePoint.
- Sign-in is restricted to our tenant; external accounts cannot sign in.
- Data location: three SharePoint lists (`CUPIssues`, `CUPReplies`, `CUPDecisions`) in the site [site URL]. Access is controlled by normal SharePoint site permissions.
- The page makes network calls only to `login.microsoftonline.com` and `graph.microsoft.com`. The sign-in library (MSAL.js 2.38.3) and the Excel export library are bundled with the page; there are no third-party CDN, analytics or AI calls.
- If hosting the page on GitHub Pages is not acceptable, the same files can be hosted on Azure Static Web Apps or any internal web server without changes; only the redirect URI changes.
