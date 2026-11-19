// Toggle mobile navigation menu
function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
}

// Handle Admission Inquiry Form submission
document.getElementById("inquiry-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("student-name").value.trim();
  const course = document.getElementById("course-select").value;
  const feedback = document.getElementById("form-feedback");

  if (name && course) {
    feedback.textContent = `Thank you, ${name}! Your inquiry for ${course} has been received. Our admissions team will contact you shortly.`;
    this.reset();
  }
});
