document.addEventListener("DOMContentLoaded", CreateTableOfContent);



function CreateTableOfContent()
{
    var TableOfContent = document.getElementsByTagName("aside")[0];
    //var headersTable = document.getElementsByTagName("content")[0];
    var headersTable = document.getElementById("main-content").getElementsByTagName("h2");
    
    for(var i = 0; i < headersTable.length; i++)
    {
        var Id = headersTable.item(i).id;
        TableOfContent.innerHTML += "<div class=\"table-of-content-element\"><a href=\"#" + Id + "\"><div class=\"table-of-content-element-header\">" + headersTable[i].innerHTML + "</div></a></div>";
    }
};

