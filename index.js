{
  const onReceiveJSON = (json) => {
    const ctx = document.getElementById('wordsChart');

    const data = {};
    data.labels = json.map(w => w.word);
    data.datasets = [{
      label: 'Words Frequency of User Stored Vocabulary',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)'
      ],
      data: json.map(w => w.frequency)
    }];

    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: false
      }
    });

    setInterval(() => {
      const data = chart.data.datasets[0].data;
      const delta = Math.round(500 * Math.random()) - 250;
      console.log(delta);
      const index = Math.floor(data.length * Math.random());
      data[index] += delta;
      if (data[index] < 0) {
        data[index] = 0;
      }
      chart.update();
    }, 500);
  };

  fetch('topWords.json')
    .then((response) => {
      return response.json()
    })
    .then(onReceiveJSON)
    .catch((ex) => {
      console.log('parsing failed', ex)
    });
}
