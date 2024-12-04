// import React from 'react';
// import ReviewCard from '../ReviewCard/ReviewCard';


// import './comentarios.css';
// import React, { useState } from 'react';
// import LoginPage from '../login/LoginPage';
// import RegisterPage from '../registro/RegisterPage';
// import ReviewsPage from '../ReviewCard/ReviewPages';

// const Comentarios = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('login'); // 'login', 'register', 'reviews'
//   const [reviews] = useState([
//     { name: 'Juan Pérez', comment: 'Excelente servicio.', rating: 10 },
//     { name: 'María Gómez', comment: 'Muy limpio.', rating: 8 },
  
//       {
//         name: "Alberto Pérez",
//         comment: "¡Excelente servicio! Muy recomendado.",
//         rating: 10,
//       },
//       {
//         name: "Alejandro Gómez",
//         comment: "El lugar estaba limpio y acogedor.",
//         rating: 8,
//       },
//       {
//         name: "Carlos López",
//         comment: "Podría mejorar, pero en general fue bueno.",
//         rating: 6,
//       },
//       {
//         name: "Ana Fernández",
//         comment: "¡La atención fue increíble! Definitivamente volveré.",
//         rating: 10,
//       },
//   ]);

//   const handleLogin = (user) => {
//     console.log('Usuario autenticado:', user);
//     setIsLoggedIn(true);
//     setCurrentPage('reviews');
//   };

//   const handleRegister = (user) => {
//     console.log('Usuario registrado:', user);
//     setCurrentPage('login');
//   };

//   const renderPage = () => {
//     if (currentPage === 'login') {
//       return <LoginPage onLogin={handleLogin} />;
//     }
//     if (currentPage === 'register') {
//       return <RegisterPage onRegister={handleRegister} />;
//     }
//     if (currentPage === 'reviews') {
//       return <ReviewsPage reviews={reviews} />;
//     }
//   };

//   return (
//     <div>
//       <nav>
//         <h2>Para ver las reseñas de viaje, primero debe estar logeado.</h2>
//         <button onClick={() => setCurrentPage('login')}>Login</button>
//         <button onClick={() => setCurrentPage('register')}>Registrarse</button>
//         {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>}
//         {/* {isLoggedIn && <button>Cerrar Sesión</button>} */}
//       </nav>
//       {renderPage()}
//     </div>
//   );
// };

// export default Comentarios;






  // const [reviews] = useState([
    // { name: 'Juan Pérez', comment: 'Excelente servicio.', rating: 10 },
    // { name: 'María Gómez', comment: 'Muy limpio.', rating: 8 },
  
    //   {
    //     name: "Alberto Pérez",
    //     comment: "¡Excelente servicio! Muy recomendado.",
    //     rating: 10,
    //   },
    //   {
    //     name: "Alejandro Gómez",
    //     comment: "El lugar estaba limpio y acogedor.",
    //     rating: 8,
    //   },
    //   {
    //     name: "Carlos López",
    //     comment: "Podría mejorar, pero en general fue bueno.",
    //     rating: 6,
    //   },
    //   {
    //     name: "Ana Fernández",
    //     comment: "¡La atención fue increíble! Definitivamente volveré.",
    //     rating: 10,
    //   },
  // ]);

// const handleRegister = (user) => {
  //   console.log('Usuario registrado:', user);
  //   setCurrentPage('login');
  // };

// lo que andaba bien

// import './comentarios.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import LoginPage from '../login/LoginPage';
// import RegisterPage from '../registro/RegisterPage';
// import ReviewsPage from '../ReviewCard/ReviewPages';
// import { useNavigate } from 'react-router-dom';


// const Comentarios = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState('reviews'); // 'login', 'register', 'reviews'


//   const handleLogin = (user) => {
//     console.log('Usuario autenticado:', user);
//     setIsLoggedIn(true);
//     setCurrentPage('reviews');
//   };

//   const handleLogout = () => {
//     () => setIsLoggedIn(false)
//     navigate('/Logearse'); // Redirige a la página de inicio de sesión
//   };


  
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:3200/api/review');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error al obtener los reviews:', error);
//       }
//     };
    
    
//     fetchReviews();
//   }, []); 

  

