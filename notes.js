// 1.This is related to "additional information" argument passed in firebase.js
// 2.When we consoled log response and user object after signing up the user, the display name shows null. 
// 3.Our method createUserDocumentFromAuth concludes or guess from userAuth parameter the displayName, email, createdAt. These values are coming from userAuth when we signed up before. 
// 4.Try console logging object you will sometimes get value of display name and sometimes not. 
// 5.In order to fix this extend the functionality by passing  "additional information" argument to createUserDocumentFromAuth method and spread it inside the promise after  other extracted features
// 6.This additional information is just an object
// 7.So if displayName exists in userAuth we dont have to pass additionalInformation otherwise we have to
// 8.What additionalInformation object will do is it will overrides the null value of displayName in user object and will pass the value of display name inside it. Like - additionalInformation:{displayName : 'Vibha}


// 9.Next step after we get {user} object we want to call in the method that generates createAuthUserWithEmailAndPassword.
// 10.That method is createUserDocumentFromAuth