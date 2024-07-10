import { Client, Databases, ID } from "appwrite";
import config from "../config/config";
export class AppwriteService {
  client = new Client();
  databases;
  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteId);
    this.databases = new Databases(this.client);
  }
  async listDocuments() {
    try {
      const documents = await this.databases.listDocuments(
        config.databaseID,
        config.collectionID
      );
      return documents.documents;
    } catch (error) {
      console.log("error in listing document", error);
    }
  }
  async createDocuments({ title, body, favorate }) {
    try {
      return await this.databases.createDocument(
        config.databaseID,
        config.collectionID,
        ID.unique(),
        {
          title,
          body,
          favorate,
        }
      );
    } catch (error) {
      console.log("error in creating document", error);
    }
  }
  async getDocument(id) {
    try {
      return await this.databases.getDocument(
        config.databaseID,
        config.collectionID,
        id
      );
    } catch (error) {
      console.log("error in getting document", error);
    }
  }
  async updateDocuments(id, { title, body, favorate }) {
    try {
      return await this.databases.updateDocument(
        config.databaseID,
        config.collectionID,
        id,
        {
          title,
          body,
          favorate,
        }
      );
    } catch (error) {
      console.log("error in updating document", error);
    }
  }
  async deleteDocuments(id) {
    try {
      return await this.databases.deleteDocument(
        config.databaseID,
        config.collectionID,
        id
      );
    } catch (error) {
      console.log("error in deleting document", error);
    }
  }
}

const service = new AppwriteService();
export default service;
