import React from 'react'
import Navbar from '../components_lite/Navbar'
import janesh from './janesh.jpg'; 

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={janesh} alt="janesh photo" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">I'm Janesh Krishna R</h2>
            <p className="text-gray-600 mb-2">a passionate 2nd-year <strong>B.Tech Information Technology</strong> student dedicated to mastering Full-Stack Development and DevOps.</p>
            <p className="text-gray-600 mb-2"><strong>I'm currently working with:</strong></p>
            <ul>
              <li className="text-gray-600 mb-2">🔧 <strong>Backend:</strong> Node.js, Python</li>
              <li className="text-gray-600 mb-2">🔧 <strong>Frontend:</strong> ReactJS, HTML, CSS</li>
              <li className="text-gray-600 mb-2">💽 <strong>Databases:</strong> MongoDB, MySQL</li>
              <li className="text-gray-600 mb-2">🛠️ <strong>Tools:</strong> Git, GitHub, Docker, Linux</li>
            </ul>
            <p className="text-gray-600 mb-2">I love turning ideas into working applications and continuously build projects to improve my skills. I'm also exploring <strong>cloud technologies</strong> and DevOps workflows (CI/CD, containerization) to prepare myself for real-world production development.</p>
            <p className="text-gray-600">Always open to <strong>connect, collaborate, or contribute!</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creator
