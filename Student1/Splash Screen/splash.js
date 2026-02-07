// splash.js (Optional - Remove if not needed)
document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-credits li");
    let delay = 0;

    teamMembers.forEach(member => {
        setTimeout(() => {
            member.style.transition = "opacity 1s";
            member.style.opacity = "1";
        }, delay);
        delay += 500; // Fade in each name with 0.5s delay
    });
});