const imagePromises = [];
let imgInsert = '';

for (let img = 2; img <= project.cant; img++) {
    const imgPath = `./img/${project.id}/${img}.jpg`;
    if (project.video != '') {
        const cantidad = project.cant - project.video;
            if (img <= cantidad) {
                imgInsert += `<img class="img-fluid pb-4" src="${imgPath}">`;
            } else {
                imgPath = `./img/${project.id}/${img}.m4v`;
                imgInsert += `<video class="img-fluid pb-4" src="${imgPath}" controls></video>`;
            }    
    } else {
        imgInsert += `<img class="img-fluid pb-4" src="${imgPath}">`;
    }
    
    // Creamos una promesa para cada imagen
    const imagePromise = new Promise((resolve, reject) => {
        const tempImg = new Image();
        tempImg.onload = () => resolve();
        tempImg.onerror = () => reject();
        tempImg.src = imgPath;
    });
    
    imagePromises.push(imagePromise);
}