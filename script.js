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
                    <img src="${project.img}" alt="portfolio screenshot"/>
                    <p class="project-text">${project.desc}</p>
                    <ul class="skills">
                        <li>${project.skills}</li>
                    </ul>
                    <p>Github<a href="${project.github}"><i class="fa-brands fa-github"></i></a></p>
                </div>
            
            `
    })
})
