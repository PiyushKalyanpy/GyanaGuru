import { storage } from "../database/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const uploadVideo = async (file: any, setProgress: any) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `videos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL); // Resolve with the downloadURL once available
          })
          .catch((error) => {
            reject(error); // Reject if there's an error getting the downloadURL
          });
      },
    );
  });
};
