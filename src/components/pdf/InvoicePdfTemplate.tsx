// InvoicePdfTemplate.tsx
"use client";
import React from "react";
import { styles } from "./PDFStyles";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { InvoiceData } from "@/context/types";
import { formatDate } from "@/lib/formatDate";
import { getCurrencySymbol } from "@/lib/getCurrencySymbol";

interface Props {
  data: InvoiceData;
}

const InvoicePdfTemplate: React.FC<Props> = ({ data }) => {
  // Safety check for requirements object
  const requirements = data.requirements || {
    sellerVatNumber: false,
    sellerEmail: false,
    sellerPhone: false,
    buyerEmail: false,
    buyerPhone: false,
    itemTaxAmount: false,
    itemTaxPercentage: false,
    additionalCharges: false,
    discount: false,
    orderNumber: false,
    purchaseOrder: false,
    serviceDate: false,
  };

  return (
    <Document title={`invoice-${data.general.invoiceNumber}`}>
      <Page size="A4" style={styles.page}>
        {/* Header (repeated) */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.invoiceTitle}>{data.general.invoiceType}</Text>
            <Text style={styles.invoiceNumber}>
              No: {data.general.invoiceNumber}
            </Text>
            <View style={styles.orderDetails}>
              {!requirements.orderNumber && (
                <View style={styles.detailsGrid}>
                  <Text style={styles.detailsLabel}>Order No:</Text>
                  <Text style={styles.detailsValue}>#{data.general.orderNumber}</Text>
                </View>
              )}
              {!requirements.purchaseOrder && (
                <View style={styles.detailsGrid}>
                  <Text style={styles.detailsLabel}>Purchase Order:</Text>
                  <Text style={styles.detailsValue}>{data.general.purchaseOrder}</Text>
                </View>
              )}
              <View style={styles.detailsGrid}>
                <Text style={styles.detailsLabel}>Invoice Date:</Text>
                <Text style={styles.detailsValue}>
                  {formatDate(data.general.issueDate, data.general.dateFormat)}
                </Text>
              </View>
              {!requirements.serviceDate && (
                <View style={styles.detailsGrid}>
                  <Text style={styles.detailsLabel}>Due Date:</Text>
                  <Text style={styles.detailsValue}>
                    {formatDate(data.general.serviceDate, data.general.dateFormat)}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.sellerName}>{data.seller.name}</Text>
            {!requirements.sellerVatNumber && (
              <Text style={styles.sellerVat}>TAX - {data.seller.vatNumber}</Text>
            )}
            <View style={styles.orderDescription}>
              <Text style={styles.detailsText}>{data.seller.address}</Text>
              {!requirements.sellerEmail && (
                <Text style={styles.detailsText}>{data.seller.email}</Text>
              )}
              {!requirements.sellerPhone && (
                <Text style={styles.detailsText}>{data.seller.phone}</Text>
              )}
            </View>
          </View>
        </View>

        {/* Customer block only on first page */}
        <View style={styles.customerBlock}>
          <View style={styles.customerLeft}>
            <View style={styles.customerDetails}>
              <Text style={styles.customerHead}>Customer Details</Text>
              <Text style={styles.customerDesp}>{data.buyer.name}</Text>
              {!requirements.buyerEmail && (
                <Text style={styles.customerDesp}>{data.buyer.email}</Text>
              )}
              {!requirements.buyerPhone && (
                <Text style={styles.customerDesp}>{data.buyer.phone}</Text>
              )}
            </View>
          </View>
          <View style={styles.customerRight}>
            <View style={styles.customerDetails}>
              <Text style={styles.customerHead}>Billing Address</Text>
              <Text style={styles.customerDesp}>{data.buyer.address}</Text>
            </View>
          </View>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCol1}>#</Text>
            <Text style={styles.tableCol2}>Item Name</Text>
            <Text style={styles.tableCol3}>Qty</Text>
            <Text style={styles.tableCol4}>Unit Price</Text>
            {(!requirements.itemTaxAmount || !requirements.itemTaxPercentage) && (
              <Text style={styles.tableCol5}>Tax</Text>
            )}
            <Text style={styles.tableCol6}>Total</Text>
          </View>
          {data.items &&
            data.items.map((itemData, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.tableCol1}>{idx + 1}</Text>
                <View style={styles.tableCol2}>
                  <View style={styles.despCell}>
                    <Text>{itemData.name}</Text>
                    <Text style={styles.subDespCell}>
                      {itemData.description}
                    </Text>
                  </View>
                </View>
                <Text style={styles.tableCol3}>{itemData.quantity}</Text>
                <Text style={styles.tableCol4}>
                  {getCurrencySymbol(data.general.currency)}
                  {itemData.unitPrice.toFixed(2)}
                </Text>
                {(!requirements.itemTaxAmount || !requirements.itemTaxPercentage) && (
                  <View style={styles.tableCol5}>
                    <View style={styles.despCell}>
                      {!requirements.itemTaxAmount && (
                        <Text>
                          {getCurrencySymbol(data.general.currency)}
                          {itemData.taxAmount.toFixed(2)}
                        </Text>
                      )}
                      {!requirements.itemTaxPercentage && (
                        <Text style={styles.subDespCell}>
                          {itemData.taxPercentage}%
                        </Text>
                      )}
                    </View>
                  </View>
                )}
                <Text style={styles.tableCol6}>
                  {getCurrencySymbol(data.general.currency)}
                  {itemData.total.toFixed(2)}
                </Text>
              </View>
            ))}
        </View>

        {/* Totals only on last page */}
        <View style={styles.totalBlock}>
          <View style={styles.bankCol}>
            <Text style={styles.bankHead}>Account Details</Text>
            <Text style={styles.bankDesp}>{data.seller.accountDetails}</Text>
          </View>
          <View style={styles.totalCol}>
            <View style={styles.subTotalBlock}>
              {!requirements.additionalCharges && (
                <View style={styles.subTotalRow}>
                  <Text style={styles.subTotalHead}>Additional Charges</Text>
                  <Text style={styles.subTotalDesp}>
                    {getCurrencySymbol(data.general.currency)}
                    {data.additionalCharges}
                  </Text>
                </View>
              )}
              {/* <View style={styles.subTotalRow}>
                <Text style={styles.subTotalHead}>Subtotal</Text>
                <Text style={styles.subTotalDesp}>
                  {getCurrencySymbol(data.general.currency)}28,016.00
                </Text>
              </View> */}
              {!requirements.discount && (
                <View style={styles.subTotalRow}>
                  <Text style={styles.subTotalHead}>Discount</Text>
                  <Text style={styles.subTotalDesp}>
                    -{getCurrencySymbol(data.general.currency)}
                    {data.discount}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalHead}>Grand Total</Text>
              <Text style={styles.totalDesp}>
                {getCurrencySymbol(data.general.currency)}
                {data.total}
              </Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <View style={styles.footerBottom}>
            <Text>
              This is a computer-generated invoice created using InvoiceGen.
            </Text>
            <Text
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
            />
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePdfTemplate;
