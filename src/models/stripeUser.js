class StripeUser {
    constructor(
        businessType,
        email,
        businessUrl,
        country,
        phoneNumber,
        businessName,
        firstName,
        lastName,
        dobDay,
        dobMonth,
        dobYear,
        productDescription,
    ) {
        this.business_type = businessType;
        this.email = email;
        this.url = businessUrl;
        this.country = country; // must be a supported country
        this.phone_number = phoneNumber; // use in conjunction with country
        this.business_name = businessName;
        this.first_name = firstName;
        this.last_name = lastName;
        this.dob_day = dobDay; // date of birth - day
        this.dob_month = dobMonth; // date of birth - month
        this.dob_year = dobYear; // date of birth - year
        this.product_description = productDescription;
    }

    static toQueryString(stripeUserInst) {
        return Object.entries(stripeUserInst).reduce((acc, [ key, value ]) => {
            if (typeof value !== 'function') {
                acc += `&stripe_user[${key}]=${value}`;
            }

            return acc;
        }, '');
    }
}

export default StripeUser;
