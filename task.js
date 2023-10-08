//  if else

const angka = 1;

if (angka % 2 === 0) {
  console.log(`${angka} adalah bilangan genap.`);
} else {
  console.log(`${angka} adalah bilangan ganjil.`);
}

// nested if
const nilai = 75;

if (nilai >= 80) {
  console.log("Nilai kamu sangat baik!");
} else if (nilai >= 60) {
  console.log("Nilai kamu cukup baik.");
} else {
  console.log("Kamu perlu belajar lagi");
}


// switch case
let jenisBuah = "jeruk";

switch (jenisBuah) {
  case "apel":
    console.log("Ini adalah buah apel.");
    break;
  case "jeruk":
    console.log("Ini adalah buah jeruk.");
    break;
  case "mangga":
    console.log("Ini adalah buah mangga.");
    break;
  default:
    console.log("Ini bukan buah yang dikenal.");
}



// for
for (let i = 1; i <= 5; i++) {
  console.log(`ini angka ke ${i}`);
}



// while loop bilangan ganjil
let bilangan = 1;
while (bilangan <= 10) {
  if (bilangan % 2 == 1) {
    console.log(`${bilangan} adalah bilangan ganjil`);
  }
  bilangan++;
}


// do while loop bilangan genap
let bil = 1;
do {
  if (bil % 2 === 0) {
    console.log(`${bil} adalah bilangan genap`);
  }
  bil++;
} while (bil <= 5)

// function cek status suhu 
function infoSuhu(lokasi, suhu) {
  function status() {
    let kondisi;
    if (suhu <= 0) {
      kondisi = 'Beku';
    } else if (suhu > 0 && suhu <= 16) {
      kondisi = 'Dingin';
    } else if (suhu > 16 && suhu <= 20) {
      kondisi = 'Normal';
    } else {
      kondisi = 'Panas';
    }
    return kondisi;
  }

  console.log('Lokasi ' + lokasi + ', suhu ' + suhu + ', kondisi ' + status());
}

infoSuhu('Indonesia', 17);