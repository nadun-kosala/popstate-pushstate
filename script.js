let boxes = Array.from(document.getElementsByClassName('circle'));

function selectBox (id) {
    boxes.forEach(b => {
        b.classList.toggle('selected', b.id === id);
    });
}

boxes.forEach(b => {
    let id = b.id;
    
    b.addEventListener('click', e => {
        console.log(id);
        history.pushState({id}, `Selected: ${id}`, `./selected=${id}`)
        selectBox(id);
    });
});

window.addEventListener('popstate', e => {
    console.log("popstate", e.state);
    selectBox(e.state.id);
});

history.replaceState({id: null}, 'Default state', './');
