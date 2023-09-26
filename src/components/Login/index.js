import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    mobile: '',

    valid: false,
  }

  sendOTP = event => {
    event.preventDefault()
    const {valid} = this.state
    if (valid) {
      this.getTheResponse()
    } else {
      alert('Invalid Phone Number')
    }
  }

  getTheResponse = async () => {
    const {mobile} = this.state

    const mobileDetails = {
      mobileNumber: mobile,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(mobileDetails),
    }

    const response = await fetch(
      'https://admitkart.onrender.com/get-otp',
      options,
    )

    if (response.ok) {
      const otp = await response.text()
      window.alert(`Your OTP: ${otp}`)
      const {history} = this.props
      history.replace({
        pathname: '/verify-otp',
        state: {mobile},
      })
    } else {
      alert('Invalid Phone Number')
    }
  }

  UpdateTheMobileNumber = event => {
    const mobilePattern = /^\d{10}$/

    this.setState({
      mobile: event.target.value,
      valid: mobilePattern.test(event.target.value),
    })
  }

  render() {
    const {mobile} = this.state
    return (
      <form onSubmit={this.sendOTP}>
        <div className="LoginPage">
          <img
            src="https://s3-alpha-sig.figma.com/img/7c57/0253/4c9a2bf05f0667bf6e8cbb07918363fd?Expires=1696809600&Signature=WB~4PQpyHYfEzY-YxSihM6HnJZfsvdRZmaNcwsH-SqmV0X1EOgkF1Zp2LPPhiP8CQEVyNO0A5JbjrKfjImi09JynqlK~0sKnt11eWaniO2k3i5iGXXJyR0QDhwz1e6Vpev6GRP2imRWHxc17u9YhYSYAN7NuzzEpcC75otOW03nBlNwcHm96uUa0YeJ0lWM6SjmC1ZM25AJnDAqRPX9uPBwwBhS5vMmMdDmRry~kdYTUE--YVMwkmsgvJAhLImghH36sNT8IUoB1-sqCv30~QKzcrYwVsoEDKvABYprK8iosdEUXHuCMvbdD00zKkvJ46uHELtAF47DDpkGWP1a8xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="AK_logo"
            className="AKLogoLogin"
          />
          <p className="WelcomeBack">Welcome Back</p>
          <p className="pleaseSignIn">Please sign in to your account</p>
          <div className="LoginInputContainer">
            <img
              src="https://s3-alpha-sig.figma.com/img/2964/5cb2/d4171b4851ba2a285826d9792a41066b?Expires=1696809600&Signature=lJMPvwBBE2NDNfZppXxBvzS7jyv8rvogJYlTLOqqXBNLjZEwGtJcBE8F3VerhqR7gl1Kuyp5S6OAdVmkcGErtkOmDnIS5~DAi-8nc7t0Y9YpjwPK122Tcmaj7rFdaJg6sBhoM1C1CyhN8kW2F0f0H49TUUtwycUtz0vLBkyYSaTIHd6FUFTDq4M14ej8jeWUUcVNak3pLksUXByXgwQDLIW7R4BPJAshtw8cdYNj1Q~Wk3DeCgCwucrMMlqSmsb047x30C4h-nQggbRG1Iw4WRvx25-mQDX3I6cMq46H6cOnN0Ts31aCj9CxI4W4tkNL0WadtYDvK-aWXLCfEBo0pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="india"
              className="indiaFlag"
            />
            <p className="countryCode">+91</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
            >
              <path
                d="M7 8L0.937823 0.5L13.0622 0.499999L7 8Z"
                fill="#999999"
              />
            </svg>
            <input
              className="inputText"
              type="text"
              value={mobile}
              onChange={this.UpdateTheMobileNumber}
            />
          </div>

          <p className="LoginPara">
            We will send you a one time SMS message. Charges may apply.
          </p>
          <button className="SignInButton" type="submit">
            Sign In with OTP
          </button>
        </div>
      </form>
    )
  }
}
export default Login
