export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = async () => {
    try {
      setCurrentUser(null);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const authStateChanged = async user => {
    setIsLoading(true);
    console.log(user);
    if (!user) {
      clear();
      return;
    }
    const userDocExist = await getDoc(doc(db, 'users', user.uid));
    setCurrentUser(userDoc.data());
    setIsLoading(false);
  };

  const signOut = () => {
    authSignOut(auth).then(() => clear());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, isLoading, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
