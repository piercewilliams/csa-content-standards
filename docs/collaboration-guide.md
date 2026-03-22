---
layout: default
title: Collaboration Guide
cms_entry: collaboration-guide
---

# Collaboration Guide

---

## Part 1: Logging In

The CMS is hosted at **[csa-content-standards.netlify.app/admin](https://csa-content-standards.netlify.app/admin/)**. You can also reach it by clicking **Edit this page** on any page of the site.

Login uses Netlify Identity — you do not need a GitHub account.

1. Go to [csa-content-standards.netlify.app/admin](https://csa-content-standards.netlify.app/admin/)
2. Click **Login with Netlify Identity**
3. Enter the email and password from your invitation
4. Click **Log in** — you'll land on the CMS dashboard

> If you haven't been invited yet, ask the site owner to send you an invitation. See Part 3.

---

## Part 2: Using the Editor

### Navigating the CMS

- The left sidebar shows **Collections** — click **Documentation** to see all editable pages
- Click any page to open it in the editor

### The editor layout

| Panel | What it does |
|---|---|
| Left | The editing area — all changes happen here |
| Right | Live preview — updates as you type |

### Editing content

The editor has two modes — switch between them using the toggle in the upper right of the editing panel:

- **Rich Text** — a visual editor similar to Google Docs. Use the toolbar to add formatting, headings, links, and lists
- **Markdown** — raw Markdown source, for users comfortable with Markdown syntax

Both modes edit the same content — switching between them is safe.

### Formatting reference

| Element | Rich Text | Markdown |
|---|---|---|
| Heading | Toolbar → H1/H2/H3 | `## Heading` |
| Bold | Toolbar → B, or Cmd+B | `**bold**` |
| Italic | Toolbar → I, or Cmd+I | `*italic*` |
| Link | Toolbar → link icon | `[text](url)` |
| Bullet list | Toolbar → list icon | `- item` |
| Code | Toolbar → code icon | `` `code` `` |

### Saving

1. When done editing, click **Save** in the upper right
2. The CMS commits your changes directly to the repository
3. Netlify automatically rebuilds the site — changes go live within **1–2 minutes**

> There is no draft or review step — saved changes publish immediately.

---

## Part 3: Adding a Collaborator *(owner only)*

Collaborators are managed through Netlify Identity — no GitHub account is required.

1. Go to [app.netlify.com/sites/csa-content-standards/identity](https://app.netlify.com/sites/csa-content-standards/identity)
2. Click **Invite users**
3. Enter the collaborator's email address and click **Send**
4. They'll receive an email invitation to set a password and log in

To remove a collaborator, find them in the users list on that same page and delete their account.

---

## Part 4: New Collaborator Setup — Start to Finish

### Step 1 — Accept the invitation

1. Check your email for a message from Netlify with the subject *"You've been invited to join..."*
2. Click the link in the email
3. You'll be taken to the site — a prompt will appear to set your password
4. Enter a password and confirm it

### Step 2 — Log into the CMS

1. Go to [csa-content-standards.netlify.app/admin](https://csa-content-standards.netlify.app/admin/)
2. Click **Login with Netlify Identity**
3. Enter your email and the password you just set
4. You're in

### Step 3 — Make an edit

1. Click **Documentation** in the left sidebar
2. Click the page you want to edit
3. Make your changes in the editor — the right panel shows a live preview
4. Click **Save** when done — the change goes live on the site within 1–2 minutes
