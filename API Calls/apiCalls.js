fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
        if (data.length > 0) {
            data.forEach((itemData) => {
                const rowElement=document.createElement("tr");
                for(let i in itemData){
                    const column=document.createElement("td");
                    column.textContent=itemData[i];
                    rowElement.appendChild(column);
                }
                document.getElementById('info').appendChild(rowElement);
            });
            
          }
    })