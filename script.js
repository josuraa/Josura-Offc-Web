document.getElementById('btn-BacaKetentuan').addEventListener('click', function() {
    Swal.fire({
      title: "Ketentuan",
      html: `
        <ol><li style="text-align: left; margin-left: 3%;margin-right: 9%;">Pengerjaan akan dilakukan setelah admin konfirmasi ke pembeli</li>
              <li style="text-align: left; margin-left: 3%;margin-right: 9%;">Admin berhak menolak Joki (semua keputusan ditangan admin)</li>
              <li style="text-align: left; margin-left: 3%;margin-right: 9%;">Pelayanan diluar jam operasional akan didelay</li>
              <li style="text-align: left; margin-left: 3%;margin-right: 9%;">Pembayaran dapat dilakukan dengan e money</li>
              </ol>

              Jam Operasional
              <li style="text-align: left; margin-left: 11%;">Senin - Kamis  : <b>16.00 - 20.00 WIB</b></li>
              <li style="text-align: left; margin-left: 11%;">Jum'at         : <b>13.00 - 20.00 WIB</b></li>
              <li style="text-align: left; margin-left: 11%;">Sabtu - Minggu : <b>07.00 - 20.00 WIB</b></li>
      `,
      showCloseButton: true,
      showConfirmButton: false,
    });
});
