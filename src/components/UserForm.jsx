// import React, { useState, useEffect } from 'react';
// import './UserForm.css'; 

// function UserForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (name || email) {
//       console.log(`Current Name: ${name}`);
//       console.log(`Current Email: ${email}`);
//     }
//   }, [name, email]);

//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//     setSubmitted(true); 
//   };

//                   //      useEffect
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   return (
//     <div className="form-container">
//       <h1>User Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <button type="submit" className="submit-btn">Submit</button>
//       </form>

      
//       {submitted && (
//         <div className="submitted-info">
//           <h2>Submitted Values</h2>
//           <p><strong>Name:</strong> {name}</p>
//           <p><strong>Email:</strong> {email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserForm;
