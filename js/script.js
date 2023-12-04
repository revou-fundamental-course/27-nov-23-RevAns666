<script>
    const alas = document.getElementById('alas')
    const tinggi = document.getElementById('tinggi')
    const hitung = document.getElementById('hitung')
    hitung.addEventListener('click', function() {
        let a = alas.value
        let t = tinggi.value
        let l = 0.5*a*t
        output.innerHTML = `Luas segitiga dari alas $(a) dan tinggi $(t) adalah $(l)`
    
    })
</script>