import React from "/web_modules/react.js";
import { Invoice } from "./Invoice.js";
const invoice = {
  companyName: "Jack Smith",
  companyAddress: "123 Main St.",
  companyCityProvincePost: "Fanny, FO 37423",
  paymentInfo: ["E-Transfer Details", "jack.smith@email.com"],
  issueDate: new Date(),
  invoiceNo: "0002",
  clientName: "Company 123 Inc.",
  clientAddress: "PO Box 100",
  clientCityProvincePost: "Fanny, FO 37423",
  items: [{
    description: "Fanny Fo Item",
    qty: "1",
    price: "$500",
    total: "$500"
  }],
  subtotal: "$500",
  paid: "$0",
  amountDue: "$500"
};
export const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center py-10 bg-gray-100 print:py-0 print:h-full print:fixed print:inset-0"
  }, /*#__PURE__*/React.createElement(Invoice, {
    className: "bg-white shadow-2xl print:max-h-full",
    invoice: invoice
  }));
};