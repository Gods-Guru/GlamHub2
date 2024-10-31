// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { db, auth } from '../signing/firebaseConfig';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import '../SignUp.css';

// export default function Users(){
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'Users'));
//         const usersList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setUsers(usersList);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       // Create user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Save user information to Firestore
//       await addDoc(collection(db, 'Users'), {
//         name,
//         email,
//         address,
//         phoneNumber,
//       });

//       // Clear input fields
//       setName('');
//       setEmail('');
//       setAddress('');
//       setPhoneNumber('');
//       setPassword('');
//       alert('User registered successfully!');
      
//       // Fetch updated user list
//       fetchUsers(); // Call the fetch function to update the user list after registration
//     } catch (error) {
//       console.error('Error registering user:', error);
//       alert(`Error registering user: ${error.message}`);
//     }
//   };

//   return (
//     <div className="users-container">
//       <h2>User List</h2>
//       {users.length === 0 ? (
//         <p>No users available.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Address</th>
//               <th>Phone Number</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.address}</td>
//                 <td>{user.phoneNumber}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h2>Sign Up New User</h2>
//       <form onSubmit={handleSignUp}>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           required 
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           type="text" 
//           placeholder="Address" 
//           value={address} 
//           onChange={(e) => setAddress(e.target.value)} 
//           required 
//         />
//         <input 
//           type="tel" 
//           placeholder="Phone Number" 
//           value={phoneNumber} 
//           onChange={(e) => setPhoneNumber(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };
