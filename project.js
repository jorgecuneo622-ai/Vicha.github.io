const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

const project = projectData.find(item => item.id === projectId);

const detailHero = document.getElementById("detailHero");
const projectSummary = document.getElementById("projectSummary");
const projectProcess = document.getElementById("projectProcess");
const projectHighlights = document.getElementById("projectHighlights");
const imagePlaceholders = document.getElementById("imagePlaceholders");
const projectDetail = document.getElementById("projectDetail");

if (!project) {
  detailHero.innerHTML = `
        <h1>未找到项目</h1>
        <p>请返回首页重新选择项目。</p>
        <a href="index.html" class="btn">返回首页</a>
    `;
} else {
  document.title = project.title;

  detailHero.innerHTML = `
        <p class="detail-category">${project.category}</p>
        <h1>${project.title}</h1>
        <h3>${project.subtitle}</h3>
        <div class="detail-tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
    `;

  projectSummary.textContent = project.summary;

  projectProcess.innerHTML = project.process.map((item, index) => `
        <div class="process-item">
            <span>${index + 1}</span>
            <p>${item}</p>
        </div>
    `).join("");

  projectHighlights.innerHTML = project.highlights.map(item => `
        <div class="highlight-item">
            <p>${item}</p>
        </div>
    `).join("");

  imagePlaceholders.innerHTML = project.images.map(image => `
        <div class="image-placeholder">
            <div class="image-box">
                <p>图片预留位置</p>
            </div>
            <h3>${image.title}</h3>
            <p>${image.note}</p>
        </div>
    `).join("");

  projectDetail.textContent = project.detail;
}