
import './App.css'
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Selection from './components/Selection/Selection';

function App() {


  return (
    <div className='container md:max-w-6xl mx-auto'>
      <Header/>
      <main className='md:flex gap-5 my-10 items-start'>
        <Courses />
        <Selection />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
