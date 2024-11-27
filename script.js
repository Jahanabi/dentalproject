document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    console.log("Name:", name);
    console.log("Number:", number);
    console.log("Email:", email);
    console.log("Message:", message);
  
    alert("Thank you for contacting us!See you soon!");
  });