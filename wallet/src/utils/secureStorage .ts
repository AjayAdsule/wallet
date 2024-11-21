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
    return CryptoJS.AES.encrypt(data, import.meta.env.VITE_SECRET).toString();
  },

  /**
   * Decrypts the given data using AES encryption and the given password.
   *
   * @param encryptedData The encrypted data.
   * @param secret The secret to be used for decryption.
   * @returns The decrypted string.
   */
  decrypt: (encryptedData: string): string => {
    const bytes = CryptoJS.AES.decrypt(
      encryptedData,
      import.meta.env.VITE_SECRET
    );
    return bytes.toString(CryptoJS.enc.Utf8);
  },
};
