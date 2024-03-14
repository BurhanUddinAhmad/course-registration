
import { useState } from 'react';
import './App.css'
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Selection from './components/Selection/Selection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const totalCredits = 15;

function App() {

  const [titles, setTitles] = useState([]);

  const handleClick = (title) => {

    const credits = titles.reduce((p, c) => p + c.credit, 0);
    if(credits + title.credit > totalCredits ) {
     return toast.error(`Only ${totalCredits} credits are allowed`);
    }

    const alreadyExist = titles.find(id => id.id === title.id);
    if(!alreadyExist) {
      const newTitles = [...titles, title];
      setTitles(newTitles);
      toast.success("Course Added!");
    } else {
      toast.warn("Course is already selected!");
    }
  }

  return (
    <div className='container md:max-w-6xl mx-auto'>
      <Header/>
      <main className='flex flex-col md:flex-row gap-5 my-10 items-start'>
        <Courses
         handleClick = {handleClick}
        />
        <Selection
        titles={titles}
        />
      </main>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
