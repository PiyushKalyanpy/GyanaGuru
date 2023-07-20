
import { db } from '@/database/firebase';
import {
    collection,
    addDoc,
    limit,
    getDocs,
    query,
    getDoc,
    doc,
    deleteDoc,
    updateDoc,
} from 'firebase/firestore';


export const getAll = async () => {
    try {
        const docs = await getDocs(collection(db, 'categories'));
        return docs;        
    } catch (error) {
        console.log('Error getting documents: ', error);
        return [];
    }
}

export const getByCount = async (count: number) => {
    try {
        const q = query(collection(db, 'categories'), limit(count));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    } catch (error) {
        console.log('Error getting documents: ', error);
        return [];
    }
}

export const createCategory = async (category: any) => {
    try {
        const docRef = await addDoc(collection(db, 'categories'), category).then((docRef) => {
            return docRef;
        });

    } catch (error) {
        console.log('Error adding document: ', error);
        return null;
    }
}

export const updateCategory = async (category: any) => {
    try {
        const docRef = await updateDoc(doc(db, 'categories', category.id), category).then((docRef) => {
            return docRef;
        });

    } catch (error) {
        console.log('Error adding document: ', error);
        return null;
    }
}

export const deleteCategory = async (id: string) => {
    try {
        const docRef = await deleteDoc(doc(db, 'categories', id)).then((docRef) => {
            return docRef;
        });

    } catch (error) {
        console.log('Error adding document: ', error);
        return null;
    }
}

export const getById = async (id: string) => {
    try {
        const docRef = await getDoc(doc(db, 'categories', id));
        return docRef;
    } catch (error) {
        console.log('Error getting documents: ', error);
        return null;
    }
}
