function BusinessForm({ formInput, setFormInput, fetchBusinessData }) {
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBusinessData();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-purple-300 p-6 rounded shadow space-y-4">
      <div>
        <label className="block text-black font-semibold mb-1">Business Name</label>
        <input
          type="text"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          placeholder="e.g., Cake & Co"
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-black font-semibold mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formInput.location}
          onChange={handleChange}
          placeholder="e.g., Mumbai"
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default BusinessForm;
