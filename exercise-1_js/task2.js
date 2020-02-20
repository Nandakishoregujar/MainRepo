
     let obj = [
    {
        firstname:"nanda",
        lastname:"kishore"
    },
    {
        firstname:"jaymin",
        lastname:"shah"
    },
    {
        firstname:"ravi",
        lastname:"bhut"
    },
    {
        firstname:"Omi",
        lastname:"singh"
    },
   
    {
        firstname:"sarang",
        lastname:"Jain"
    },
    {
        firstname:"Prakash",
        lastname:"raj"
    },
    {
        firstname:"Vamsi",
        lastname:"kumar"
    },
    {
        firstname:"anuj",
        lastname:"varma"
    },
    {
        firstname:"shubam",
        lastname:"Sharma"
    },
    {
        firstname:"Dharam",
        lastname:"yadav"
    },
]
        function addRow()
            {
            let newName=document.getElementById("new_name").value;
            let newLast=document.getElementById("new_last").value;

            let table=document.getElementById("data_table");
            let tableLen=(table.rows.length)+0;
            let row = table.insertRow(tableLen).outerHTML="<tr id='row"+
            tableLen+"'><td id='name_row"+tableLen+"'>"+newName+"</td><td id='last_row"+
            tableLen+"'>"+newLast+"</td><td><input type='button' id='edit_button"+
            tableLen+"' value='Edit' class='edit' onclick='editRow("+
            tableLen+")'> <input type='button' id='save_button"+
            tableLen+"' value='update' class='save' onclick='saveRow("+
            tableLen+")'> <input type='button' value='Delete' class='delete' onclick='deleteRow("+
            tableLen+")'></td></tr>";

            document.getElementById("new_name").value="";
            document.getElementById("new_last").value="";
            }
            function editRow(rowIndex)
            {
            document.getElementById("edit_button"+rowIndex).style.display="none";
            document.getElementById("save_button"+rowIndex).style.display="inline";

            let name=document.getElementById("name_row"+rowIndex);
            let last=document.getElementById("last_row"+rowIndex);

            let nameData=name.innerHTML;
            let lastData=last.innerHTML;

            name.innerHTML="<input type='text' id='name_text"+rowIndex+"' value='"+nameData+"'>";
            last.innerHTML="<input type='text' id='last_text"+rowIndex+"' value='"+lastData+"'>";
            }


        function saveRow(rowIndex)

            {
            let nameVal=document.getElementById("name_text"+rowIndex).value;
            let lastVal=document.getElementById("last_text"+rowIndex).value;

            document.getElementById("name_row"+rowIndex).innerHTML=nameVal;
            document.getElementById("last_row"+rowIndex).innerHTML=lastVal;

            document.getElementById("edit_button"+rowIndex).style.display="inline";
            document.getElementById("save_button"+rowIndex).style.display="none";
            }

           function deleteRow(rowIndex)
           
           {
            document.getElementById("row"+rowIndex+"").outerHTML="";
            }


        function addRender()
        {
             for(i=0;i<obj.length;i++)
        {
            let newName=obj[i].firstname;
            let newLast=obj[i].lastname;

            let table=document.getElementById("data_table");
            let tableLen=(table.rows.length)-0;
            let row = table.insertRow(tableLen).outerHTML="<tr id='row"+
            tableLen+"'><td id='name_row"+tableLen+"'>"+newName+"</td><td id='last_row"+
            tableLen+"'>"+newLast+"</td><td><input type='button' id='edit_button"+
            tableLen+"' value='Edit' class='edit' onclick='editRow("+
            tableLen+")'> <input type='button' id='save_button"+
            tableLen+"' value='update' class='save' onclick='saveRow("+
            tableLen+")'> <input type='button' value='Delete' class='delete' onclick='deleteRow("+
            tableLen+")'></td></tr>";

     document.getElementById("new_name").value="";
     document.getElementById("new_last").value="";
}
}



