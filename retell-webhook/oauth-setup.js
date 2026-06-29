'use strict';
// Run this script once to obtain your Google OAuth2 refresh token.
// Usage:  node oauth-setup.js
require('dotenv').config();
const { google }   = require('googleapis');
const readline     = require('readline');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } = process.env;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error('Error: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set in .env');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI || 'http://localhost:3000/oauth/callback'
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope:       ['https://www.googleapis.com/auth/calendar'],
  prompt:      'consent', // required to always receive a refresh_token
});

console.log('\n─────────────────────────────────────────────────────────');
console.log(' Google OAuth2 Setup');
console.log('─────────────────────────────────────────────────────────');
console.log('\nStep 1 — Open this URL in your browser:\n');
console.log(authUrl);
console.log('\nStep 2 — Sign in and grant calendar access.');
console.log('         You will be redirected to your GOOGLE_REDIRECT_URI.');
console.log('         Copy the "code" query parameter from the redirect URL.\n');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Step 3 — Paste the authorization code here: ', async (code) => {
  rl.close();
  try {
    const { tokens } = await oauth2Client.getToken(code.trim());
    if (!tokens.refresh_token) {
      console.error('\nNo refresh_token returned. Make sure you included prompt=consent and');
      console.error('that this Google account has not already authorized the app.');
      process.exit(1);
    }
    console.log('\n Success! Add the following line to your .env file:\n');
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
    console.log('\nKeep this token secret — it grants full calendar access.\n');
  } catch (err) {
    console.error('\nFailed to exchange code for tokens:', err.message);
    process.exit(1);
  }
});
