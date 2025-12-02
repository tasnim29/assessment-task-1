"use client";
import { useState, useEffect } from "react";
import SalesTable from "./components/SalesTable";
import { getSalesData, getToken } from "./lib/api";
import { useQuery } from "@tanstack/react-query";
import Filters from "./components/Filters";
import SalesChart from "./components/SalesChart";
import Loader from "./components/Loader";

export default function Home() {
  const [values, setValues] = useState({
    startDate: "",
    endDate: "",
    priceMin: "",
    email: "",
    phone: "",
    sortBy: "date",
    sortOrder: "asc",
  });

  const [filters, setFilters] = useState(values);

  const [pagination, setPagination] = useState({ after: null, before: null });

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters(values);
    }, 500);

    return () => clearTimeout(handler);
  }, [values]);

  // getToken
  const { data: tokenData, isLoading: tokenLoading } = useQuery({
    queryKey: ["token"],
    queryFn: getToken,
  });

  const token = tokenData?.token;

  // getSalesData
  const { data: salesData, isLoading: salesLoading } = useQuery({
    queryKey: ["sales", token, filters, pagination],
    queryFn: () => getSalesData(token, filters, pagination),
    enabled: !!token,
    keepPreviousData: true,
  });

  const data = salesData?.results?.Sales || [];
  const totalSales = salesData?.results?.TotalSales || [];
  // console.log(totalSales);

  if (tokenLoading) return <Loader></Loader>;
  if (salesLoading) return <Loader></Loader>;

  return (
    <div className="max-w-7xl mx-auto px-8 py-10 space-y-8">
      <h1 className="text-6xl text-center mb-10 font-semibold text-blue-700">
        Sales Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="col-span-3">
          <Filters values={values} setValues={setValues} />
        </div>
        <div className="col-span-9">
          <SalesTable
            setPagination={setPagination}
            data={data}
            pagination={salesData?.pagination || {}}
            onSort={(field) => {
              setValues((prev) => ({
                ...prev,
                sortBy: field,
                sortOrder:
                  prev.sortBy === field && prev.sortOrder === "asc"
                    ? "desc"
                    : "asc",
              }));
            }}
            sortBy={values.sortBy}
            sortOrder={values.sortOrder}
          />
        </div>
      </div>

      <div>
        <SalesChart totalSales={totalSales}></SalesChart>
      </div>
    </div>
  );
}
