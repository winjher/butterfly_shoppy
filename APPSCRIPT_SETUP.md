# 🦋 Butterfly Pupae Shop - Apps Script Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create New Apps Script Project
Click here to create a new project:
https://script.google.com/create

Or go to https://script.google.com and click "New project"

---

### Step 2: Set Up Files

**Rename the default file to `Code.gs`** and paste the backend code:
- Copy from: [`Code.gs`](./Code.gs) in this repository

**Create a new file `Index.html`** and paste the frontend:
- Copy from: [`index.html`](./index.html) in this repository

---

### Step 3: Deploy as Web App

1. Click **Deploy** button (top right)
2. Click **New deployment**
3. Select deployment type dropdown → choose **Web app**
4. Configure:
   - **Execute as:** Select your Google account
   - **Who has access:** Anyone
5. Click **Deploy**
6. Copy the URL that appears (looks like):
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

---

### Step 4: Open Your App

Click the deployment URL to open your live app!

The `google.script.run` calls will now work because the HTML is served directly by Apps Script.

---

## Troubleshooting

### "Cannot reach the server" error?
- Make sure you deployed as **Web app**, not Library
- Check that both `Code.gs` and `Index.html` files exist
- Redeploy if you make changes (Deploy → select existing → Update)

### Backend functions not found?
- Verify `Code.gs` has these functions:
  - `getState()`
  - `saveState(st)`
  - `login(role, username, pw, extra)`
  - `logActivity(username, role, action, detail)`

### Want to update the code?
- Edit files in Apps Script editor
- Click **Deploy** → select existing deployment → **Update**
- Refresh your web app in the browser

---

## File Structure in Apps Script

```
Butterfly Pupae Shop (Project)
├── Code.gs          (Backend - Google Apps Script)
├── Index.html       (Frontend - User interface)
└── [Auto-created sheets]
    ├── Users
    ├── Logins
    ├── Activity
    ├── Lots
    ├── Orders
    ├── Reservations
    └── Config
```

---

## Direct Links

- **New Apps Script Project:** https://script.google.com/create
- **Apps Script Home:** https://script.google.com
- **This Repo:** https://github.com/winjher/butterfly_shoppy

---

## Copy-Paste Files

### For `Code.gs`
Open [`Code.gs`](./Code.gs) and copy all content into your Apps Script `Code.gs` file.

### For `Index.html`
Open [`index.html`](./index.html) and copy all content into your Apps Script `Index.html` file.

---

**Questions?** Check the browser console (F12 → Console tab) for error messages when the app loads.
