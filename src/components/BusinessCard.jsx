function BusinessCard({ data, regenerateHeadline }) {
  return (
    <div className="bg-orange-300 p-12 rounded shadow ">
      <h2 className="text-xl font-semibold mb-2">Business Data</h2>
      <p><strong>Rating:</strong> ⭐ {data.rating}</p>
      <p><strong>Reviews:</strong> {data.reviews}</p>
      <p className="mt-2"><strong>SEO Headline:</strong></p>
      <p className="italic text-blue-700">{data.headline}</p>
      <button
        onClick={regenerateHeadline}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}

export default BusinessCard;


