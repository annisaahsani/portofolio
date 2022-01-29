const scriptURL = 'https://script.google.com/macros/s/AKfycbz4l8hnKDTy1ytkufW4NiyNGiqDeePwxNHdLxagB_QjZoptLkJbdIFsl2Cq1XMNSsL2Dg/exec';
    const form = document.forms['contact-me'];
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    //ketika tombol kirim diklik
    //tampilan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {method:'POST',body:new FormData(form) })
    .then((response) => {
        //tampilam tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        //tampilan alert
        myAlert.classList.toggle ('d-none');
        //reset formnya
        console.log('Success!',response)
    })
    .catch((error) => console.error('Error.error.message'))
});
