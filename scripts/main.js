var Hate = 0;
var IMG = document.querySelector('img');

IMG.onclick = function() {
    Hate = Hate + 1;
    var IMGSrc = IMG.getAttribute('src');
    if (IMGSrc === 'images/robot_face_angry.jpg') {
        alert('Я хотела дружить!');
    } else {
        alert('Не трогай меня!');
        if (Hate >= 2) {
            IMG.setAttribute ('src', 'images/robot_face_angry.jpg');
        }
    }
    
}