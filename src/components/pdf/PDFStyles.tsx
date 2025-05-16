import { StyleSheet } from "@react-pdf/renderer";

// Create styles
export const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 46,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: "column",
    width: "48%",
  },
  headerRight: {
    width: "40%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  invoiceTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#11181C",
  },
  invoiceNumber: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#11181C",
  },
  sellerName: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#3E63DD",
  },
  sellerVat: {
    fontSize: 10,
    marginTop: 4,
    fontWeight: "normal",
    color: "#11181C",
  },
  orderDetails: {
    marginTop: 8,
  },
  orderDescription: {
    marginTop: 8,
    flexDirection: "column",
    gap: 4,
  },
  detailsGrid: {
    flexDirection: "row",
    marginBottom: 4,
    gap: 35,
  },
  detailsLabel: {
    color: "#7E868C",
    fontSize: 10,
    fontWeight: "normal",
    minWidth: 61,
  },
  detailsValue: {
    color: "#11181C",
    fontSize: 10,
    fontWeight: "normal",
  },
  detailsText: {
    color: "#7E868C",
    fontSize: 10,
    fontWeight: "normal",
  },
  customerBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  customerLeft: {
    width: "48%",
    flexDirection: "column",
  },
  customerRight: {
    width: "40%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  customerDetails: {
    flexDirection: "column",
    gap: 4,
  },
  customerHead: {
    color: "#687076",
    fontSize: 10,
    fontWeight: "bold",
  },
  customerDesp: {
    color: "#11181C",
    fontSize: 10,
    fontWeight: "normal",
  },
  table: { marginTop: 16 },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#F1F3F5",
    borderTopColor: "#F1F3F5",
    color: "#687076",
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 10,
    fontWeight: "bold",
  },
  tableCol1: { width: "5%", paddingLeft: 4 },
  tableCol2: { width: "43%", paddingRight: 5 },
  tableCol3: { width: "9%", textAlign: "center" },
  tableCol4: { width: "15%", textAlign: "left" },
  tableCol5: { width: "15%", textAlign: "left" },
  tableCol6: { width: "13%", textAlign: "right", paddingRight: 4 },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F3F5",
    paddingVertical: 12,
    color: "#11181C",
    fontSize: 10,
    fontWeight: "normal",
  },
  despCell: {
    flexDirection: "column",
    gap: 4,
  },
  subDespCell: {
    color: "#7E868C",
  },
  totalBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  bankCol: {
    width: "40%",
    flexDirection: "column",
    gap: 4,
  },
  bankHead: {
    color: "#687076",
    fontSize: 10,
    fontWeight: "bold",
  },
  bankDesp: {
    color: "#11181C",
    fontSize: 10,
    fontWeight: "normal",
  },
  totalCol: {
    width: "40%",
    flexDirection: "column",
    gap: 8,
  },
  subTotalBlock: {
    flexDirection: "column",
    gap: 8,
  },
  subTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subTotalHead: {
    color: "#7E868C",
    fontSize: 10,
    fontWeight: "normal",
  },
  subTotalDesp: {
    color: "#11181C",
    fontSize: 10,
    fontWeight: "normal",
  },
  totalRow: { flexDirection: "row", justifyContent: "space-between" },
  totalHead: {
    color: "#11181C",
    fontSize: 14,
    fontWeight: "bold",
  },
  totalDesp: {
    color: "#11181C",
    fontSize: 14,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    borderTopWidth: 1,
    borderTopColor: "#F1F3F5",
    paddingTop: 6,
  },
  footerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9,
    fontWeight: "normal",
    color: "#7E868C",
  },
});
