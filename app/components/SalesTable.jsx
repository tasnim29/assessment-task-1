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
import { Button } from "@/components/ui/button";

const SalesTable = ({
  setPagination,
  data = [],
  pagination,
  onSort,
  sortBy,
  sortOrder,
}) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>
              Date
              <button onClick={() => onSort("date")}>
                {sortBy === "date"
                  ? sortOrder === "asc"
                    ? "⬇️"
                    : "⬆️"
                  : "⬆️⬇️"}
              </button>
            </TableHead>
            <TableHead>
              Price
              <button onClick={() => onSort("price")}>
                {sortBy === "price"
                  ? sortOrder === "asc"
                    ? "⬇️"
                    : "⬆️"
                  : "⬆️⬇️"}
              </button>
            </TableHead>
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

      <div className="space-x-10 mt-5">
        <Button
          disabled={!pagination.before}
          onClick={() =>
            setPagination({ before: pagination.before, after: null })
          }
        >
          Previous
        </Button>

        <Button
          disabled={!pagination.after}
          onClick={() =>
            setPagination({ after: pagination.after, before: null })
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SalesTable;
