const serverBaseUrl = () => 'http://localhost:4200';
const getUserBase = () => `${serverBaseUrl()}/users`;

const serverApi = {
    // stripeConnect: () => `${serverBaseUrl()}/callback`,
    auth: (userId) => `${getUserBase()}/${userId}/onboarding`,
    login: (userId) => `${getUserBase()}/${userId}/initialized`,
    dashboard: (userId) => `${getUserBase()}/${userId}/dashboard`,
    payment: () => `${serverBaseUrl()}/payments`,
};

export { serverApi };
