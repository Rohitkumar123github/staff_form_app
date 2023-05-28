// // import { useState } from 'react';
// // import backgroundImage from './assets/background.jpg';

// import Dashboard from "./pages/Dashboard";
// import Form from "./pages/Form";

// // function App() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Process the form data or perform validation here
// //     console.log(formData);
// //   };

// //   return (
// //     <div
// //       className="min-h-screen bg-cover bg-center flex items-center justify-center"
// //       style={{ backgroundImage: `url(${backgroundImage})`, backdropFilter: 'blur(5px)' }}
// //     >
// //       <form
// //         className="bg-white shadow-md rounded px-8 pt-6 pb-8"
// //         onSubmit={handleSubmit}
// //       >
// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
// //             Full Name
// //           </label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             placeholder="Enter your name"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
// //           Upload resume
// //           </label>
// //           <input
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             type="file"
// //             id="file"
// //             name="file"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="upload resume"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technology">
// //             Technology
// //           </label>
// //           <select
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             id="technology"
// //             name="technology"
// //             value={formData.technology}
// //             onChange={handleChange}
// //             required
// //           >{console.log("tech: ", formData?.techonology)}
// //             <option value="">Select a technology</option>
// //             <option value="React">React</option>
// //             <option value="Angular">Angular</option>
// //             <option value="Vue">Vue</option>
// //           </select>
// //         </div>
// //         <div className="flex items-center justify-center">
// //           <button
// //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //             type="submit"
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;


// import { useState } from 'react';
// import backgroundImage from './assets/background.jpg';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     file: null,
//     technology: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: name === 'file' ? files[0] : value,
//     }));
//   };

  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process the form data or perform validation here
//     console.log(formData);
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${backgroundImage})`, backdropFilter: 'blur(5px)' }}
//     >
//       <form
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8"
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             Full Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
//             Upload resume
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="file"
//             id="file"
//             name="file"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technology">
//             Technology
//           </label>
//           <select
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="technology"
//             name="technology"
//             value={formData.technology}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select a technology</option>
//             <option value="React">React</option>
//             <option value="Angular">Angular</option>
//             <option value="Vue">Vue</option>
//           </select>
//         </div>
//         <div className="flex items-center justify-center">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Dashboard from './pages/Dashboard';
// import Form from './pages/Form';

// function App() {
//   return (
//     <Router>
//         <Header />

//         <Routes>
//         <Route exact path="/form" component={Dashboard} />
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path="/form" component={Form} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" element={<Dashboard />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/form" element={<Form />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

