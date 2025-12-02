"use client";
import { useState } from "react";
import SalesTable from "./components/SalesTable";
import { getSalesData, getToken } from "./lib/api";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [filters, setFilters] = useState({});
  const [pagination, setPagination] = useState({ after: null, before: null });
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
  console.log(data);

  if (tokenLoading) return <p>Token is loading....</p>;
  if (salesLoading) return <p>sales Data is loading....</p>;

  return (
    <div>
      <h1 className="text-6xl text-center mb-10">Sales Dashboard</h1>

      <SalesTable
        setPagination={setPagination}
        data={data}
        pagination={salesData?.pagination || {}}
      ></SalesTable>
    </div>
  );
}
