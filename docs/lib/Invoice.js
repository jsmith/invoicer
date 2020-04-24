import React from "/web_modules/react.js";
import classNames from "/web_modules/classnames.js";
export const Invoice = props => {
  const {
    companyName,
    companyAddress,
    companyCityProvincePost,
    issueDate,
    invoiceNo,
    clientName,
    clientAddress,
    clientCityProvincePost,
    items,
    subtotal,
    paid,
    amountDue,
    paymentInfo
  } = props.invoice;
  const issueDateFormatted = (props.invoice.issueDate ?? new Date()).toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  const paymentInfoElements = paymentInfo.map(line => {
    return /*#__PURE__*/React.createElement("div", null, line);
  });
  const itemElements = items.map(item => {
    return /*#__PURE__*/React.createElement("tr", {
      "data-iterate": "item"
    }, /*#__PURE__*/React.createElement("td", {
      className: "text-sm py-2 px-2"
    }, /*#__PURE__*/React.createElement("span", null, item.description)), /*#__PURE__*/React.createElement("td", {
      className: "text-sm py-2 px-1 text-right"
    }, /*#__PURE__*/React.createElement("span", null, item.qty)), /*#__PURE__*/React.createElement("td", {
      className: "text-sm py-2 px-1 text-right"
    }, /*#__PURE__*/React.createElement("span", null, item.price)), /*#__PURE__*/React.createElement("td", {
      className: "text-sm py-2 px-2 text-right"
    }, /*#__PURE__*/React.createElement("span", null, item.total)));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("p-8 font-mono a4 print:p-0 flex flex-col", props.className)
  }, /*#__PURE__*/React.createElement("section", {
    id: "memo",
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, companyName), /*#__PURE__*/React.createElement("div", null, companyAddress), /*#__PURE__*/React.createElement("div", null, companyCityProvincePost)), /*#__PURE__*/React.createElement("div", {
    className: "payment-info"
  }, paymentInfoElements)), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-gray-300 mt-6"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between mt-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-56"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Date"), /*#__PURE__*/React.createElement("span", null, issueDateFormatted)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Invoice No."), /*#__PURE__*/React.createElement("span", null, invoiceNo))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "Bill To"), /*#__PURE__*/React.createElement("span", null, clientName), /*#__PURE__*/React.createElement("span", null, clientAddress), /*#__PURE__*/React.createElement("span", null, clientCityProvincePost))), /*#__PURE__*/React.createElement("div", {
    className: "clearfix"
  }), /*#__PURE__*/React.createElement("div", {
    className: "clearfix"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("table", {
    cellPadding: "0",
    cellSpacing: "0",
    className: "table-auto w-full"
  }, /*#__PURE__*/React.createElement("thead", {
    className: ""
  }, /*#__PURE__*/React.createElement("tr", {
    className: "bg-gray-800 text-white"
  }, /*#__PURE__*/React.createElement("th", {
    className: "text-left py-2 px-2"
  }, "DESCRIPTION OF WORK"), /*#__PURE__*/React.createElement("th", {
    className: "text-right py-2 px-1"
  }, "QTY"), /*#__PURE__*/React.createElement("th", {
    className: "text-right py-2 px-1"
  }, "UNIT PRICE"), /*#__PURE__*/React.createElement("th", {
    className: "text-right py-2 px-2"
  }, "SUBTOTAL"))), /*#__PURE__*/React.createElement("tbody", null, itemElements))), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-48"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between p-3"
  }, /*#__PURE__*/React.createElement("span", null, "TOTAL"), /*#__PURE__*/React.createElement("span", null, subtotal)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between p-3 text-gray-700"
  }, /*#__PURE__*/React.createElement("span", null, "PAID"), /*#__PURE__*/React.createElement("span", null, paid)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between bg-gray-800 p-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white"
  }, "AMOUNT DUE"), /*#__PURE__*/React.createElement("span", {
    className: "text-white"
  }, amountDue)))));
};