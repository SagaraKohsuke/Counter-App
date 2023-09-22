function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var currentValue = sheet.getRange("A1").getValue();
  
  var outputHtml = `
    <html>
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script>
          function incrementCounter() {
            google.script.run.withSuccessHandler(updateDisplay).increment();
          }

          function updateDisplay(newVal) {
            document.getElementById('counterDisplay').innerText = newVal;
          }
        </script>
      </head>
      <body class="bg-light">
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center">
              <h1 class="display-4">カウンターアプリ</h1>
              <div class="mt-5 mb-4">
                <span class="display-2" id="counterDisplay">${currentValue}</span>
              </div>
              <button class="btn btn-primary btn-lg" onclick="incrementCounter()">カウントアップ</button>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  return HtmlService.createHtmlOutput(outputHtml);
}

function increment() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var currentValue = sheet.getRange("A1").getValue();
  var newValue = currentValue + 1;
  sheet.getRange("A1").setValue(newValue);
  return newValue;
}
