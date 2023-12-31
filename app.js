
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore, collection, addDoc,getDocs ,doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAcyFnocma4wF5ICafvfu54xbdFeCdVR10",
    authDomain: "sir-ghous-tutoria.firebaseapp.com",
    projectId: "sir-ghous-tutoria",
    storageBucket: "sir-ghous-tutoria.appspot.com",
    messagingSenderId: "1011387209345",
    appId: "1:1011387209345:web:8dd123f1698e26dacfdf80"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);



  const btn = document.getElementById('register')
  btn.addEventListener('click', ()=>{
    const name = document.getElementById('name')
    const phone = document.getElementById('phone')
    const email = document.getElementById('email')
    const pasword = document.getElementById('pasword')

    const userData = {
        name : name.value,
        phone : phone.value,
        email : email.value,
        pasword : pasword.value,
    }

    createUserWithEmailAndPassword(auth, userData.email, userData.pasword)
  .then(async (userCredential) => {
    const user = userCredential.user;

    try {
        await setDoc(doc(db, "users", user.uid), {
           ...userData,
           uid : user.uid
          });
          console.log();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
             
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errorCode', errorCode);
    console.log('errorMessage', errorMessage);
  });

})

const getAlluser = async ()=>{
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>` , doc.data());
});

}
getAlluser()


let updatebtn = document.getElementById('updatebtn').innerText;
console.log(updatebtn);

updatebtn.addEventListener('click' , function(){
  console.log("updatebtn:");
})
