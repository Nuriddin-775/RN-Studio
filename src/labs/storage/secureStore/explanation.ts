/**
 * SecureStore Explanation
 */

export const explanation = {
  title: "SecureStore",
  subtitle: "Encrypted storage for sensitive data",

  overview: `
SecureStore provides a way to encrypt and securely store 
key-value pairs locally on the device. On iOS, it uses 
Keychain Services, and on Android, it uses the Android Keystore.
  `.trim(),

  keyPoints: [
    {
      emoji: "🔐",
      title: "Encrypted",
      description: "Data is encrypted using device-level security",
    },
    {
      emoji: "🔑",
      title: "Keychain/Keystore",
      description: "Uses native secure storage APIs",
    },
    {
      emoji: "📱",
      title: "Platform Support",
      description: "iOS and Android only (not web)",
    },
  ],

  codeExamples: {
    basic: `// SecureStore usage
import * as SecureStore from 'expo-secure-store';

// Store encrypted value
await SecureStore.setItemAsync('token', 'secret_value');

// Retrieve decrypted value
const token = await SecureStore.getItemAsync('token');

// Delete value
await SecureStore.deleteItemAsync('token');`,
  },

  useCases: [
    "Authentication tokens",
    "API keys and secrets",
    "User credentials",
    "Encryption keys",
  ],
};

export type Explanation = typeof explanation;

