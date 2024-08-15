/**
 * Fungsi untuk menghitung BMI dan menampilkan hasilnya
 */
function calculateBMI() {
    // Mendapatkan nilai input dari formulir
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Ubah cm ke meter
    var gender = document.getElementById('gender').value;
    
    // Validasi input
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Silakan masukkan nilai yang valid untuk berat dan tinggi badan.');
        return;
    }

    // Menghitung BMI
    var bmi = weight / (height * height);
    var bmiCategory;
    var advice = '';

    // Menentukan kategori BMI berdasarkan hasil perhitungan
    if (bmi < 18.5) {
        bmiCategory = 'Kurus';
        advice = 'Anda dianjurkan untuk menambah berat badan hingga batas normal.';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal';
        advice = 'BMI Anda berada dalam rentang normal. Pertahankan gaya hidup sehat.';
    } else if (bmi < 29.9) {
        bmiCategory = 'Kelebihan Berat Badan';
        advice = 'Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
    } else {
        bmiCategory = 'Obesitas';
        advice = 'Anda dianjurkan untuk menurunkan berat badan secara signifikan dan berkonsultasi dengan dokter.';
    }

    // Menampilkan hasil BMI dan kategori
    var resultText = 'Jenis Kelamin: ' + (gender === 'male' ? 'Laki-Laki' : 'Wanita') + '<br>' +
                     'BMI: ' + bmi.toFixed(2) + '<br>' +
                     'Kategori: ' + bmiCategory + '<br>' +
                     'Saran: ' + advice;

    document.getElementById('bmiResult').innerHTML = resultText;
}

/**
 * Fungsi untuk menangani klik tombol Konsultasi Ahli Gizi via Aplikasi
 */
function consultNutritionist() {
    window.location.href = 'https://example.com/consultation'; // Ganti dengan URL aplikasi atau platform konsultasi gizi
}

/**
 * Fungsi untuk menangani klik tombol Registrasi Online Sekarang
 */
function registerOnline() {
    window.location.href = 'https://example.com/registration'; // Ganti dengan URL formulir registrasi online
}

