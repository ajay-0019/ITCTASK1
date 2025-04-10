
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you! Your message has been received.");
  e.target.reset();
}
  document.addEventListener('DOMContentLoaded', function () {
      const questions = document.querySelectorAll('.faq-question');
  
      // Loop through each question
      questions.forEach(function (question) {
          question.addEventListener('click', function () {
              const answer = this.nextElementSibling; // Get the associated answer element
  
              // Toggle the answer visibility
              if (answer.style.display === 'block') {
                  answer.style.display = 'none';
              } else {
                  answer.style.display = 'block';
              }
          });
      });
  });
