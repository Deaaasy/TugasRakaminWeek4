console.log("Hallo ka")
console.log("Mohon maaf atas keterlambatannya dan terimakasih atas toleransinya")

console.log("Tugas Week 4")
console.log(Maaf atas keterlambatannya ka)
// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function generateRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  // Fungsi untuk membuat array dengan 100 nilai acak
  function createRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 100; i++) {
      randomArray.push(generateRandomValue());
    }
    return randomArray;
  }
  
  // Fungsi untuk memecah array menjadi array genap dan ganjil
  function splitArrayIntoEvenOdd(array) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(array[i]);
      } else {
        oddArray.push(array[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  // Fungsi untuk menghitung nilai minimum dalam array
  function calculateMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum dalam array
  function calculateMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total nilai dalam array
  function calculateTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata nilai dalam array
  function calculateAverage(array) {
    const total = calculateTotal(array);
    return total / array.length;
  }
  
  // Membuat array dengan 100 nilai acak
  const randomArray = createRandomArray();
  
  // Membagi array menjadi array genap dan ganjil
  const [evenArray, oddArray] = splitArrayIntoEvenOdd(randomArray);
  
  // Menghitung Min, Max, Total, dan Rata-rata pada setiap array
  const minEven = calculateMin(evenArray);
  const maxEven = calculateMax(evenArray);
  const totalEven = calculateTotal(evenArray);
  const averageEven = calculateAverage(evenArray);
  
  const minOdd = calculateMin(oddArray);
  const maxOdd = calculateMax(oddArray);
  const totalOdd = calculateTotal(oddArray);
  const averageOdd = calculateAverage(oddArray);
  
  // Menampilkan hasil
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  console.log("Min, Max, Total, Rata-rata pada array genap:");
  console.log("Min:", minEven);
  console.log("Max:", maxEven);
  console.log("Total:", totalEven);
  console.log("Rata-rata:", averageEven);
  console.log("Min, Max, Total, Rata-rata pada array ganjil:");
  console.log("Min:", minOdd);
  console.log("Max:", maxOdd);
  console.log("Total:", totalOdd);
  console.log("Rata-rata:", averageOdd);
  
  // Perbandingan nilai Min, Max, Total, dan Rata-rata
  if (minEven > minOdd) {
    console.log("Min lebih besar pada array genap");
  } else {
    console.log("Min lebih besar pada array ganjil");
  }
  
  if (maxEven > maxOdd) {
    console.log("Max lebih besar pada array genap");
  } else {
    console.log("Max lebih besar pada array ganjil");
  }
  
  if (totalEven === totalOdd) {
    console.log("Total memiliki nilai sama antara array genap dan ganjil");
  } else if (totalEven > totalOdd) {
    console.log("Total lebih besar pada array genap");
  } else {
    console.log("Total lebih besar pada array ganjil");
  }
  
  if (averageEven > averageOdd) {
    console.log("Rata-rata lebih besar pada array genap");
  } else {
    console.log("Rata-rata lebih besar pada array ganjil");
  }