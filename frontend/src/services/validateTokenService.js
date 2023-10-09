export const validateTokenService = async (token) => {
  const url = `http://localhost:8082/validate-token?token=${token}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
