// Elementleri Seçme


const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {

    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearallSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);


}

function getData(e) {

    let username = nameInput.value.trim();

    if (username === "") {
        alert("Lütfen bir kullanıcı adı giriniz.");
    }
    else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    ui.showError("Kullanıcı bulunamadı.");
                }
                else {
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                    ui.showSuccess("Kullanıcı bilgileri ektedir.");
                }
            })
            .catch(err => ui.showError(err));
    }

    ui.clearInput(); // Input Temizleme
    e.preventDefault();
}

function clearallSearched() {
    // Tüm arananları temizleme
}

function getAllSearched() {
    //Aramaları storega'dan alıp arayüze ekleme 
}