const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const icon = btn.querySelector(".faq-icon");

    // Close all other answers
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== answer) ans.classList.remove("show");
    });
    document.querySelectorAll(".faq-icon").forEach((ic) => {
      if (ic !== icon) ic.textContent = "+";
    });

    // Toggle current one
    answer.classList.toggle("show");
    icon.textContent = answer.classList.contains("show") ? "−" : "+";
  });
});
