/* Model(s) */

class Light {
    constructor() {
        this.value = 'Green'
    }

    next() {
        if (this.value === 'Green') {
            this.value = 'Amber';
        } else if (this.value === 'Amber') {
            this.value = 'Red';
        } else if (this.value === 'Red') {
            this.value = 'Green';
        }
    }
}

const lights = [
    new Light(),
    new Light(),
    new Light()
];

/* View(s) */
function buildLightsHTML() {
    const lightUl = $('<ul/>');

    for (let i = 0; i < lights.length; i++) {
        lightUl.append(buildLightLi(lights[i], i));
    }

    return lightUl;
}

function buildLightLi(light, index) {
    const listItem = $('<li/>').text(light.value);
    listItem.attr('data-index', index)

    listItem.click(handleLightLiClick);

    return listItem;
}

/* Controllers */

function handleLightLiClick(event) {
    const target = $(event.target);
    const indexClicked = target.attr('data-index');
    lights[indexClicked].next();
    updateLightLi(indexClicked);
}

function updateLightLi(index) {
    let listItem = $('ul').children(`li[data-index="${index}"]`)[0];
    listItem = $(listItem);
    const light = lights[index];

    console.log(listItem);
    listItem.text(light.value);
}

/* Main */

$( document ).ready(function(){
    $('main').append(buildLightsHTML());
});


