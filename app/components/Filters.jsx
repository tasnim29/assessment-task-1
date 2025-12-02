import { Input } from "@/components/ui/input";
import React from "react";

const Filters = ({ values, setValues }) => {
  function updateInputs(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }
  return (
    <div className="space-y-5">
      <Input
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={(e) => updateInputs("email", e.target.value)}
      />
      <Input
        type="date"
        placeholder="Start Date"
        value={values.startDate}
        onChange={(e) => updateInputs("startDate", e.target.value)}
      />
      <Input
        type="date"
        placeholder="End Date"
        value={values.endDate}
        onChange={(e) => updateInputs("endDate", e.target.value)}
      />
      <Input
        type="text"
        placeholder="Phone"
        value={values.phone}
        onChange={(e) => updateInputs("phone", e.target.value)}
      />
      <Input
        type="number"
        placeholder="Min Price"
        value={values.priceMin}
        onChange={(e) => updateInputs("priceMin", e.target.value)}
      />
    </div>
  );
};

export default Filters;