//   const renderPage = () => {
//     if (currentPage === 'login') {
//       return <LoginPage onLogin={handleLogin} />;
//     }
//     if (currentPage === 'register') {
//       return <RegisterPage onRegister={handleRegister} />;
//     }
//     if (currentPage === 'reviews') {
//       return <ReviewsPage reviews={reviews} />;
//     }
//   };

  
//   return (
//     <div>
//       <nav>
//         <h2>Para ver las reseñas de viaje, primero debe estar logeado.</h2>
//         {/* <button onClick={() => setCurrentPage('login')}>Login</button> */}
//         {/* <button onClick={() => setCurrentPage('register')}>Registrarse</button> */}
//         {isLoggedIn && <button onClick={handleLogout}>Cerrar Sesión</button>}
//         {/* {isLoggedIn && <button>Cerrar Sesión</button>} */}
//       </nav>
//       {renderPage()}
//     </div>
//   );
// };

// export default Comentarios;

//hasta aca

// import './comentarios.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import LoginPage from '../login/LoginPage';
// import RegisterPage from '../registro/RegisterPage';
// import ReviewsPage from '../ReviewCard/ReviewPages';
// import { useNavigate } from 'react-router-dom';



// const Comentarios = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState('reviews');
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:3200/api/review');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error al obtener los reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   // Función para eliminar una reseña
//   const deleteReview = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3200/api/review/${id}`);
//       alert('Reseña eliminada con éxito');
//       // Actualizar el estado local después de eliminar
//       setReviews(reviews.filter((review) => review._id !== id));
//     } catch (error) {
//       console.error('Error al eliminar la reseña:', error);
//       alert('No se pudo eliminar la reseña.');
//     }
//   };

//   const handleLogin = (user) => {
//     console.log('Usuario autenticado:', user);
//     setIsLoggedIn(true);
//     setCurrentPage('reviews');
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate('/Logearse');
//   };

//   const renderPage = () => {
//     if (currentPage === 'login') {
//       return <LoginPage onLogin={handleLogin} />;
//     }
//     if (currentPage === 'register') {
//       return <RegisterPage />;
//     }
//     if (currentPage === 'reviews') {
//       return <ReviewsPage reviews={reviews} onDelete={deleteReview} />;
//     }
//   };

//   return (
//     <div>
//       <nav>
//         <h2>Para ver las reseñas de viaje, primero debe estar logeado.</h2>
//         {isLoggedIn && <button onClick={handleLogout}>Cerrar Sesión</button>}
//       </nav>
//       {renderPage()}
//     </div>
//   );
// };

// export default Comentarios;
import './comentarios.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPage from '../login/LoginPage';
import RegisterPage from '../registro/RegisterPage';
import ReviewsPage from '../ReviewCard/ReviewPages';
import { useNavigate } from 'react-router-dom';
import AddReviewPage from '../ReviewCard/ReviewCreate';

const Comentarios = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('reviews');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://backtpfinalutn.onrender.com/api/review');
        setReviews(response.data);
      } catch (error) {
        console.error('Error al obtener los reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  const deleteReview = async (id) => {
    try {
      await axios.delete(`https://backtpfinalutn.onrender.com/api/review/${id}`);
      alert('Reseña eliminada con éxito');
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error('Error al eliminar la reseña:', error);
      alert('No se pudo eliminar la reseña.');
    }
  };

  const handleLogin = (user) => {
    console.log('Usuario autenticado:', user);
    setIsLoggedIn(true);
    setCurrentPage('reviews');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/Logearse');
  };

  const renderPage = () => {
    if (currentPage === 'login') {
      return <LoginPage onLogin={handleLogin} />;
    }
    if (currentPage === 'register') {
      return <RegisterPage />;
    }
    if (currentPage === 'reviews') {
      return <ReviewsPage reviews={reviews} onDelete={deleteReview} />;
    }
  };

  return (
    <div className="container">
      <nav>
        {isLoggedIn && <button onClick={handleLogout}>Cerrar Sesión</button>}
      </nav>
      <AddReviewPage />
      {renderPage()}
    </div>
  );
};

export default Comentarios;
