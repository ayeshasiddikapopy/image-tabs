filterSelection("all")
function filterSelection(c){
    let x = document.querySelectorAll(".column");
    let xArray = Array.from(x)

    if(c == 'all')
    c = "";

    xArray.map((item) => {
        reMove(item, "show");
       if(xArray.className.indexOf(c) > -1)
        adds(item, "show"); 
    })
}

function adds(element, name){
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    let arrs1 = Array.from(arr1);
    let arrs2 = Array.from(arr2);
    

}