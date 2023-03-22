if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
        console.log('Successfully registered');
    }).catch(err => {
        console.log('Error while registering SW')
    });
}




function get_BPAs() {
    var BPAs = new Array;
    var BPAs_str = localStorage.getItem('BloodPressureApp');
    if (BPAs_str !== null) {
        BPAs = JSON.parse(BPAs_str);
    }
    return BPAs;
}

function add() {
    var task = document.getElementById('task').value;

    var BPAs = get_BPAs();
    BPAs.push(task);
    localStorage.setItem('BloodPressureApp', JSON.stringify(BPAs));

    show();

    return false;
}

function clearDefault(a) {
    if (a.defaultValue == a.value) { a.value = "" }

};
function remove() {
    var id = this.getAttribute('id');
    var BPAs = get_BPAs();
    todos.splice(id, 1);
    localStorage.setItem('PBAs', JSON.stringify(BPAs));

    show();

    return false;
}

