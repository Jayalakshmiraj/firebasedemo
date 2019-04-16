
import {db,firebaseApp} from './config';


export const registerUser=(userInfo)=>{
   return firebaseApp.createUserWithEmailAndPassword(userInfo.email,userInfo.password);
//     .catch((error)=>{

 
//     var errorCode = error.code;
//     var errorMessage=error.message;
//     // db.ref('/users').push(userInfo,err=>{
//     //     console.log(err);
//     // });
// });
// };
};

export const loginUser = (userInfo)=>{
return firebaseApp.signInWithEmailAndPassword(userInfo.email,userInfo.password);
}