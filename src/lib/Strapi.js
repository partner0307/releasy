import {
  createClient,
  StrapiClientOptions,
} from '@kmariappan/strapi-client-js';

const options = {
  url: process.env.NEXT_PUBLIC_RELEASY_CRM_URL,
  apiToken: process.env.NEXT_PUBLIC_RELEASY_CRM_API_KEY, // Built in API token,
  normalizeData: true, // Normalize Unified response Format. default - true
  headers: {}, // Custom Headers
  persistSession: false, // Persist authenticated token in browser local storage. default -false
};

const StrapiClient = createClient(options);

export default StrapiClient;
