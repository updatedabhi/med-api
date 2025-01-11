import React from "react";
import traxol from "../assets/images/traxol.png";

function ProductListing() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
      <div className="text-center bg-slate-300 p-4 rounded shadow">
        <img
          className="w-20 h-20 mx-auto object-contain"
          src={traxol}
          alt="traxol"
        />
        <h1 className="text-lg font-bold mt-2">Traxol 250Mg Injection</h1>
        <p className="text-sm text-gray-500">Rating: 3431</p>
        <span className="text-lg font-semibold text-green-600">
          &#8377; 22.55
        </span>
      </div>
      <div className="text-center bg-slate-300 p-4 rounded shadow">
        <img
          className="w-20 h-20 mx-auto object-contain"
          src={traxol}
          alt="traxol"
        />
        <h1 className="text-lg font-bold mt-2">Traxol 250Mg Injection</h1>
        <p className="text-sm text-gray-500">Rating: 3431</p>
        <span className="text-lg font-semibold text-green-600">
          &#8377; 22.55
        </span>
      </div>
      <div className="text-center bg-slate-300 p-4 rounded shadow">
        <img
          className="w-20 h-20 mx-auto object-contain"
          src={traxol}
          alt="traxol"
        />
        <h1 className="text-lg font-bold mt-2">Traxol 250Mg Injection</h1>
        <p className="text-sm text-gray-500">Rating: 3431</p>
        <span className="text-lg font-semibold text-green-600">
          &#8377; 22.55
        </span>
      </div>
      <div className="text-center bg-slate-300 p-4 rounded shadow">
        <img
          className="w-20 h-20 mx-auto object-contain"
          src={traxol}
          alt="traxol"
        />
        <h1 className="text-lg font-bold mt-2">Traxol 250Mg Injection</h1>
        <p className="text-sm text-gray-500">Rating: 3431</p>
        <span className="text-lg font-semibold text-green-600">
          &#8377; 22.55
        </span>
      </div>
    </div>
  );
}

export default ProductListing;
