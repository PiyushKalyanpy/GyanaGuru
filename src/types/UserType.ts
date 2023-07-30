export default interface User {
    uid: String;
    name: String;
    email: String;
    role: String;
    isOnline: Boolean;
    photoURL: String;
    createdAt: Date;
    lastSignIn: Date;
}