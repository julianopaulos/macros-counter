import { collection, getDocs, getDoc } from 'firebase/firestore';
import db from './firebase-config';

const getDataFromCollection = async (collectionName, id) => {
  if (!collectionName) {
    throw Error('missing required param');
  }

  try {
    const data = id ? await getDoc(collection(db, `${collectionName}/${id}`)) : await getDocs(collection(db, collectionName));
    const rows = [];
    data.forEach(doc => {
      rows.push(doc.data());
    })

    return rows;
  } catch (e) {
    throw Error(e.message)
  }
};


const listFood = async () => {
  return await getDataFromCollection('food-macros');
};

const listDailyMeals = async () => {
  return await getDataFromCollection('daily-macros')
};

export {
  listFood,
  listDailyMeals
}