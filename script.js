var button_code_bar = document.getElementById('button_code_bar');
var text = document.getElementById('text');
var box = document.getElementById('box');
var pdf_box = document.getElementById('pdf_box');
var reference = document.getElementById('reference');
var reference_box = document.getElementById('reference_box');
var all = document.getElementById("all")

button_code_bar.onclick = function(){
    if(text.value.length > 0){
        if(text.value.length < 50){
          box.innerHTML = "<svg id='barcode'></svg>";
          JsBarcode("#barcode", text.value);
          box.style.border='1px solid #999';
          pdf_box.innerHTML ="<button onclick='genererPDF()'>Télécharger le code barre</button>";
          pdf_box.style.marginTop="10px";
          pdf_box.style.display="flex";
          reference_box.innerHTML= reference.value;

        }else {
            box.style.border ="0";
            box.innerHTML="<p class='error'> Le texte est trop long !</p>";
            pdf_box.style.display ="none";
        }
    }else {
       box.style.border ="0";
       box.innerHTML="<p class='error'>Remplissez le champ !</p>";
       pdf_box.style.display ="none";
    }
}


function genererPDF(){
    var opt = {
      margin:       1,      
      filename:     `${text.value}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a6', orientation: 'l' }
    };
    
    html2pdf().set(opt).from(all).save();


}