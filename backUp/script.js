//Guardo esto para cuando tenga que cargar todas las imgs de un proyecto


function getProject() { 
    fetch('post.json')
    .then((res) => res.json())
    .then((data) => {
        let imgInsert=''; 
        data.forEach(function(post){
            // Cargamos todas las url/img en un obj
            for(let img = 1; img <= post.cant; img ++){
                imgInsert += `<img src="./img/${post.id}/${img}.png">`;
            };
            // Ahora construímos los divs con la info + las imgs
            output += `
                <div>
                    <h2>${post.title}</h2>
                    <h3>${post.descript}</h3>
                    ${imgInsert}
                </div>
            `;
        });
        document.getElementById('output').innerHTML = project;
    })
}