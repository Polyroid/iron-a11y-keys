Package.describe({
    name: 'polyroid:iron-a11y-keys',
    version: '1.0.2',
    summary: 'A basic element implementation of iron-a11y-keys-behavior, matching the legacy core-a11y-keys.',
    git: 'https://github.com/Polyroid/iron-a11y-keys.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0',
        'polyroid:iron-a11y-keys-behavior@1.0.0'
    ], 'client');

    api.addAssets([
        'iron-a11y-keys.html'
    ], 'client');
});
