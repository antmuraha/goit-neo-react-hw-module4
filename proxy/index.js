const ACCESS_KEY = process.env.ACCESS_KEY;

export const proxy = async (req, res) => {
  res.set(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV === 'production' ? 'https://goit-neo-react-hw-module4-cyan-omega.vercel.app' : '*'
  );
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Accept-Version', 'v1');

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
    const isSearch = !!queryParams.get('query');
    const url = isSearch
      ? `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&${queryParams}`
      : `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&${queryParams}`;

    console.log(`Fetching from Unsplash: ${url}`);

    // Fetch data from Unsplash API
    const response = await fetch(url);
    const data = await response.json();
    const xTotal = Number(response.headers.get('x-total'));
    const xPerPage = Number(response.headers.get('x-per-page'));
    res.status(response.status).json(isSearch ? data : { total: xTotal, total_pages: xPerPage, results: data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching from Unsplash');
  }
};
