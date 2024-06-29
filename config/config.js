const config = {
  appwriteUrl: String(import.meta.env.VITE_PROJECT_URL),
  appwriteId: String(import.meta.env.VITE_PROJECT_ID),
  databaseID: String(import.meta.env.VITE_DATABASE_ID),
  collectionID: String(import.meta.env.VITE_COLLECTION_ID),
};

export default config;
