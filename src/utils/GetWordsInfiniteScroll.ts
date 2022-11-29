import {DocumentData, Timestamp} from 'firebase/firestore';
import {firestore, collection, getDocs, limit, query, orderBy, startAfter} from './dbconnection'

export default {
  postsFirstBatch: async function () {
    try {
      const data = query(
        collection(firestore, 'englishwords'),
        orderBy('createdAt', 'asc'),
        limit(50),
      );

      const snapshot = await getDocs(data)

      const words: DocumentData[] = []
      let lastKey = "";
      snapshot.forEach((doc) => {
        words.push(doc.data())
        lastKey = doc.data().createdAt;
      });

      return {words, lastKey}
    } catch (e) {
      console.log(e);
    }
  },

  postsNextBatch: async (key: Timestamp) => {
    try {
      const data = query(
        collection(firestore, 'englishwords'),
        orderBy('createdAt', 'asc'),
        startAfter(key),
        limit(50),
      );

      const snapshot = await getDocs(data)

      const words: DocumentData[] = []
      let lastKey = "";
      snapshot.forEach((doc) => {
        words.push(doc.data())
        lastKey = doc.data().createdAt;
      });

      return {words, lastKey}

    } catch (e) {
      console.log(e);
    }
  }
};