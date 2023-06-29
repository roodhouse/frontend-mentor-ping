import './App.css';
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import Form from '../src/components/Form'
import Image from '../src/components/Image'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="App bg-white flex justify-center">
      <div id='contentWrapper' className='px-[28px] pt-[81px] pb-[37px] max-w-[640px] xl:max-w-[712px] xl:px-0'>
        <div id='headerWrapper' className='pb-8 xl:pb-10'>
          <Header />
        </div>
        <div id='bodyWrapper' className='pb-8 xl:pb-10'>
          <Body />
        </div>
        <div id='formWrapper' className='pb-[72px] xl:pb-[94px]'>
          <Form />
        </div>
        <div id='imageWrapper' className='pb-[120px] xl:pb-[72px]'>
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
