let clik = 0;
document.getElementById('arrow_right').onclick = function() {
    clik == 3 ? clik = 0 : clik++;
    for (let i=0; i<4; i++) {
        document.getElementById('text_0').classList.remove(`active${i}`);
        document.getElementById(`number_1_${i}`).classList.remove('active');
        document.getElementById('line').classList.remove(`active${i}`);
    }
    document.getElementById('text_0').classList.add(`active${clik}`);
    document.getElementById(`number_1_${clik}`).classList.add('active');
    document.getElementById('line').classList.add(`active${clik}`);
}
document.getElementById('arrow_left').onclick = function() {
    clik == 0 ? clik = 3 : clik--;
    for (let i=0; i<4; i++) {
        document.getElementById('text_0').classList.remove(`active${i}`);
        document.getElementById(`number_1_${i}`).classList.remove('active');
        document.getElementById('line').classList.remove(`active${i}`);
    }
    document.getElementById('text_0').classList.add(`active${clik}`);
    document.getElementById(`number_1_${clik}`).classList.add('active');
    document.getElementById('line').classList.add(`active${clik}`);
}