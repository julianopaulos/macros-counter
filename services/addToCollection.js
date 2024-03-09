import db from './firebase-config';
import { addDoc, collection } from 'firebase/firestore/lite';

const addDataToCollection = async (collectionName, data) => {
  if (!collectionName || ! data) {
    throw Error('missing required param');
  }

  try {
    await addDoc(collection(db, collectionName), data);
  } catch (error) {
    console.log('error while trying to sava data to collection: ', error.message);
    return false;
  }
}

const addFoodMacros = async (data) => {
  if (!data.name) {
    throw Error('food name must be provided');
  }

  if (!data.portion || data.portion <= 0) {
    throw Error('portion must be provided and greater than 0');
  }

  return await addDataToCollection('food-macros', data);
};

const addDailyMacros = async (data) => {
  return await addDataToCollection('daily-macros', data);
};

export {
  addFoodMacros,
  addDailyMacros
}