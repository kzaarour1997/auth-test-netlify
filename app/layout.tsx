// import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./head";
import Script from "next/script";
import { GlobalProvider } from "./GlobalProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive" // Load the script before the page interactive phase
        />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://kit.fontawesome.com/9edb65c86a.js"></Script>
        <style>
          {`html,
body {
  width: 100%;
  /* height: 100%; */
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Scroll Bar */

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(66, 66, 66, 0.2);
  border: 0px;
  background-clip: padding-box;
  border-radius: 5px;
}

/* Loader Main */

.center-loader {
  margin-left: auto;
  margin-right: auto;
  padding: 150px 0;
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #e61e4d;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

/* User Setting Loader */

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

.load {
  width: 80px;
  height: 80px;
  margin: 110px auto 0;
  border: solid 6px #e61e4d;
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  -webkit-transition: all 0.5s ease-in;
  -webkit-animation-name: rotate;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  transition: all 0.5s ease-in;
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

/* Button Loader */
.lds-dual-ring {
  display: inline-block;
  width: 16px;
  height: 16px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Login & Register */

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  font-weight: 700;
}

.user-dashboard .wrapper {
  margin-top: 3rem;
}

.wrapper form {
  padding: 2.5rem 3rem;
}

.wrapper form a {
  font-size: 0.9rem;
  color: grey;
}

.form-btn {
  background-color: #e61e4d;
  border-color: #e61e4d;
  color: white;
  margin-top: 2.5rem;
  font-weight: bold;
  --bs-btn-active-bg: #b02a37;
  --bs-btn-active-color: #fff;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #dc3545;
  --bs-btn-disabled-border-color: #dc3545;
}

.form-btn:hover {
  background-color: #bb2d3b;
  border-color: #bb2d3b;
  color: white;
}

.react-datepicker {
  width: 100%;
}

.react-datepicker__month-container {
  float: left;
  width: 100%;
}

/* Avatar */
.avatar {
  display: inline-block;
  margin-bottom: 0;
  height: 3rem;
  width: 3rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rounded-circle {
  border-radius: 50% !important;
}

/* Header User Profile */

/* Navbar */
nav {
  background-color: white;
  padding: 1rem 1rem;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
}

.login-header-btn {
  background-color: #e61e4d;
}

.login-header-btn a {
  color: white;
}

/* Home page */

.stays-heading {
  font-weight: 700;
}

.back-to-search {
  font-size: 1.1rem;
  color: #e61e4d;
  font-weight: 600;
}

.back-to-search:hover {
  color: #e61e4d;
}

.card {
  height: 100%;
  border: 0px;
}

.card-title a {
  color: #2e2e2e;
  text-decoration: none;
  font-size: 1.2rem;
}

.card-title a:hover {
  color: #e61e4d;
  text-decoration: none;
}

.card-body {
  padding-left: 0;
  padding-right: 0;
}

.card-text {
  font-size: 1.2rem;
  color: black;
}

.card-body .view-btn {
  background-color: #e61e4d;
  color: white;
  text-decoration: none;
}

.card-body .view-btn:hover {
  background-color: #e61e4d;
  color: white;
}

.card-img-top {
  border-radius: 0.8rem;
}

.ratings {
  font-size: 1.2rem;
  color: #e61e4d;
}

.no-of-reviews {
  font-size: 0.85rem;
  color: grey;
  margin-left: 0.5rem;
  padding-top: 0.3rem;
}

/* Room Details Page */

.booking-card .booking-btn:hover {
  color: white;
  background-color: #e61e4d;
}

.price-per-night {
  font-size: 1.3rem;
}

.booking-card {
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  padding: 5px 10px;
}

.room-feature {
  font-size: 1.1rem;
  color: #404040;
}

.room-feature p {
  margin-left: 0.4rem;
  display: inline-block;
}

/* Reviews */
.review_user {
  font-size: 0.8rem;
  color: grey;
}

/* Footer */
footer {
  margin-top: auto;
  color: grey;
  bottom: 0;
  width: 100%;
}

.dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

/* Pagination */
.page-item.active .page-link {
  background-color: #e61e4d;
  border-color: #e61e4d;
  color: #fff;
}

.page-item.active .page-link:hover {
  color: #fff;
  cursor: pointer;
}

.pagination .page-link {
  color: #e61e4d;
}

.pagination .page-link:hover {
  color: #e61e4d;
}

/* Booking Details */
.booking-details p {
  margin-left: 1.5rem;
}

.redColor {
  color: red;
}

.greenColor {
  color: green;
}

/* Sidebar */

.list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.list-group-item {
  border: none;
}

.list-group-item.active {
  background-color: #f3f4f6;
  border-color: #f3f4f6;
  border-radius: 0.3rem;
  color: #e61e4d;
}
`}
        </style>
      </body>
    </html>
  );
}
