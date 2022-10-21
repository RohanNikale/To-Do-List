let update = (data) => {
    let str = ""
    for (i in data) {
        str += `<div class="note">
        <div class="note-text">
        ${data[i].text}
        </div>
        <div class="btn">
        <!-- <button class="note-button" onclick="edit_note(${i})"><i class="fa-solid fa-pen-to-square"></i></button> -->
            <button class="note-button"onclick="delete_note(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
        `
    }
    console.log(str)
    document.getElementsByClassName('content')[0].innerHTML = str

}

let delete_note = (value) => {
    let notes = JSON.parse(localStorage.getItem('data'))
    notes.splice(value, 1)
    let data = JSON.stringify(notes)
    localStorage.setItem('data', data)
    update(JSON.parse(localStorage.getItem('data')))
}




// let edit_note=(value)=>{
//     let str=`<div class="input-box">
//     <textarea name="todo" placeholder="Add Note" id="input" cols="" rows="10"></textarea><br>
//     <button id="Edit">Add</button>
// </div>`
// }




document.getElementById('add').onclick = () => {
    let value = document.getElementById('input').value
    if (value.length > 0){
        if (localStorage.getItem('data') == null) {
            arr = [].reverse()
            console.log('adding')
            console.log(value)
            arr.push({ text: value })
            let data = JSON.stringify(arr)
            localStorage.setItem('data', data)
            update(JSON.parse(localStorage.getItem('data')))

        }
        else {
            arr = JSON.parse(localStorage.getItem('data')).reverse()
            console.log(value)
            arr.push({ text: value })
            let data = JSON.stringify(arr)
            localStorage.setItem('data', data)

            update(JSON.parse(localStorage.getItem('data')))
        }
    }



}
update(JSON.parse(localStorage.getItem('data')))