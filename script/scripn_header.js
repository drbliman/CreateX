document.getElementById('header_burger').onclick = function() {
    document.getElementById('header_burger').classList.toggle('active');
    document.getElementById('header_list').classList.toggle('active');
}
let clik = 0;
let clik1 = -2380;
let hod = 1;
let hod1 = 0;
document.getElementById('arrow_right').onclick = function() {
    if (hod % 4 == 0) {
        clik = 595;
    }
    document.getElementById('text_0').style.left = `${clik - 595}px`;
    clik -= 595;
    hod++;
}
document.getElementById('arrow_left').onclick = function() {
    if (hod1 % 4 == 0 && hod1 != 0) {
        clik1 = -2380;
    }
    document.getElementById('text_0').style.left = `${clik1 + 595}px`;
    clik1 += 595;
    hod1++;
}