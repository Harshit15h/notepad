function copy(){
    var copyText = document.getElementById("notescontent")
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Notes saved in clipboard" + copyText.value);

}