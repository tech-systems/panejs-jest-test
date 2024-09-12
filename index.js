const CupertinoPane = require('cupertino-pane');
let pane;

function initializePane() {
    pane = new CupertinoPane('.pane');
    return true;
}

async function presentPane() {
    await pane.present();
    if (pane.rendered) {
        return true;
    }
}

async function destroyPane() {
    await pane.destroy();
    if (!pane.rendered) {
        return true;
    }
}

module.exports = {
    initializePane,
    presentPane,
    destroyPane
};