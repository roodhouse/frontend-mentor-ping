import './App.css';
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import Form from '../src/components/Form'
import Image from '../src/components/Image'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="App bg-white">
      <div id='contentWrapper' className='px-[28px] pt-[81px] pb-[37px]'>
        <div id='headerWrapper' className='pb-8'>
          <Header />
        </div>
        <div id='bodyWrapper' className='pb-8'>
          <Body />
        </div>
        <div id='formWrapper' className='pb-[72px]'>
          <Form />
        </div>
        <div id='imageWrapper' className='pb-[120px]'>
          <Image />
        </div>
        <div id='footerWrapper'>
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
