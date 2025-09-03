const loadToDo =async () =>{
    const url =  fetch('https://jsonplaceholder.typicode.com/todos')
    const res = await url;
   const data  = await res.json();
    displayList(data);
}




const displayList =(lists) =>{
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML ='';
    lists.forEach(list => {
        console.log(list)
        const div = document.createElement('div');
        div.innerHTML = `
        
        <div class="list-card">
            <p>${list.id}</p>
            <h2>${list.title}</h2>
            <p>${list.completed === true ? `<i class="fa-solid fa-check-double"></i>` : `<i class="fa-solid fa-check"></i>`} </p>
        </div>
        
        `
        listContainer.appendChild(div);
    });
}

loadToDo();