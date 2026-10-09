# CUP Building Issue Register

A website for raising CUP Building issues department-wise, collecting solutions from all teams, recording an AI suggested solution and management's final decision, with a dashboard that counts down to the completion target.

- **Code** lives in GitHub (this folder). It contains no project data.
- **Sign-in** is with the company Microsoft account.
- **Data** is stored in three SharePoint lists in your company Microsoft 365: `CUPIssues`, `CUPReplies`, `CUPDecisions`.

## Files

| File | What it is |
|---|---|
| `index.html` | The website |
| `config.js` | Settings. The only file you edit |
| `lib/` | Microsoft sign-in library and Excel export library (bundled, no outside downloads) |
| `IT-REQUEST.md` | Request to send to IT for the app registration |

## Step 1: Put it on GitHub (works immediately in demo mode)

1. On github.com, create a new repository, for example `cup-issue-register`. GitHub Pages on a free account needs the repository to be **Public**. This is safe because the files hold no project data.
2. Open the repository, choose **Add file > Upload files**, and upload everything in this folder, keeping the `lib` folder.
3. Go to **Settings > Pages**, set Source to **Deploy from a branch**, Branch **main**, folder **/(root)**, and Save.
4. After a minute your site is at `https://<your-username>.github.io/cup-issue-register/`.

It opens in **demo mode**: you can try every screen, but issues are saved only in your own browser and nobody else sees them.

## Step 2: Get the Microsoft IDs from IT

1. Decide which SharePoint site will hold the register (your project site, or a new one). Everyone who should use the register must be a **member** of that site.
2. Fill in the blanks in `IT-REQUEST.md` (your site address from Step 1 and the SharePoint site) and send it to IT.
3. IT sends back a **tenant ID** and a **client ID**.

## Step 3: Go live

1. In GitHub, open `config.js`, click the pencil, and set:
   - `demo: false`
   - `tenantId` and `clientId` from IT
   - `siteHostname` and `sitePath` of the SharePoint site
   - `managers`: the email IDs of the people allowed to issue the final decision
2. Commit the change and wait a minute.
3. Open the site and sign in. The first time, a **site owner** clicks **Create the three lists**. This is needed once.
4. Share the site link with the teams.

## Step 4: Lock the final decision to management (recommended)

The `managers` setting hides the decision form from other users, but the real control is SharePoint permission:

1. In SharePoint, open the `CUPDecisions` list > Settings > **Permissions for this list**.
2. **Stop inheriting permissions**.
3. Give management **Contribute**, and everyone else **Read**.

## Good to know

- **Refresh:** the dashboard reloads from SharePoint every 60 seconds and after every action.
- **One file:** "Download register (.xlsx)" on the Register tab exports all issues, replies, AI solutions and decisions. The SharePoint lists themselves are the permanent record and can also be opened in Excel or Power BI.
- **Automatic daily file:** if you want a dated Excel copy saved every night without anyone clicking, ask for a Power Automate flow on the `CUPIssues` list.
- **AI solution:** the site does not call any AI service. It builds the prompt from the issue and all replies; you paste it into the company Copilot and save the answer back.
- **Reference numbers** (CUP-001, CUP-002…) come from the SharePoint item ID, so two people can never get the same number.
- **Do not delete items** in the lists if you want the full history up to CUP completion; close issues instead.
