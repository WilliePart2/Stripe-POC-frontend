const businessTypes = {
    INDIVIDUAL: 'individual',
};

const getStripeClientId = () => 'ca_GV0sjoOv6Fm83U89n5YiKdW1Jpm85lDG';
// production
// const getStripeClientId = () => 'ca_GVEHRKSjyUiW3c2KkNfcNs4OxNNlUgiU';
const getStripePublishableApiKey = () => 'pk_test_Ko4o9Z7DEhrS1dBCrT3aBC5A00MJMEaMsN';
// production
// const getStripePublishableApiKey = () => 'pk_test_DU5IhkJvAa4DpPfvp0yszXcI00QcW1tmWz';

export {
    businessTypes,
    getStripeClientId,
    getStripePublishableApiKey,
};
