import admin from 'firebase-admin';
import { handleNewPost } from './hooks.js';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

db.collection('posts').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(async change => {
    if (change.type === 'added') {
      await handleNewPost({ id: change.doc.id, ...change.doc.data() });
    }
  });
});

console.log('Firebase listener running...');
