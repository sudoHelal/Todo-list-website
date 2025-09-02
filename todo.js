const loadToDo = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data =>displayList(data));
}




const displayList =(lists) =>{
    const listContainer = document.getElementById('list-container');
    lists.forEach(list => {
        console.log(list)
        const div = document.createElement('div');
        div.innerHTML = `
        
        <div class="list-card">
            <p>${list.id}</p>
            <h2>${list.title}</h2>
            <p>${list.completed} </p>
        </div>
        
        `
        listContainer.appendChild(div);
    });
}
loadToDo();