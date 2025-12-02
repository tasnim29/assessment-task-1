"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const SalesTable = ({ setPagination, data = [], pagination }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center text-3xl font-bold">SalesTable</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>date</TableHead>
            <TableHead>price</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((sale) => (
            <TableRow key={sale._id}>
              <TableCell>{sale._id}</TableCell>
              <TableCell>{new Date(sale.date).toLocaleString()}</TableCell>
              <TableCell>{sale.price}</TableCell>
              <TableCell>{sale.customerEmail}</TableCell>
              <TableCell className="text-right">{sale.customerPhone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="space-x-10">
        <button
          disabled={!pagination.before}
          onClick={() =>
            setPagination({ before: pagination.before, after: null })
          }
        >
          Previous
        </button>

        <button
          disabled={!pagination.after}
          onClick={() =>
            setPagination({ after: pagination.after, before: null })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SalesTable;
