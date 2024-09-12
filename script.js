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






document.addEventListener('scroll', function () {
 const sections = document.querySelectorAll('.section');

const windowHeight = window.innerHeight;

 sections.forEach(function (section) {

const sectionTop = section.offsetTop - window.scrollY;

   if (sectionTop < windowHeight * 0.75) {

   section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
