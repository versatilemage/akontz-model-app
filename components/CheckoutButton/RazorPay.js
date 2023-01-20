import React from "react";
import baseUrl from "@/utils/baseUrl";

const PaymentButton = ({ user, price, cartItems, onClearCart }) => {

    const total = Number((price * 100).toFixed(2));

    const makePayment = async () => {
        console.log("here...");
        const res = await initializeRazorpay();
    
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
    
        // Make API call to the serverless API
        const data = await fetch(`${baseUrl}/api/v1/courses/checkout`, { method: "POST" }).then((t) =>
          t.json()
        );
        console.log(data);
        var options = {
          key: "rzp_test_NRSClsMgMg8fwL", // Enter the Key ID generated from the Dashboard
          name: "Test",
          currency: "USD",
          amount: total,
          description: "Thankyou for your test donation",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: user.name,
            email: user.email,
            contact: user.phone,
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };

      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };
    
    return (
            <div>
                <div className="payment-box">
					<button className="default-btn" id="payment-button" onClick={makePayment}>
						<i className="flaticon-shopping-cart"></i> Make Payment{" "}
						<span></span>
					</button>
				</div>
            </div>
    )

};

export default PaymentButton;

