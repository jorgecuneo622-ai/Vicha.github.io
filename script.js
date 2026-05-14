const projectList = document.getElementById("projectList");
const searchInput = document.getElementById("searchInput");

let currentCategory = "全部";

function displayProjects(data) {
  projectList.innerHTML = "";

  if (data.length === 0) {
    projectList.innerHTML = `<p class="empty-text">没有查询到相关项目。</p>`;
    return;
  }

  data.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
            <div class="project-icon">${project.category}</div>
            <h3>${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <p>${project.summary.substring(0, 85)}...</p>
            <div class="tag-group">
                ${project.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <a class="read-more" href="project.html?id=${project.id}">查看详情 →</a>
        `;

    projectList.appendChild(card);
  });
}

function filterProjects(category) {
  currentCategory = category;
  searchProjects();
}

function searchProjects() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = projectData.filter(project => {
    const matchCategory =
      currentCategory === "全部" || project.category === currentCategory;

    const searchText = `
            ${project.title}
            ${project.subtitle}
            ${project.category}
            ${project.summary}
            ${project.tags.join(" ")}
        `.toLowerCase();

    const matchKeyword = searchText.includes(keyword);

    return matchCategory && matchKeyword;
  });

  displayProjects(filtered);
}

searchInput.addEventListener("input", searchProjects);
displayProjects(projectData);


// 轮播图
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active-dot"));

  slides[index].classList.add("active");
  dots[index].classList.add("active-dot");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

setInterval(nextSlide, 3500);