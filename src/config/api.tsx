const isProduction = process.env.NODE_ENV === "production";
const baseApiUrl = process.env.REACT_APP_API_BASE_URL as string;
const devApiConfig = {
  baseUrl: baseApiUrl,
};

const prodApiConfig = {
  baseUrl: baseApiUrl,
};

const apiConfig = isProduction ? prodApiConfig : devApiConfig;

export { apiConfig };
