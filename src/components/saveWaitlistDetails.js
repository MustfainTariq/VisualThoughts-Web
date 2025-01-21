import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_DB } from "./../../config";
    
// Function to save waitlist details to Firestore
const saveWaitlistDetails = async (name, email, excitement) => {
  try {
    // Reference to the "waitlist" collection
    const waitlistRef = collection(FIREBASE_DB, "waitlist");

    // Add a new document with the user's details
    const docRef = await addDoc(waitlistRef, {
      name: name,
      email: email,
      excitement: excitement,
      createdAt: new Date(), // Add a timestamp
    });

    console.log("Waitlist entry saved with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document to Firestore: ", error);
    return false;
  }
};

export default saveWaitlistDetails;
