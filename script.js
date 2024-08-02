document.getElementById('toggle-light').addEventListener('click', function () {
    const body = document.body;
    const lightbulbIcon = document.getElementById('lightbulb-icon');

    if (body.classList.contains('light-on')) {
        body.classList.remove('light-on');
        lightbulbIcon.src = 'photo/light.png';
    } else {
        body.classList.add('light-on');
        lightbulbIcon.src = 'photo/lightoff.png';
    }
});


