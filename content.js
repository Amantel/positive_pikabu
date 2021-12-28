
var target = document.querySelector('.stories-feed__container');
document.querySelectorAll('.icon--emotions__angry').forEach(node=>node.closest('article').style.display ="none");
document.querySelectorAll('.icon--emotions__sad').forEach(node=>node.closest('article').style.display ="none");
// console.log(`Removed ${document.querySelectorAll('.icon--emotions__angry').length} angry and ${document.querySelectorAll('.icon--emotions__sad').length} sad posts`)

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function() {
        document.querySelectorAll('.icon--emotions__angry').forEach(node=>node.closest('article').style.display ="none");
        document.querySelectorAll('.icon--emotions__sad').forEach(node=>node.closest('article').style.display ="none");
        // console.log(`Removed ${document.querySelectorAll('.icon--emotions__angry').length} angry and ${document.querySelectorAll('.icon--emotions__sad').length} sad posts`)
                
    });
});

// configuration of the observer:
var config = { childList: true }

// pass in the target node, as well as the observer options
observer.observe(target, config);
