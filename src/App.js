import React from 'react';
import birthdayCake from './birthday-cake.gif';
import img1 from './images/image1.jpeg';
import img2 from './images/image2.jpeg';
import img3 from './images/image3.jpeg';
import img4 from './images/image4.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-body">
          <div className="typewriter">Hii Silaa Comel &#128525;</div>          
          <div className="d-none">
            <img src={birthdayCake} alt='birthday-cake' />
            <p>
            Selamat ulang tahun! Semoga semua yang terbaik selalu menyertaimu, termasuk kebahagiaan yang aku harap bisa jadi bagian darinya. Ada banyak yang ingin aku ungkapkan, tapi yang pasti, aku senang bisa mengenalmu lebih dekat. Semoga hari ini spesial seperti kamu! &#128536; &#129395; &#129392;
            </p>
          </div>          
        </div>
      <div className="galery-box">        
        <img src={img1} className='galery' alt="image1" />              
        <img src={img2} className='galery' alt="image2" />
        <img src={img3} className='galery' alt="image3" />
        <img src={img4} className='galery' alt="image4" />
      </div>
      </header>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(() => {
    document.querySelector(".typewriter").style.display = "none";
    document.querySelector(".d-none").style.display = "block";
    document.querySelector(".galery-box").style.display = "block";
    document.querySelector(".App-body").style.marginTop = "25px";
  }, 5000);
})

export default App;
