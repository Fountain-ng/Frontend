'use client';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import '../../../styles/Sign-up.modules.css';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  // const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, userName, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('User signed up successfully:', data);
        // router.push('/'); // Redirect to landing page
      } else {
        setError(data.error || 'Sign-up error');
      }
    } catch (error) {
      setError('Network error');
    }
  };

  return (
    <>
    <header>
      <a href="#" className="header__logo">
        <Image
          src="/Fountain official logo white txtAsset 3@4x-8.png"
          alt="Fountain FMCG Logo"
          className='fountain-logo'
          width={200}
          height={40}
        />
      </a>

      <ul className="navbar__menu">
      <li className="navbar__item">
          <Link href="/" className="navbar__link">HOME</Link>
        </li>
        <li className="navbar__item">
          <a href="#products" className="navbar__link">SHOP</a>
        </li>
        <li className="navbar__item">
          <a href="#footer" className="navbar__link">STORES</a>
        </li>
      </ul>

      <div className="navbar__cta">
        {/* <a href="#" className="navbar__cta-btn">
          <Image 
          src="/bx-search.svg"
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </a> */}
        <a href="#" className="navbar__cta-btn">
          <Image 
          src="/bx-cart.svg"
          alt='cart-icon'
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </a>
        <Link href="/sign-in" className="navbar__cta-btn">
          <Image 
          src="/bx-user.svg"
          alt='user-icon'
          className="navbar__cta-img"
          width={30}
          height={30}
          />
        </Link>
        <button className="navbar__cta-btn menu">
          <Image 
          src="/bx-menu.svg"
          alt='menu-icon'
          className="navbar__cta-menu"
          width={30}
          height={30}
          />
        </button>
      </div>
    </header>
    <section className="SignUp">
      <div className="SignUp__container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Create Account</h1>
        {error && <p className={styles.error}>{error}</p>}
        <div className="email">
          <label htmlFor="email" className="email-label">First Name</label>
          <input
            type="text"
            id="firstname"
            className="email-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email" className="email-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="email-input"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email" className="email-label">User Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="email-input"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email" className="email-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password" className="input-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
            required
          />
        </div>
        <a href='#' type="submit" className="input-btn">CREATE</a>
    </form>
      </div>
    </section>
    </>
  );
};

export default SignUp;


/// Forgot password
