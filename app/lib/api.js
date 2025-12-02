const BASE_URL = "https://autobizz-425913.uc.r.appspot.com";
("https://autobizz-425913.uc.r.appspot.com/getAuthorize");
export const getToken = async () => {
  const response = await fetch(`${BASE_URL}/getAuthorize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tokenType: "frontEndTest" }),
  });
  const data = await response.json();
  // console.log("TOKEN RESPONSE:", data);
  return data;
};

//"https://autobizz-425913.uc.r.appspot.com/sales?startDate=2025-01-01&endDate=2025-01-01&priceMin=&email=&phone=&sortBy=date&sortOrder=asc&after=&before=";

export const getSalesData = async (token, filters = {}, pagination = {}) => {
  const params = new URLSearchParams();
  params.append("startDate", filters.startDate || "");
  params.append("endDate", filters.endDate || "");
  params.append("priceMin", filters.priceMin || "");
  params.append("email", filters.email || "");
  params.append("phone", filters.phone || "");
  params.append("sortBy", filters.sortBy || "date");
  params.append("sortOrder", filters.sortOrder || "asc");
  params.append("after", pagination.after || "");
  params.append("before", pagination.before || "");

  const response = await fetch(`${BASE_URL}/sales?${params.toString()}`, {
    headers: {
      "X-AUTOBIZZ-TOKEN": token,
    },
  });
  return response.json();
};
