// Fungsi scroll halus
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 72,
    behavior: 'smooth'
  });
}

// Kirim form pesanan
function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const item = document.getElementById('item').value.trim();
  const note = document.getElementById('note').value.trim();

  if (!name || !item) {
    alert('Mohon isi nama dan pesanan.');
    return false;
  }

  alert(`Terima kasih ${name}! Pesanan Anda: ${item}${note ? '\nCatatan: ' + note : ''}`);
  document.getElementById('orderForm').reset();
  return false;
}