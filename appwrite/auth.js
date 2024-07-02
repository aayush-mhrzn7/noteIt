import { Account, Client, ID, OAuthProvider } from "appwrite";
import config from "../config/config";
export class AppwriteAuth {
  client = new Client();
  account;
  constructor() {
    this.client = this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteId);
    this.account = new Account(this.client);
  }
  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("error: \n", error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("error login: \n", error);
    }
  }
  async signup({ email, password, name }) {
    try {
      return await this.account.create(ID.unique(), email, password, name);
    } catch (error) {
      console.log("error: \n", error);
    }
  }
  async forgot({ email }) {
    try {
      return await this.account.createRecovery(
        email,
        "http://localhost:5173/change-password"
      );
    } catch (error) {
      console.log("error: \n", error);
    }
  }
  async verification() {
    try {
      console.log("inside verify");
      return await this.account.createVerification(
        "http://localhost:5173/verify"
      );
    } catch (error) {
      console.log("error: \n", error);
    }
  }
  async updateVerify(userId, secret) {
    try {
      return await this.account.updateVerification(userId, secret);
    } catch (error) {
      console.log("error: \n", error);
    }
  }
  async updateForgot(userId, secret, { password, repassword }) {
    try {
      return await this.account.updateRecovery(
        userId,
        secret,
        password,
        repassword
      );
    } catch (error) {
      console.log("error: \n", error);
    }
  }

  googleAuth() {
    try {
      return this.account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:5173/login/oauth2/success",
        "http://localhost:5173/login/oauth2/failure"
      );
    } catch (error) {
      console.log("error: \n", error);
    }
  }
  async logout() {
    try {
      return this.account.deleteSession("current");
    } catch (error) {
      console.log("error: \n", error);
    }
  }
}

const auth = new AppwriteAuth();
export default auth;
