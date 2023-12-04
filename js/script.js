/* hitung keliling segitiga */
const sisi1 = document.getElementById('s1')
const sisi2 = document.getElementById('s2')
const sisi3 = document.getElementById('s3')
const hitung1 = document.getElementById('hitung-keliling')
const output1 = document.getElementById('output1')
hitung1.addEventListener('click', function(){
    let s1=sisi1.value
    let s2=sisi2.value
    let s3=sisi3.value
    let h=s1*s2*s3
    output1.innerHTML= `Hasil dari keliling= ${h}`
})
/* hitung luas segitiga */
const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung2 = document.getElementById('hitung-luas')
const output2 = document.getElementById('output2')
hitung2.addEventListener('click', function(){
    let a=alas.value
    let t=tinggi.value
    let l=0.5*a*t
    output2.innerHTML= `Alas= ${a}cm Tinggi= ${t}cm Luas= ${l}cm2`
})