const menuToggle = document.querySelector('.menu-toggle');
const pageNavigation = document.querySelector('.page-navigation');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        pageNavigation.classList.toggle('active');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
}

const moreButton = document.querySelector('.more');
const articleText = document.querySelector('.article_text');
const paragraphs = articleText.querySelectorAll('p');

if (paragraphs.length > 3) {
    for (let i = 3; i < paragraphs.length; i++) {
        paragraphs[i].style.display = 'none';
    }
    for (let i = 3; i < paragraphs.length; i++) {
        paragraphs[i].style.display = 'none';
    }
    moreButton.addEventListener('click', function() {
        const isExpanded = moreButton.textContent === 'Скрыть';
        
        if (isExpanded) {
            for (let i = 3; i < paragraphs.length; i++) {
                paragraphs[i].style.display = 'none';
            }
            moreButton.textContent = 'Читать больше';
        } else {
            for (let i = 3; i < paragraphs.length; i++) {
                paragraphs[i].style.display = 'block';
            }
            moreButton.textContent = 'Скрыть';
        }
    });
} else {
    moreButton.style.display = 'none';
}
