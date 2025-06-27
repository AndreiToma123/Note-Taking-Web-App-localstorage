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

            displayNotes();
              
        }
    }

    function displayNotes() {
        const notesDisplay = document.getElementById("displayNotes");
        notesDisplay.innerHTML = ""; 

        const notesArray = JSON.parse(localStorage.getItem("notes")) || [];

        for (let i = 0; i < notesArray.length; i++) {
            const paragraph = document.createElement("p");
            paragraph.textContent = "Note " + (i + 1) + ": " + notesArray[i] + " ";
            const breakline = document.createElement("br");
            

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = () => deleteNote(i); 

            // paragraph.appendChild(breakline);
            paragraph.appendChild(deleteButton);
            notesDisplay.appendChild(paragraph);
        }
    }


    function deleteNote(i) {
        const notesArray = JSON.parse(localStorage.getItem("notes"));
        notesArray.splice(i, 1);
        localStorage.setItem("notes", JSON.stringify(notesArray)); 
        displayNotes();
    }

    function saveText() {
        const newVal = val.value; 
        let notes = localStorage.getItem('notes');

        notes = notes ? JSON.parse(notes) : [];
        notes.push(newVal);

        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes()
    }

    button.addEventListener('click', saveText);

    onPageLoad();
});
