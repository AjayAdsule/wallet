import CryptoJS from "crypto-js";

export const SecureStorage = {
  /**
   * Encrypts the given data using AES encryption and the given password.
   *
   * @param data The data to be encrypted.
   * @param secret secret is generated through openssl
   * @returns An encrypted string.
   */
  encrypt: (data: string): string => {
    try {
      // Ensure the secret key is available
      if (!import.meta.env.VITE_SECRET) {
        throw new Error("Encryption key is not defined");
      }

      // Simple encryption
      const encrypted = CryptoJS.AES.encrypt(
        data,
        import.meta.env.VITE_SECRET
      ).toString();

      return encrypted;
    } catch (error) {
      console.error("Encryption error:", error);
      throw error;
    }
  },

  /**
   * Decrypts the given data using AES encryption and the given password.
   *
   * @param encryptedData The encrypted data.
   * @param secret The secret to be used for decryption.
   * @returns The decrypted string.
   */
  decrypt: (encryptedData: string): string => {
    try {
      // Ensure the secret key is available
      if (!import.meta.env.VITE_SECRET) {
        throw new Error("Encryption key is not defined");
      }

      const decrypted = CryptoJS.AES.decrypt(
        encryptedData,
        import.meta.env.VITE_SECRET
      );

      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error("Decryption error:", error);
      throw error;
    }
  },
};
