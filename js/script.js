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
    let h=parseInt(s1) + parseInt(s2) + parseInt(s3)
    output1.innerHTML= `Hasil dari keliling= ${h}cm`
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
/* Reset Button */
var btnClear2 = document.getElementById('reset2');
var outputElement2 = document.getElementById('output2');
var reset1 = document.getElementById('alas')
var reset2 = document.getElementById('tinggi')
btnClear2.addEventListener('click', function(){
    outputElement2.innerHTML = '';
    reset1.value = '';
    reset2.value = '';       
    });

    var btnClear1 = document.getElementById('reset1');
    var outputElement1 = document.getElementById('output1');
    var clear1 = document.getElementById('s1')
    var clear2 = document.getElementById('s2')
    var clear3 = document.getElementById('s3')
    btnClear1.addEventListener('click', function(){
        outputElement1.innerHTML = '';
        clear1.value = '';
        clear2.value = '';    
        clear3.value = '';     
        });