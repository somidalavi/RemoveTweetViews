


const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

function checkNewNodes(records) {
    for (const record of records) {
        for ( addedNode of record.addedNodes){
           $(addedNode).find('a[href$="analytics"]').parent().remove();
        } 
    }
}




// Create an observer instance linked to the callback function
const observer = new MutationObserver(checkNewNodes);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);


