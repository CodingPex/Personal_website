function scrollToElement(elementSelector, instance = 0){
    // select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector)
    // Check if there are elements matching the selector and if the requested instance exist
    if(elements.length > instance){
        // Scroll to specified instance of the element
        elements[instance].scrollIntoView( { behavior: "smooth"});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener("click", () =>{
    scrollToElement(".header");
})

link2.addEventListener("click", () =>{
    scrollToElement(".column");
})
