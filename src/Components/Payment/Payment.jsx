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
  }

  validated() {
    return (
      <div>
        <h2>payment successful!!!</h2>
      </div>
    );
  }

  renderPayments() {
    if (this.state.validated) {
      return this.validated();
    } else {
      return (
        <div>
          <h2>this is the payment modal</h2>
        </div>
      );
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ validated: !this.state.validated });
  }

  render() {
    return (
      <div className={styles.paymentModal}>
        {this.renderPayments()}
        <CardElement />
        <button onClick={this.handleClick}>confirm price</button>
      </div>
    );
  }
}

export default injectStripe(Payment);
