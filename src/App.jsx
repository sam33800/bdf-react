import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from '../pages/HomePage'
import SignUpPage from '../pages/SignUpPage'
import PostingsPage from '../pages/PostingsPage'
import CreatePostPage from '../pages/CreatePostPage'
import MyPostingsPage from '../pages/MyPostingsPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/postings' element={<PostingsPage/>} />
          <Route path='/mypostings' element={<MyPostingsPage/>} />
          <Route path='/postings/create' element={<CreatePostPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
