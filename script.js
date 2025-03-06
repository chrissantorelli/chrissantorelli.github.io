// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Project Data
const projects = [
    {
        title: 'Research Project 1',
        description: 'Description of your first research project.',
        category: 'research',
        image: 'path/to/image1.jpg',
        link: '#'
    },
    {
        title: 'Teaching Resource 1',
        description: 'Description of your first teaching resource.',
        category: 'teaching',
        image: 'path/to/image2.jpg',
        link: '#'
    },
    {
        title: 'Personal Project 1',
        description: 'Description of your first personal project.',
        category: 'personal',
        image: 'path/to/image3.jpg',
        link: '#'
    }
    // Add more projects as needed
];

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsGrid = document.querySelector('.projects-grid');

// Initialize projects
function initializeProjects() {
    displayProjects('all');
}

function displayProjects(category) {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">Learn More</a>
        </div>
    `;
    return card;
}

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter projects
        displayProjects(button.dataset.filter);
    });
});

// Initialize projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 