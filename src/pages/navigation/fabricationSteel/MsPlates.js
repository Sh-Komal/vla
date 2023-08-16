import React, { useEffect, useState } from "react";
import { fetchDataFromEndpoint } from "../../../ApiConfig";
import ConImg from "../../../Assets/hc_img.png"

const MsPlates = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tonsInput, setTonsInput] = useState("");
  const [piecesInput, setPiecesInput] = useState("");

  useEffect(() => {
    fetchDataFromEndpoint("/ims/api/opn_products_category.php", "OPNCategoryProducts", "1") 
      .then((data) => {
        setProducts(data.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Ms Flats data:", error);
        setLoading(false);
      });
  }, []);
  
  const calculateTotalWeight = () => {
    // Implement your logic here to calculate based on API data and user inputs
    // Example: const totalTons = tonsInput * someMultiplier;
    // Example: const totalPieces = piecesInput * someFactor;
  };



  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 ">
          <div className="bg-white rounded-lg shadow p-4 space-y-4">
            <h3 className="font-semibold mb-2">Dropdown Menu</h3>
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
          <div className="bg-sky-900 mt-9  rounded-lg shadow p-4 space-y-7">
          <img
              src={ConImg}
              alt="Contact Us"
              className="w-full h-42 object-cover mt-4"
            />
            <div>
              <h2 className="font-semibold mb-2">Have any questions?</h2>
              <p>Call Us :</p>
              <p>1800-833-2929</p>
              <p>For Details</p>
            </div>
          </div>
            
            
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading ? (
              <p>Loading Ms Plates data...</p>
            ) : (
              products.map((product) => (
                <div key={product.ProductID} className="bg-white rounded-lg shadow p-4">
                  <img
                    src={product.Image}
                    alt={product.Name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <div className="flex flex-col items-center">
                    <span className="text-gray-500">Price Start from</span>
                    <h6 className="font-semibold text-lg">Rs {product.Price}</h6>
                  </div>
                  <div className="mt-4">
                    <ul className="grid grid-cols-2 gap-4">
                      <li>
                        <span className="font-semibold">Length:</span> {product.Length} ft
                      </li>
                      <li>
                        <span className="font-semibold">Average Weight:</span> {product.AverageWeight}{" "}
                        kg
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsPlates;
