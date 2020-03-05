
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, userArr, i;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase().trim();
    div = document.getElementById("myDropdown");
    userArr = div.getElementsByTagName("a");
    for (i = 0; i < userArr.length; i++) {
      txtValue = userArr[i].getAttribute("data-userName");
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        var tempStr = txtValue.replace(new RegExp(`${filter}`, 'ig'), (searchValue) => { return `<span style="color:red;">${searchValue}</span>` });
        userArr[i].innerHTML = tempStr;
        userArr[i].style.display = "block";
      } else {
        userArr[i].style.display = "none";
      }
    }
  } 
  