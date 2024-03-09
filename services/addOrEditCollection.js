import db from './firebase-config';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import dayjs from 'dayjs';
import { uuidv4 } from '@firebase/util';

const addDataToCollection = async (collectionName, data) => {
  if (!collectionName || ! data) {
    throw Error('missing required param');
  }

  data = {
    ...data,
    id: uuidv4(),
    createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    updatedAt: null
  };

  try {
    await addDoc(collection(db, collectionName), data);
  } catch (error) {
    throw Error(error.message);
  }
}

const editCollection = async (collectionName, data) => {
  if (!collectionName || ! data) {
    throw Error('missing required param');
  }

  data = {
    ...data,
    updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss')
  };

  try {
    await updateDoc(doc(db, collectionName, data.id), data);
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