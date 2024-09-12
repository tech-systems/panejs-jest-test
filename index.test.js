const { initializePane, presentPane, destroyPane } = require('./index');

beforeEach(() => {
    // Set up a DOM element for CupertinoPane to target
    document.body.innerHTML = '<div class="pane"></div>';
});

beforeAll(() => {
    global.CSS = {
      supports: () => true,  // or any other method required
    };
});

test('Initialize pane', () => {
    expect(initializePane()).toBe(true);
});

test('Present pane', async () => {
    initializePane(); // Initialize the pane first
    const result = await presentPane();
    expect(result).toBe(true);
});

test('Destroy pane', async () => {
    initializePane(); // Initialize the pane first
    await presentPane();
    const result = await destroyPane();
    expect(result).toBe(true);
});