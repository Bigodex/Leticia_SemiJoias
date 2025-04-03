let counter = 1;
  setInterval(() => {
    document.getElementById('slide' + counter).checked = true;
    counter++;
    if (counter > 5) counter = 1;
  }, 5000); // troca a cada 5 segundos
