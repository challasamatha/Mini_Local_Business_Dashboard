import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";
import useBusinessStore from "./store/businessStore";

function App() {
  const {
    formInput,
    setFormInput,
    businessData,
    setBusinessData,
    loading,
    setLoading,
  } = useBusinessStore();

  const fetchBusinessData = async () => {
    if (!formInput.name || !formInput.location) {
      alert("Please fill in both Business Name and Location.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/business-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formInput),
      });
      const data = await res.json();
      setBusinessData(data);
    } catch (error) {
      console.error("Error fetching business data:", error);
    }
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/regenerate-headline?name=${formInput.name}&location=${formInput.location}`
      );
      const data = await res.json();
      setBusinessData((prev) => ({ ...prev, headline: data.headline }));
    } catch (error) {
      console.error("Error regenerating headline:", error);
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/src/assets/app-bg.jpeg')" }}
    >
      <div className="bg-black bg-opacity-20 min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto text-white">
          <h1 className="text-4xl font-bold text-center mb-8">
            Mini Local Business Dashboard
          </h1>
          <div
            className={
              businessData
                ? "grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                : "flex justify-center"
            }
          >
            <div className="bg-white bg-opacity-100 rounded-lg p-6 shadow-lg w-full max-w-lg">
              <BusinessForm
                formInput={formInput}
                setFormInput={setFormInput}
                fetchBusinessData={fetchBusinessData}
              />
            </div>

          
            <div>
              {loading && (
                <div className="flex justify-center py-10">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {!loading && businessData && (
                <BusinessCard
                  data={businessData}
                  regenerateHeadline={regenerateHeadline}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


