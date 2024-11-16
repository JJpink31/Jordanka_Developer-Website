function sendMail() {
    var params = {
      name: document.getElementById("firstName").value,
      name: document.getElementById("LastName").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_vu3n6o5";
    const templateID = "template_bmhzg4e";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
      alert("I'm sorry your message was not able to send")
  
  }