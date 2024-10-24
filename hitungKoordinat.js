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
  // Contoh penggunaan
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Masukkan latitude titik pertama: ', (lat1) => {
    readline.question('Masukkan longitude titik pertama: ', (lon1) => {
      readline.question('Masukkan altitude titik pertama (meter): ', (alt1) => {
        readline.question('Masukkan latitude titik kedua: ', (lat2) => {
          readline.question('Masukkan longitude titik kedua: ', (lon2) => {
            readline.question('Masukkan altitude titik kedua (meter): ', (alt2) => {
              const jarak = hitungJarak3D(parseFloat(lat1), parseFloat(lon1), parseFloat(alt1), 
                                         parseFloat(lat2), parseFloat(lon2), parseFloat(alt2));
              console.log(`Jarak antara kedua titik adalah: ${jarak.toFixed(2)} meter`);
              readline.close();
            });
          });
        });
      });
    });
  });
}

// Jalankan program
main();