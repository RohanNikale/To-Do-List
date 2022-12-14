let update = (data) => {
    if(localStorage.getItem('data')==null || JSON.parse(localStorage.getItem('data')).length ==0){
        document.getElementsByClassName('note-heading')[0].style.visibility="hidden"
        document.getElementsByClassName('content')[0].innerHTML=` <div class="data-not">
        No Todo's to display
        </div>`
        return 0
    }
    let str = ""
    for (i in data) {
        str += `
        <div class="note">
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
    document.getElementsByClassName('note-heading')[0].style.visibility="visible"
    document.getElementsByClassName('content')[0].innerHTML = str
    
}
let sleep = async (value) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(200)
        }, value)
    })
    }
let delete_note = async (value) => {
    document.getElementsByClassName('note')[value].classList.add('delete')
    await sleep(200)
    let notes = JSON.parse(localStorage.getItem('data'))
    notes.splice(value, 1)
    let data = JSON.stringify(notes)
    localStorage.setItem('data', data)
    update(JSON.parse(localStorage.getItem('data')))
}

let removeall = async()=>{
    if(localStorage.getItem('data')!=null){
        if(JSON.parse(localStorage.getItem('data')).length!=0){

            let a=confirm('Do you want to delete all notes')
            if(a){        
                for(i=0;i<JSON.parse(localStorage.getItem('data')).length;i++){
                    document.getElementsByClassName('note')[i].classList.add('alldelete')
                }
                await sleep(200)
                localStorage.clear()
                update(JSON.parse(localStorage.getItem('data')))
            }
        }
    }
}


// let edit_note=(value)=>{
//     let str=`<div class="input-box">
//     <textarea name="todo" placeholder="Add Note" id="input" cols="" rows="10"></textarea><br>
//     <button id="Edit">Add</button>
// </div>`
// }




document.getElementById('add').onclick = () => {
    let value = document.getElementById('input').value
    if (value.length > 0) {
        if (localStorage.getItem('data') == null) {
            arr = [].reverse()
            arr.unshift({ text: value })
            let data = JSON.stringify(arr)
            localStorage.setItem('data', data)
            update(JSON.parse(localStorage.getItem('data')))
            document.getElementById('input').value=''
            
        }
        else {
            arr = JSON.parse(localStorage.getItem('data')).reverse()
            arr.unshift({ text: value })
            let data = JSON.stringify(arr)
            localStorage.setItem('data', data)
            
            update(JSON.parse(localStorage.getItem('data')))
            document.getElementById('input').value=''
        }
    }



}
update(JSON.parse(localStorage.getItem('data')))