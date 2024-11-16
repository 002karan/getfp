const pdfdownload = document.getElementById("btndown");
const disablePage = document.getElementById("page1-div");
const downloadBtn = document.getElementById('downloadBtn');
const getData = document.getElementById('getData');

const getname = document.getElementById('inputField');
const department = document.getElementById('department');
const course = document.getElementById('course');
const semester = document.getElementById('semester');
const select = document.getElementById("dropdown");
const teachername = document.getElementById('teachername');
const radios = document.querySelectorAll('input[name="gender"]');
const subject = document.getElementById('subject');
const batch = document.getElementById('batch');
const batchofuser = document.getElementById('batchofuser');
const studentname = document.getElementById('studentname');
const subjectname = document.getElementById('subjectname');




// if(batch.value.trim() !== "")
// {
// console.log("hello");
// console.log("b",batch.value)
// batchofuser.innerHTML = batch.value;
// }

  


radios.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      console.log('Selected option: ' + this.value);
    }
  });
});
// console.log("selectedRadio",selectedRadio);

// downloadBtn.style.display = "none";
// disablePage.style.display = "none";









downloadBtn.addEventListener('click', function () {
  console.log("hello");
  const options = {
    margin: [10, 10, 10], // Adjust margins
    filename: 'output.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      dpi: 192, // Adjust DPI for better quality
      scale: 2 // Scaling factor
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  };
  const content = document.getElementById('page1-div');
  html2pdf().from(content).save('content.pdf');
});