let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let sidemenu = document.getElementById("sidemenu");
let specificCertificates = document.getElementsByClassName("specific-certificates");
let certificateButton = document.getElementById("certificatesButton");
let pythonTab = document.getElementById("python");

let value = certificateButton.textContent

// console.log(specificCertificates)
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-150px"
}

function showcertificates(){
    if (value ==="See More"){
        certificateButton.textContent = "Show Less"
    }else{
        certificateButton.textContent = "See More"
    }
    for (let specific of specificCertificates){
        specific.classList.toggle("hide")
    }
    value = certificateButton.textContent
}
