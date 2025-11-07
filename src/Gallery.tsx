import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="https://asdagroceries.scene7.com/is/image/asdagroceries/20335489_T1?fmt=webp&qlt=70" alt="ASDA British Milk Whole 1 Pint" />
          <p>Pink Power</p>
        </div>
        <div className="gallery-item">
          <img src="https://www.ocado.com/images-v3/eafa5127-d256-497b-9609-4869092accd6/5acc2c08-6591-448a-82cc-74e3839a3c28/1280x1280.webp" alt="Goodfella's Deep Pan Cheesy Pizza" />
          <p>Street Chic</p>
        </div>
        <div className="gallery-item">
          <img src="https://www.ocado.com/images-v3/eafa5127-d256-497b-9609-4869092accd6/e5af8265-536d-467a-b07a-15ffe7918946/1280x1280.webp" alt="Yeo Valley Organic 0% Fat Natural Yoghurt" />
          <p>Glam Queen</p>
        </div>
        <div className="gallery-item">
          <img src="https://asdagroceries.scene7.com/is/image/asdagroceries/0000000033008_T1?fmt=webp&qlt=70" alt="Red Pepper" />
          <p>Red Pepper</p>
        </div>
        <div className="gallery-item">
          <img src="https://jalpurmillersonline.com/cdn/shop/files/711vPtARuPL._SL1500_500x.jpg?v=1724615812" alt="Chips" />
          <p>Chips</p>
        </div>
        <div className="gallery-item">
          <img src="https://th.bing.com/th/id/R.a0219f76db516a6b6ef5dfbe013d1509?rik=qF%2f3AEjmdO%2bf0g&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fbread%2fbread-05.jpg&ehk=%2ftJ2hSo7FqsGvxYA%2bKrrIHhJAyy3IGU2w%2bej34FO2qU%3d&risl=&pid=ImgRaw&r=0" alt="Bread" />
          <p>Bread</p>
        </div>
        <div className="gallery-item">
          <img src="https://th.bing.com/th/id/R.7eae9530d9d48069ab5829a3ac4e96b1?rik=TxpU1XqrexrBgw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jjH9jWQIuhk%2fVGrBXQjmupI%2fAAAAAAAAzfA%2fm9NrajM76Wk%2fs1600%2fBenefits%252BAnd%252BNutrition%252BOf%252BBanana%252BFor%252BHealth%252B(4).jpg&ehk=yxTQzi66LPi2%2bklQ7Vbr%2bYgyGDSdlG0OvxEF19v2tkM%3d&risl=&pid=ImgRaw&r=0" alt="Banana" />
          <p>Banana</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
