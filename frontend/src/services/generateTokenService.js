export const generateTokenService = async (selectedDigits) => {
  const selectedDigitsString = selectedDigits.join(",");
  const url = `http://localhost:8081/generate-token?digits=${selectedDigitsString}`;

  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
  }
};
