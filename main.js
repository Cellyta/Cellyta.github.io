var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Front-end Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Estudiante')
    .pauseFor(2500)
    .deleteAll(0)
    .typeString('<strong>SIUUUU!</strong>')
    .pauseFor(2500)
    
    .start();
    