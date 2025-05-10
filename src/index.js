document.addEventListener('DOMContentLoaded',function () {
  const images=document.querySelectorAll('.imageContainer')
  const descriptions=document.querySelectorAll('.hidden');
  images.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
        descriptions[index].style.display = 'block';
    });

    image.addEventListener('mouseout', () => {
        descriptions[index].style.display = 'none';
    });
});
});

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
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
          alert("Thank you for your message!!")
  
      })
      .catch(err=>console.log(err));
  }