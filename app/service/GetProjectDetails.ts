// import { error } from "console";
// import firebase_app from "../../config";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";

// const db = getFirestore(firebase_app);
// // export default async function getProjects(path: string) {
// //   const collectionRef = collection(db, path);

// //   let result = null;
// //   let error = null;

// //   try {
// //     const querySnapshot = await getDocs(collectionRef);
// //     const data = querySnapshot.docs.map((doc) => ({
// //       ...doc.data(),
// //       id: doc.id,
// //     }));

// //     result = data as any[];
// //     console.log(result);
// //   } catch (e) {
// //     error = e;
// //   }

// //   return { result, error };
// // }
// export default function getProjects(path: string) {
// const result = [
//   {
//   "available": true,
//   "demo": "https://we-book-task.vercel.app/",
//   "description": "A high-performance web application built with Next.js, TypeScript, Tailwind CSS, and PWA support.",
//   "github": "https://github.com/mazneHatem22",
//   "id": 1,
//   "image": "https://firebasestorage.googleapis.com/v0/b/ahmedmagraby-app.appspot.com/o/Screenshot%202024-08-04%20at%2011.16.07%E2%80%AFAM.png?alt=media&token=b9c3995d-4e56-40d9-ac35-12a00f7df1ce",
//   "name": "E-Commerce Starter Template",
//   "sortId": "1",
//   "techNames": [
//     "TypeScript",
//     "Next.js",
//     "Tailwind CSS",
//     "PWA",
//     "Vercel"
//   ]
// }
// ];
//   return { result, error: null };
// }
