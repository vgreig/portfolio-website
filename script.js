fetch(`projects.json`).then(function (res) {
    return res.json()
}).then(function (data){
    console.log(data)
    const target = document.querySelector('.portfolio')

    data.projects.forEach(function(project){
        console.log(project.name)
        target.innerHTML += `
                <div class="project-2">
                    <h2>${project.name}</h2>
                    <img class="project-pic" src="${project.img}" alt="portfolio screenshot"/>
                    <p class="project-text">${project.desc}</p>
                    <ul class="skills">
                        <li>${project.skill1}</li>
                        <li>${project.skill2}</li>
                        <li>${project.skill3}</li>
                    </ul>
                    <p class="p-links"><a href="${project.github}">Github <i class="fa-brands fa-github"></i></a>
                    <a href="${project.live}">Live Demo <i class="fa-solid fa-burst"></i></a></p>
                </div>
            
            `
    })
})

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.menu-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const arrow = document.querySelector('.fa-angles-down')
arrow.addEventListener('click', function() {
    document.location.href ='#projects';
})