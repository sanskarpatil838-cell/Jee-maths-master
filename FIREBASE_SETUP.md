# Firebase Setup

## 1. Create your Firebase project

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Add a **Web App** inside that project.
4. Copy the Firebase config object.

## 2. Enable sign-in methods

1. Open **Authentication**.
2. Go to **Sign-in method**.
3. Enable:
   - `Email/Password`
   - `Google`

## 3. Create Firestore database

1. Open **Firestore Database**.
2. Create the database.
3. Choose a nearby region.

## 4. Add your Firebase keys

Open [firebase-config.js](./firebase-config.js) and replace:

- `YOUR_API_KEY`
- `YOUR_PROJECT_ID`
- `YOUR_MESSAGING_SENDER_ID`
- `YOUR_APP_ID`

## 5. Add Firestore rules

1. Open **Firestore Database**.
2. Go to the **Rules** tab.
3. Replace the rules with the contents of [firestore.rules](./firestore.rules).
4. Publish the rules.

## 6. What the app now stores in Firestore

- `users/{uid}`
  - public profile fields used for the leaderboard
  - synced totals like points, tests completed, time spent, and accuracy stats
- `users/{uid}/attempts/{attemptId}`
  - each quiz attempt
  - used for history and charts

## 7. Important test before launch

1. Create one account with email/password.
2. Log out and log back in.
3. Try Google sign-in.
4. Complete a test.
5. Check:
   - score history is still there after refresh
   - the same account works on another device
   - leaderboard updates for all users
