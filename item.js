function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

$(document).ready(function () {
  const itemName = getQueryParam("item");
  const item = equipmentData.find(i => i.name === itemName);

  if (item) {
    $('#item-title').text(itemName);
    $('#item').val(itemName);
    $('#item-container').html(`
      <img src="${item.image}" alt="${itemName}">
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Rating:</strong> ${item.rating}</p>
      <p><strong>Description:</strong> ${item.description}</p>
      <video width="100%" controls>
        <source src="${item.video}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h3>Features:</h3>
      <ul class="features">
        ${item.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    `);
  } else {
    $('#item-container').html(`<p>Item not found. Please go back and try again.</p>`);
  }

  $('#reservation-form').on('submit', function(e) {
    e.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const item = $('#item').val();
    const date = $('#date').val();

    if (name && email && item && date) {
      $('#confirmation')
        .text(`Thank you, ${name}! Your reservation for the ${item} on ${date} has been received.`)
        .addClass('show');

      $('#reservation-form')[0].reset();
    }
  });
});