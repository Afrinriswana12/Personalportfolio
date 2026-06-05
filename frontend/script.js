document.addEventListener("DOMContentLoaded", () => {

    const text = [
        "Full Stack Developer",
        "Software Developer",
        "Web Developer",
        "IT Student"
    ];

    let index = 0;

    setInterval(() => {
        const typing = document.getElementById("typing");
        if (typing) {
            typing.textContent = text[index];
            index = (index + 1) % text.length;
        }
    }, 2000);

    fetch("https://portfolio-backend-d5mp.onrender.com/api/projects")
        .then(res => res.json())
        .then(data => {

            const container = document.getElementById("project-container");

            if (!container) {
                console.log("Project container not found!");
                return;
            }

            data.forEach(project => {
                container.innerHTML += `
                    <div class="project-card">
                        <img src="${project.image}" alt="${project.title}">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.github}" target="_blank">
                            View Project
                        </a>
                    </div>
                `;
            });

        })
        .catch(err => console.log("Fetch error:", err));

});