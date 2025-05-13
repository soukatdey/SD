import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<body class="bg-gray-100">
    <header class="bg-blue-500 text-white py-4">
        <div class="container">
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        <section>
            <div class="md:w-1/2">
                <h2 class="text-3xl font-semibold mb-4">Welcome to Our Website</h2>
                <p class="text-lg">Discover amazing features and services. Register now to get started!</p>
            </div>
            <div class="md:w-1/2">
                <form>
                    <h3 class="text-2xl font-semibold text-gray-800 mb-4">Register Now</h3>
                    <div class="mb-4">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div class="mb-4">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div class="mb-6">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
    </main>

    <footer class="bg-gray-800 text-white py-4 mt-8">
        <div class="container">
            <p>&copy; 2023 My Website. All rights reserved.</p>
            <div class="social-links">
                <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="contact-info">
                <p>Email: info@mywebsite.com</p>
            </div>
        </div>
    </footer>
    {/* <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script> */}
</body>


    </>
  )
}

export default App
