function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.innerText.toLowerCase() === sectionId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

