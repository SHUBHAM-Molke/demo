import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged, signOut as authSignOut, User as FirebaseUser } from "firebase/auth";
import { getDoc, doc, DocumentData } from "firebase/firestore";
import { AUTH, DB } from "@/firebase";

// Define the context type
interface UserContextType {
    currentUser: DocumentData | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<DocumentData | null>>;
    isLoading: boolean;
    signOut: () => void;
}

// Create the context with a default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider props type
interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<DocumentData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const clear = () => {
        setCurrentUser(null);
        setIsLoading(false);
    };

    const authStateChanged = async (user: FirebaseUser | null) => {
        setIsLoading(true);
        if (!user) {
            clear();
            return;
        }
        const userDoc : DocumentData = await getDoc(doc(DB, "users", user.uid));
        setCurrentUser(userDoc.data());
        setIsLoading(false);
    };

    const signOut = () => {
        authSignOut(AUTH).then(() => clear());
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(AUTH, authStateChanged);
        return () => unsubscribe();
    }, []);

    if (UserContext === undefined) {
        throw new Error('useAuth must be used within a UserProvider');
    }

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, isLoading, signOut }}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = (): UserContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a UserProvider');
    }
    return context;
};
