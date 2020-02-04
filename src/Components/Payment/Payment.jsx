import React, { Component } from "react";
import styles from "./Payment.module.scss";
import { CardElement, injectStripe } from "react-stripe-elements";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      Message: "",
      success: false,
      name: "",
      email: "",
      amount: 1000000
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeErrorMsg = this.removeErrorMsg.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNameInputs = this.handleNameInputs.bind(this);
    this.handleEmailInputs = this.handleEmailInputs.bind(this);
  }

  handleNameInputs = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailInputs = e => {
    this.setState({ email: e.target.value });
  };

  handleChange = ({ error }) => {
    this.setState({ Message: "" });
    if (error) {
      this.setState({ Message: error.message });
    }
  };

  async handleSubmit(e) {
    e.preventDefault();

    let { error, token } = await this.props.stripe.createToken({
      name: this.state.name,
      email: this.state.email
    });

    let amount = this.state.amount;

    if (error) {
      this.setState({ Message: "Please input card information" });
    } else {
      let response = await fetch("/api/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, amount })
      });

      this.setState({
        Message: "Payment Successful!",
        success: !this.state.success
      });
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ validated: !this.state.validated });
  };

  removeErrorMsg = () => {
    this.setState({ Message: "" });
  };

  handleClose = e => {
    e.preventDefault();

    console.log("Closed Modal");
  };

  //Card Element CSS
  createOptions = () => {
    return {
      style: {
        base: {
          fontSize: "20px",
          color: "#424770",
          fontFamily: "Open Sans, sans-serif",
          letterSpacing: "0.025em",
          backgroundColor: "none",
          lineHeight: "50px",
          "::placeholder": {
            color: "#aab7c4"
          },
          width: "100%",
          height: "100%",
          iconColor: "blue"
        },
        invalid: {
          color: "#c23d4b"
        },
        ":focus": {
          color: "#303238"
        }
      }
    };
  };

  render() {
    return (
      <div className={styles.paymentContainer}>
        <div className="card" id={styles.paymentModal}>
          <h2 className={styles.currentPlan}>
            Current Plan: <span>{this.props.currentPlan}</span>
          </h2>
          <h3>Please enter your card details for payment</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              autoComplete="new-password"
              onChange={this.handleNameInputs}
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="new-password"
              onChange={this.handleEmailInputs}
            />
            <div className={styles.par}>
              <CardElement
                onChange={this.handleChange}
                {...this.createOptions()}
              />
            </div>
            <div
              className={styles.error}
              style={
                this.state.Message === "Payment Successful!"
                  ? { color: "green" }
                  : { color: "red" }
              }
              role="alert"
            >
              {this.state.Message ? this.state.Message : ""}
            </div>

            <div className={styles.bt}>
              <p>
                By clicking "Pay", you agree to{" "}
                <a href="www.stripe.com">our terms </a>
                and the{" "}
                <a href="www.stripe.com">Stripe Connected Account Agreement</a>.
              </p>
              <div className={styles.buttonContainer}>
                <button>Pay</button>
                <button onClick={() => this.props.setShowPay(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default injectStripe(Payment);
