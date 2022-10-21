let update = (data) => {
    
    let str = ""
    for (i in data) {
        console.log(data[i])
        str += `                <div class="note">
        <div class="note-text">
        ${data[i].text}
        </div>
        <div class="btn">
            <button class="note-button"onclick="delete_note(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
        `
    }
    console.log(str)
    document.getElementsByClassName('content')[0].innerHTML = str
    
}

let delete_note=(value)=>{
    let notes = JSON.parse(localStorage.getItem('data'))
    notes.splice(value,1)    
    let data = JSON.stringify(notes)
    localStorage.setItem('data', data)
    update(JSON.parse(localStorage.getItem('data')))
}
let edit_note=(value)=>{
    console.log('hahah')
}
document.getElementById('add').onclick = () => {
    if (localStorage.getItem('data') == null) {
        arr = []
        console.log('adding')
        let value = document.getElementById('input').value
        console.log(value)
        arr.push({ text: value })
        let data = JSON.stringify(arr)
        localStorage.setItem('data', data)
        update(JSON.parse(localStorage.getItem('data')))
        
    }
    else {
        arr = JSON.parse(localStorage.getItem('data'))
        let value = document.getElementById('input').value
        console.log(value)
        arr.push({ text: value })
        let data = JSON.stringify(arr)
        localStorage.setItem('data', data)
        
        update(JSON.parse(localStorage.getItem('data')))
    }

    
}
update(JSON.parse(localStorage.getItem('data')))