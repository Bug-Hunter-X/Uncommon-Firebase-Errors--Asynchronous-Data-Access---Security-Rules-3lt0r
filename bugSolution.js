To solve asynchronous data access issues, always check for the existence of fields before accessing them:

```javascript
db.collection('users').doc('someId').get().then(doc => {
  const userData = doc.data();
  if (userData && userData.nonExistentField) {
    console.log(userData.nonExistentField);
  } else {
    console.log('Field does not exist or document is empty.');
  }
});
```
For Realtime Database security rules, ensure rules are explicit and cover all possible access scenarios. Use the Firebase console's rules simulator to test your rules thoroughly.  Ensure your rules handle all data paths and operations precisely.  Avoid overly permissive rules and meticulously define allowed and disallowed actions.