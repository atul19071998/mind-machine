 function sendMail(){
 
   var params = {
       name: document.getElementById("name").value,
       email: document.getElementById("email").value,
       subject: document.getElementById("subject").value,
       message: document.getElementById("message").value,
       
   };

   emailjs.send("service_y4hsrnz" ,"template_8babn7i",params)
   .then(res =>{
       alert("Your Message has Send Succesfully !!!");
       window.location.href = "/";
   })
   .catch("Error")
}
 