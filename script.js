
const pages = document.querySelectorAll('.info-page');
let currentPage = 0;

function updatePages() {
  pages.forEach((page, index) => {
    if (index === currentPage) {
      page.classList.add('active');
      page.style.display = 'block';
    } else {
      page.classList.remove('active');
      page.style.display = 'none';
    }
  });

  const nextBtn = document.getElementById('next');
  nextBtn.textContent = currentPage === pages.length - 1 ? 'Exit' : 'Next';
}

document.getElementById('prev').onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    updatePages();
  }
};

document.getElementById('next').onclick = () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePages();
  } else {
    document.querySelector('.popup').classList.add('hidden');
  }
};

document.querySelector('.close').onclick = () => {
  document.querySelector('.popup').classList.add('hidden');
};

document.querySelector('.overlay').onclick = () => {
  document.querySelector('.popup').classList.add('hidden');
};

document.querySelectorAll('.card').forEach(el => {
  el.onclick = () => {
    const islandName = el.dataset.island;
    showPopup(islandName);
  };
});

function showPopup(islandName) {
  // implement sesuai kebutuhan kamu, contoh:
  // load content ke .info-page[0], [1], [2] dsb sesuai islandName
  document.querySelector('.popup').classList.remove('hidden');
  currentPage = 0;
  updatePages();
}
