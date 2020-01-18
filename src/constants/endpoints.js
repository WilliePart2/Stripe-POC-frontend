const serverBaseUrl = () => 'http://localhost:4200';

const serverApi = {
    // stripeConnect: () => `${serverBaseUrl()}/callback`,
    auth: (userId) => `${serverBaseUrl()}/user/${userId}/onboarding`,
    login: (userId) => `${serverBaseUrl()}/users/${userId}/initialized`,
    dashboard: (userId) => `${serverBaseUrl()}/users/${userId}/dashboard`,
};

export { serverApi };
