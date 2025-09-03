document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".teacher-tab");
  const contents = document.querySelectorAll(".teacher-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      // Hide all content sections
      contents.forEach((content) => {
        content.style.display = "none";
      });

      // Show the corresponding content section
      const tabId = this.getAttribute("data-tab");
      document.getElementById(`${tabId}-content`).style.display = "block";
    });
  });
});
