'use client';
import { getDocs, doc, collection } from 'firebase/firestore';
import { db } from '@/data/online/firebase';
import { useState } from 'react';

export interface CategoryService {
  getCategories(): any;
}

export class CategoryServiceImpl implements CategoryService {
  async getCategories() {
    const categories: any = [];
    await getDocs(collection(db, 'categories'))
      .then(doc => {
        console.log(
          'Document data:',
          doc.docs.map(doc => doc.data()),
        );
        const data = doc.docs.map(doc => doc.data());
        categories.push(data);
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
    return categories;
  }
}
