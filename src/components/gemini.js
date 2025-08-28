// Utility to call Gemini API

export async function fetchGeminiResponse(userMessage) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error('Missing Gemini API key');

  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey;
  const body = {
    contents: [
      { role: 'system', parts: [{ text: 'Answer only with Bible verses and short explanations.' }] },
      { role: 'user', parts: [{ text: userMessage }] }
    ],
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('Gemini API error');
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not find an answer.';
}
