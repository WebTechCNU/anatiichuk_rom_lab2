

const imageGallery = document.querySelector(".image-gallery");


const images = [
  {
    url: "up/beartoffl.jpg",
    description: "CИЛА.73 |ВИТР.40 |СПРИТ.59"
    
    },

    {
      url: "up/beeldera.jpg",
      description: "CИЛА.24 |ВИТР.114 |СПРИТ.80"
    },
    {
      url: "up/crhacdele.jpg",
      description: "CИЛА.35 |ВИТР.60 |СПРИТ.45"
    },
    {
      url: "up/elghan.jpg",
      description: "CИЛА.56 |ВИТР.73 |СПРИТ.43"
    },
    
    {
      url: "down/corshikott.jpg",
      description: "CИЛА.45 |ВИТР.88 |СПРИТ.42"
      
    },
    {
      url: "down/ampa.jpg",
      description: "CИЛА.43 |ВИТР.98 |СПРИТ.100"
    },
    
    
    
    {
      url: "down/cumo.jpg",
      description: "CИЛА.20 |ВИТР.72 |СПРИТ.80"
      
    },
    
  ];
  
  
  for (let i = 0; i < 4; i++) {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    
    const image = document.createElement("img");
    image.src = images[i].url;
    
    const imageDescription = document.createElement("div");
    imageDescription.classList.add("image-description");
    imageDescription.textContent = images[i].description;
    
    imageCard.appendChild(image);
    imageCard.appendChild(imageDescription);
    imageGallery.appendChild(imageCard);
  }
  
  function loadMore() {
    
    document.querySelector(".load-buttons button").style.display = "none";
    
    for (let i = 4; i <= 7; i++) {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");
      
      const image = document.createElement("img");
      image.src = images[i].url;
      
      const imageDescription = document.createElement("div");
      imageDescription.classList.add("image-description");
      imageDescription.textContent = images[i].description;
      
      imageCard.appendChild(image);
      imageCard.appendChild(imageDescription);
      imageGallery.appendChild(imageCard);
    }
    
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    
    
    setTimeout(function() {
      if (localStorage.getItem("subscribed") != "true") {
          document.getElementById('popup').style.display = 'block';
      }
  }, 15000);
  
    document.getElementById('accept-btn').addEventListener('click', function() {
      localStorage.clear();
      localStorage.setItem('subscribed', "true");
      document.getElementById('popup').style.display = 'none';
      alert('Дякуємо за приєднання!');
    });
    
    document.getElementById('reject-btn').addEventListener('click', function() {
      document.getElementById('popup').style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    
  
    setTimeout(function() {
      document.getElementById('reklama').style.display = 'block';
      
  }, 5000);

  setTimeout(function() {
    document.getElementById('close').style.display = 'flex';
    
}, 10000);

  
  
    document.getElementById('close').addEventListener('click', function() {
      document.getElementById('reklama').style.display = 'none';

    });
  });
  
  
  