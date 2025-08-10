const ACCESS_KEY = process.env.ACCESS_KEY;

export const pixabayProxy = async (req, res) => {
  res.set('Access-Control-Allow-Origin', process.env.NODE_ENV === 'production' ? 'https://antmuraha.github.io' : '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Accept-Version', 'v1');
  res.set('Authorization', `Client-ID ${ACCESS_KEY}`);

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).send('Only GET allowed');
    return;
  }

  try {
    const queryParams = new URLSearchParams(req.query);
    const url = `https://api.unsplash.com/?${queryParams}`;
    console.log(`Fetching from Unsplash: ${url}`);
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching from Unsplash');
  }
};
