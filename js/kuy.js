// jquery untuk light slider
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

// var angkotBeroperasi = 6;
// var jumlahAngkot = 10;
// var noAngkot = 1;

// while (noAngkot <= angkotBeroperasi) {
//   console.log("Angkot No." + noAngkot + " beroperasi dengan baik");
// noAngkot++;
// }

// for (
//   noAngkot = angkotBeroperasi + 1;
//   noAngkot <= jumlahAngkot;
//   noAngkot++
// ) {
//   console.log("Angkot No." + noAngkot + " sedang tidak beroperasi");
// }

// function gajian ( golongan, jamLembur){
//   const gajiTetap = [5000000, 6500000, 9000000]
//   const persenLembur = [30, 32, 34, 36, 38]
//   let totalPenghasilan = 0
//   if (golongan === "A") {
//     totalPenghasilan += gajiTetap[0]
//   }else if(golongan === "B"){
//     totalPenghasilan += gajiTetap[1]
//   }else if (golongan === "C") {
//     totalPenghasilan += gajiTetap[2]
//   }else{
//     return "Tidak ada golongan tersebut"
//   }

//   if(jamLembur >= 5){
//     totalPenghasilan += persenLembur[4] / 100 * totalPenghasilan
//   }else{
//     totalPenghasilan += persenLembur[jamLembur - 1] /100 * totalPenghasilan
//   }
//   return totalPenghasilan
// }

// console.log(gajian("B", 1));
