import React from "react";

const Message = () => {
  return (
    <div className="message-container">
      <div className="photo">
        <img
          src="https://s3-alpha-sig.figma.com/img/5180/c727/4a468ba221dccc98237c5b89acc690bd?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8H2cFpnHwMK8RGLRdi9uf5I26HQa~jciHU6~aqPdov2zEPv1tiss104b0bMyF4Ea12SgPZFHRBzt~v71VQfOdGUSL99KYvtzeyohSi7RCjs93fwyN9kgkDVcUMdadye9hrcNe7uoH4tFxYZi3hyQS7rCccTpYrgXJGRNCv8sIELrDIiwVDQmA2KuZKTHSHMEjGVXpSQ1SiWupadUveusJWl3rrYQiiuRykC4ZchUnzcuU6wFBGwFZtlqwkhOFDcTIAlf4B8xa0vol3w6a3cf2Zhpzgj-w6BqCVsZ9Tx0OH9RgDB~Q~ce5nmNkAIAVihbzQTew1ebHOHfD62DubcDA__"
          alt=""
          className="photo-img"
        />
      </div>
      <div className="message-text">
        <p className="main-text">Hello Ahmed, hope you’re doing well!</p>
        <p className="message-date">5:35 am 8/10/2003</p>
      </div>
    </div>
  );
};

export default Message;
