class Signup {
    constructor(page) {
        this.page = page;
        this.name = "Name";
        this.email = "Email";
        this.password = "Password";
        this.signupButton = "//button[text()='Sign Up']"; // Add button locator
    }

    async register(userName, userEmail, userPassword) {
        await this.page.getByPlaceholder(this.name).fill(userName);
        await this.page.getByPlaceholder(this.email).fill(userEmail);
        await this.page.getByPlaceholder(this.password).fill(userPassword);
        await this.page.click(this.signupButton); // Click sign-up button
    }
}

module.exports = Signup; // ✅ Correct export for CommonJS
