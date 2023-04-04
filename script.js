
      var container = document.querySelector(".container");
      var generateBtn = document.querySelector(".generate-btn");
      var qrInput = document.querySelector(".qr-input");
      var qrImg = document.querySelector(".qr-image");

      generateBtn.onclick  = function() {
        if(qrInput.value.length > 0){
            generateBtn.innerText = "Generating qr code..."
            qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrInput.value;
            qrImg.onload = function() {
                container.classList.add("active");
                generateBtn.innerText = "GENERATE QR"
            }

        }
      }

   