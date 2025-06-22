function renderEquipmentList(items) {
  const container = $('#equipment-list');
  container.empty();

  items.forEach(item => {
    container.append(`
      <div class="equipment-card" data-name="${item.name}">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: ${item.price}</p>
        <button class="view-details-btn" onclick="viewDetails('${item.name}')">View Details</button>
      </div>
    `);
  });

  $('.equipment-card').each(function (i) {
    const card = $(this);
    setTimeout(() => card.addClass('visible'), i * 100);
  });
}

$('#search-input').on('keyup', function () {
  const value = $(this).val().toLowerCase();
  $('#equipment-list .equipment-card').filter(function () {
    $(this).toggle($(this).data('name').toLowerCase().indexOf(value) > -1);
  });
});

function viewDetails(itemName) {
  window.location.href = `item.html?item=${encodeURIComponent(itemName)}`;
}

$(document).ready(function () {
  renderEquipmentList(equipmentData);
});
