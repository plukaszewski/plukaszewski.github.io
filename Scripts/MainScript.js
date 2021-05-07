document.addEventListener("DOMContentLoaded", CreateTableOfContent);



function CreateTableOfContent()
{
    console.log(123);

    var TableOfContent = document.getElementsByTagName("aside")[0];
    //var headersTable = document.getElementsByTagName("content")[0];
    var headersTable = document.getElementsByTagName("h2");

    console.log(headersTable[2]);
    
    for(var i = 0; i < 7; i++)
    {
        var Id = headersTable.item(i).id;
        console.log(i);
        console.log(headersTable.length);
        console.log(headersTable);
        TableOfContent.innerHTML += "<div class=\"table-of-content-element\"><a href=\"#" + Id + "\"><div class=\"table-of-content-element-header\">" + headersTable[i].innerHTML + "</div></a></div>";
    }

    console.log(123);
};

