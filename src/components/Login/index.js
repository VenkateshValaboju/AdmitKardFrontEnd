import {Component} from 'react'

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './index.css'

class Login extends Component {
  state = {
    country: 'IN',
    mobile: '',
    count: 0,
  }

  sendOTP = event => {
    event.preventDefault()
    this.getTheResponse()
  }

  getTheResponse = async () => {
    const {mobile, count} = this.state
    console.log(count)

    const mobileDetails = {
      country: 'IN',
      mobileNumber: mobile,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(mobileDetails),
    }

    const response = await fetch('http://localhost:3001/get-otp', options)

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

  UpdateTheMobileNumber = value => {
    this.setState(prevState => ({
      mobile: value,
      count: prevState.count + 1,
    }))
  }

  render() {
    const {mobile, country} = this.state
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
            <PhoneInput
              className="phone-input-container"
              placeholder="Enter phone number"
              defaultCountry={country}
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
