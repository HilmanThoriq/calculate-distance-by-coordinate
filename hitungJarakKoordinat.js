function hitungJarak3D(lat1, lon1, alt1, lat2, lon2, alt2) {
  // Konversi derajat ke radian
  const toRad = (Value) => {
    return Value * Math.PI / 180;
  };

  const R = 6371e3; // Radius bumi dalam meter

  // Hitung jarak horizontal (menggunakan rumus Haversine)
  const dLat = toRad(lat2-lat1);
  const dLon = toRad(lon2-lon1);
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
           Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
           Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const jarakHorizontal = R * c;

  // Hitung selisih ketinggian
  const dAlt = alt2 - alt1;

  // Hitung jarak 3D menggunakan teorema Pythagoras
  const jarak3D = Math.sqrt(jarakHorizontal**2 + dAlt**2);

  return jarak3D;
}

// Program utama
function main() {
  const lat1 = parseFloat(prompt('Masukkan latitude titik pertama:'));
  const lon1 = parseFloat(prompt('Masukkan longitude titik pertama:'));
  const alt1 = parseFloat(prompt('Masukkan altitude titik pertama (meter):'));
  const lat2 = parseFloat(prompt('Masukkan latitude titik kedua:'));
  const lon2 = parseFloat(prompt('Masukkan longitude titik kedua:'));
  const alt2 = parseFloat(prompt('Masukkan altitude titik kedua (meter):'));

  const jarak = hitungJarak3D(lat1, lon1, alt1, lat2, lon2, alt2);
  console.log(`Jarak antara kedua titik adalah: ${jarak.toFixed(2)} meter`);
}

// Jalankan program
main();
