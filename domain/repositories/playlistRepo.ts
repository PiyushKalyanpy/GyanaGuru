
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
        const docs = await getDocs(collection(db, 'playlist'));
        return docs;        
    } catch (error) {
        console.log('Error getting documents: ', error);
        return [];
    }
}

export const getByCount = async (count: number) => {
    try {
        const q = query(collection(db, 'playlist'), limit(count));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    } catch (error) {
        console.log('Error getting documents: ', error);
        return [];
    }
}

export const createPlaylist = async (playlist: any) => {
    try {
        const docRef = await addDoc(collection(db, 'playlist'), playlist).then((docRef) => {
            return docRef;
        });

    } catch (error) {
        console.log('Error adding document: ', error);
        return null;
    }
}

export const updatePlaylist = async (playlist: any) => {
    try {
        const docRef = await updateDoc(doc(db, 'playlist', playlist.id), playlist).then((docRef) => {
            return docRef;
        });

    } catch (error) {
        console.log('Error adding document: ', error);
        return null;
    }
}

export const deletePlaylist = async (id: string) => {
    try {
        const docRef = await deleteDoc(doc(db, 'playlist', id)).then((docRef) => {
            return docRef;
        });

    } catch (error) {
        console.log('Error adding document: ', error);
        return null;
    }
}

export const getById = async (id: string) => {
    try {
        const docRef = await getDoc(doc(db, 'playlist', id));
        return docRef;
    } catch (error) {
        console.log('Error getting documents: ', error);
        return null;
    }
}
