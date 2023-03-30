import { Appwrite, Client, Account, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('http://localhost:96/v1') 
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);   
export const account = new Account(client);
