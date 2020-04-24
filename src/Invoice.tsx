import React from "react";
import classNames from "classnames";

export interface InvoiceDetails {
  companyName: string;
  companyAddress: string;
  companyCityProvincePost: string;
  issueDate?: Date;
  invoiceNo: string;
  clientName: string;
  clientAddress: string;
  clientCityProvincePost: string;
  items: Array<{
    description: string;
    qty: string;
    price: string;
    total: string;
  }>;
  subtotal: string;
  paid: string;
  amountDue: string;
  paymentInfo: string[];
}

export interface InvoiceProps {
  className?: string;
  invoice: InvoiceDetails;
}

export const Invoice = (props: InvoiceProps) => {
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
    paymentInfo,
  } = props.invoice;
  const issueDateFormatted = (props.invoice.issueDate ?? new Date()).toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const paymentInfoElements = paymentInfo.map((line) => {
    return <div>{line}</div>;
  });

  const itemElements = items.map((item) => {
    return (
      <tr data-iterate="item">
        <td className="text-sm py-2 px-2">
          <span>{item.description}</span>
        </td>
        <td className="text-sm py-2 px-1 text-right">
          <span>{item.qty}</span>
        </td>
        <td className="text-sm py-2 px-1 text-right">
          <span>{item.price}</span>
        </td>
        <td className="text-sm py-2 px-2 text-right">
          <span>{item.total}</span>
        </td>
      </tr>
    );
  });

  return (
    <div className={classNames("p-8 font-mono a4 print:p-0 flex flex-col", props.className)}>
      <section id="memo" className="flex justify-between">
        <div>
          <div>{companyName}</div>
          <div>{companyAddress}</div>
          <div>{companyCityProvincePost}</div>
        </div>

        <div className="payment-info">{paymentInfoElements}</div>
      </section>

      <div className="border-t border-gray-300 mt-6"></div>

      <div className="flex justify-between mt-8">
        <div className="w-56">
          <div className="flex justify-between">
            <span>Date</span>
            <span>{issueDateFormatted}</span>
          </div>

          <div className="flex justify-between">
            <span>Invoice No.</span>
            <span>{invoiceNo}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="font-bold">Bill To</span>
          <span>{clientName}</span>
          <span>{clientAddress}</span>
          <span>{clientCityProvincePost}</span>
        </div>
      </div>

      <div className="clearfix"></div>

      <div className="clearfix"></div>

      <div className="mt-5">
        <table cellPadding="0" cellSpacing="0" className="table-auto w-full">
          <thead className="">
            <tr className="bg-gray-800 text-white">
              <th className="text-left py-2 px-2">DESCRIPTION OF WORK</th>
              <th className="text-right py-2 px-1">QTY</th>
              <th className="text-right py-2 px-1">UNIT PRICE</th>
              <th className="text-right py-2 px-2">SUBTOTAL</th>
            </tr>
          </thead>

          <tbody>{itemElements}</tbody>
        </table>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-end">
        <div className="w-48">
          <div className="flex justify-between p-3">
            <span>TOTAL</span>
            <span>{subtotal}</span>
          </div>
          <div className="flex justify-between p-3 text-gray-700">
            <span>PAID</span>
            <span>{paid}</span>
          </div>
          <div className="flex justify-between bg-gray-800 p-3">
            <span className="text-white">AMOUNT DUE</span>
            <span className="text-white">{amountDue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
