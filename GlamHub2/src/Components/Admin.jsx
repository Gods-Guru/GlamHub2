// Admin.jsx
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../signing/firebaseConfig'; 
import Users from './Users'; 
import SignUp from './SignUp'; 

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // To handle loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const checkAdminStatus = async () => {
          const userDoc = await getDoc(doc(db, 'Users', user.uid));
          setIsAdmin(userDoc.data()?.isAdmin || false); // Check if user is admin
          setLoading(false); // Stop loading once status is checked
        };
        checkAdminStatus();
      } else {
        setIsAdmin(false);
        setLoading(false); // Stop loading if no user is logged in
      }
    });

    return () => unsubscribe();
  }, []);

  // Show a loading message while checking user status
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAdmin ? (
        <div>
          <h1>Admin Dashboard</h1>
          <Users /> {/* Render Users component only for admins */}
        </div>
      ) : (
        <h1>You do not have access to this page.</h1>
      )}
      {/* You may choose to include SignUp or conditionally render it based on the access level */}
      {!isAdmin && <SignUp />} 
    </div>
  );
}
