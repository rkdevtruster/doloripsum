// Assuming _() is a localization function provided by a library like i18n
function _(key) {
    // Dummy implementation of a localization function
    const translations = {
        baseline: 'Baseline Translated Text'
    };
    return translations[key] || key;
}

let settings = {
    baseline: _('baseline'),
    // Other settings can be added here
};

console.log(settings.baseline); // Output: Baseline Translated Text
