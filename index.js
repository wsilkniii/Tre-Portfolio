const showResumeModal = () => {
    document.getElementById("resume-modal").style.display = "block";
}

window.onclick = function(e) {
    if (e.target == document.getElementById("resume-modal")){
        document.getElementById("resume-modal").style.display = "none";
    }
}