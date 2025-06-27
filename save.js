document.addEventListener("DOMContentLoaded", function () {
    const val = document.getElementById('note');
    const button = document.getElementById('button');

    const note = document.getElementById('note');
    const charCount = document.getElementById('charCount');

    note.addEventListener('input', () => {
        const length = note.value.length;
        charCount.textContent = `${length} / 600 characters`;
    });


   function onPageLoad() {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            const notesArray = JSON.parse(savedNotes);

            //val.value = notesArray[notesArray.length - 1];

            // let i = 0;
            for(let i = 0; i <= notesArray.length; i++){
                const paragraph = document.createElement("p");
                paragraph.textContent = notesArray[notesArray.length - 1].stringify;
                 document.body.appendChild(paragraph);
            }
            
           
        }
    }

    function saveText() {
        const newVal = val.value; 
        let notes = localStorage.getItem('notes');

        notes = notes ? JSON.parse(notes) : [];
        notes.push(newVal);

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    button.addEventListener('click', saveText);

    onPageLoad();
});
