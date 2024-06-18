fetch(projects.json).then(function (res) {
    return res.json()
}).then(function (data){
    console.log(data)
    const target = document.querySelector('.target')

    data.projects.forEach(function(project){
        console.log(project.name)
        target.innerHTML +=

        
    })
})
