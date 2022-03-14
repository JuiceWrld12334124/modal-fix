const modalElement = document.querySelector("div#modal");

const openButton = document.getElementById("open-modal_btn");
const submitbtn = document.getElementById("submitformbutton");

openButton.addEventListener("click", () => {
  modalElement.classList.add("visible");
  modalElement.style.display = "flex";

  submitbtn.addEventListener("click", () => {
    let fname = document.getElementsByName("firstname")[0].value;
    let lname = document.getElementsByName("lastname")[0].value;
    let occupation = document.getElementsByName("occupation")[0].value;
    let description = document.getElementsByName("description")[0].value;

    let data = {
      firstname: fname,
      lastname: lname,
      occupation: occupation,
      description: description,
    };

    document.getElementById("firstname_prev").textContent = fname;
    document.getElementById("lastname_prev").textContent = lname;
    document.getElementById("occupation_prev").textContent = occupation;
    document.getElementById("description_prev").textContent = description;
  });

});

const closeButton = document.querySelector("div#close-modal");

closeButton.addEventListener("click", () => {
  console.log("hoi");
  modalElement.classList.remove("visible");
  setTimeout(() => {
    modalElement.style.display = "none";
  }, 1200);
});


