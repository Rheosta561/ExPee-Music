import React, { useState } from 'react';
import Logo from './logo.png'

function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md bg-emerald-950 rounded-lg shadow dark:bg-emerald-950 dark:border-emerald-950">
        <div className="p-6 space-y-6">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-50 dark:text-white">
            <img className=" scale-150 mx-auto h-8 " src={Logo} alt="logo" />
          </a>
          <h1 className="text-2xl font-bold  text-white ">Sign in to your account</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-emerald-800 border border-emerald-950 text-emerald-100 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-800 placeholder-emerald-300 "
                placeholder="name@mail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-emerald-800 border border-emerald-950 text-emerald-100 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-800 placeholder-emerald-300 "
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                />
                <label htmlFor="remember" className="ml-3 text-sm text-gray-500 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-primary-600  text-zinc-100 hover:underline ">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{' '}
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;
