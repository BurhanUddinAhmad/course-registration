
import { useState } from 'react';
import './App.css'
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Selection from './components/Selection/Selection';

export const totalCredits = 15;

function App() {

  const [titles, setTitles] = useState([]);

  const handleClick = (title) => {

    // const credits = handleClick.reduce((p, c) => p + c.credit, 0);
    // if(credits + title.credit > totalCredits ) {
    //   alert(`Only ${totalCredits} allowed`);
    // }

    const alreadyExist = titles.find(id => id.id === title.id);
    console.log(alreadyExist, title, titles);
    if(!alreadyExist) {

      const newTitles = [...titles, title];
      setTitles(newTitles);
    }
  }

  return (
    <div className='container md:max-w-6xl mx-auto'>
      <Header/>
      <main className='flex flex-col md:flex-row gap-5 my-10 items-start'>
        <Courses
         addDetails = {handleClick}
        />
        <Selection
        handleClick={titles}
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
