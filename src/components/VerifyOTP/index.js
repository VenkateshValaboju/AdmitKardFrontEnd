import {Component} from 'react'
import Header from '../Header'
import './index.css'

class verifyOTP extends Component {
  state = {
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    enteredOTP: '',
    mobile: '',
  }

  componentDidMount() {
    this.getTheMobileNumber()
  }

  getTheMobileNumber() {
    const {location} = this.props
    const {mobile} = location.state
    this.setState({
      mobile,
    })
  }

  submitOTP = event => {
    event.preventDefault()
    const {digit1, digit2, digit3, digit4} = this.state
    const finalOTP = digit1 + digit2 + digit3 + digit4

    this.setState(
      {
        enteredOTP: finalOTP,
      },
      () => {
        this.verifyTheOTP()
      },
    )
  }

  verifyTheOTP = async () => {
    const {enteredOTP} = this.state

    const otpDetails = {
      enteredOTP,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(otpDetails),
    }

    const response = await fetch('http://localhost:3001/verify-otp', options)
    if (response.ok) {
      const {history, location} = this.props
      const {mobile} = location.state
      history.replace('/success')
      const data = await response.text()
      console.log(data)
    } else {
      alert('Incorrect OTP')
    }
  }

  UpdateDigit1 = event => {
    this.setState({
      digit1: event.target.value,
    })
  }

  UpdateDigit2 = event => {
    this.setState({
      digit2: event.target.value,
    })
  }

  UpdateDigit3 = event => {
    this.setState({
      digit3: event.target.value,
    })
  }

  UpdateDigit4 = event => {
    this.setState({
      digit4: event.target.value,
    })
  }

  changeTheNumber = () => {
    const {history} = this.props
    history.replace('/login')
  }

  getTheResponse = async () => {
    const mobileDetails = {
      country: 'IN',
      mobile: '123456789',
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(mobileDetails),
    }

    const response = await fetch('http://localhost:3001/get-otp', options)
    if (response.ok) {
      const otp = await response.text()
      window.alert(`Your OTP: ${otp}`)
    }
  }

  render() {
    const {mobile} = this.state

    return (
      <form onSubmit={this.submitOTP}>
        <Header />
        <div className="VerifyPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="134"
            height="140"
            viewBox="0 0 134 140"
            fill="none"
            className="verifyImage"
          >
            <path
              d="M66.759 126.507C96.721 126.507 121.01 102.218 121.01 72.256C121.01 42.294 96.721 18.005 66.759 18.005C36.797 18.005 12.508 42.294 12.508 72.256C12.508 102.218 36.797 126.507 66.759 126.507Z"
              stroke="#292E5F"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="12 12"
            />
            <path
              d="M66.759 138.015C103.077 138.015 132.518 108.574 132.518 72.256C132.518 35.9383 103.077 6.49701 66.759 6.49701C30.4413 6.49701 1 35.9383 1 72.256C1 108.574 30.4413 138.015 66.759 138.015Z"
              stroke="#292E5F"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="12 12"
            />
            <path
              d="M110.77 93.206C110.772 89.5112 109.394 85.9488 106.907 83.2161C104.421 80.4834 101.004 78.777 97.3251 78.4311C93.6465 78.0851 89.9712 79.1244 87.0185 81.3455C84.0659 83.5666 82.0484 86.8097 81.361 90.44L35.77 89.203L36.27 97.036C36.27 97.036 29.77 112.036 63.936 116.036V131.197H103.436V105.987C105.667 104.681 107.517 102.814 108.803 100.572C110.09 98.3303 110.768 95.7909 110.77 93.206Z"
              fill="url(#paint0_linear_1_45)"
            />
            <path
              d="M37.836 97.366C37.836 97.366 31.611 111.731 64.336 115.566V130.091H102.164V91.621L37.35 89.864L37.836 97.366Z"
              fill="#FCBC77"
            />
            <path
              d="M56.741 37.42C55.7546 38.9765 54.1924 40.0793 52.3955 40.4876C50.5986 40.8959 48.7131 40.5764 47.151 39.599L26.841 26.215C25.2845 25.2286 24.1817 23.6663 23.7734 21.8694C23.3651 20.0725 23.6846 18.1871 24.662 16.625C25.6483 15.0704 27.2093 13.969 29.0045 13.5608C30.7997 13.1526 32.6835 13.4708 34.245 14.446L54.555 27.83C56.1126 28.8152 57.2169 30.377 57.6265 32.174C58.0361 33.971 57.7178 35.857 56.741 37.42Z"
              fill="url(#paint1_linear_1_45)"
            />
            <path
              d="M55.617 36.69C54.7002 38.1367 53.248 39.1619 51.5778 39.5415C49.9076 39.9211 48.1551 39.6243 46.703 38.716L27.817 26.266C26.3702 25.3491 25.3451 23.897 24.9655 22.2268C24.5859 20.5567 24.8827 18.8041 25.791 17.352C26.7078 15.9052 28.1599 14.8801 29.8301 14.5005C31.5003 14.1209 33.2529 14.4177 34.705 15.326L53.591 27.769C55.0397 28.6859 56.0662 30.1393 56.4459 31.8112C56.8256 33.4831 56.5275 35.2373 55.617 36.69Z"
              fill="#FCBC77"
            />
            <path
              d="M94.979 107.902C102.825 107.902 109.185 101.542 109.185 93.696C109.185 85.8502 102.825 79.49 94.979 79.49C87.1332 79.49 80.773 85.8502 80.773 93.696C80.773 101.542 87.1332 107.902 94.979 107.902Z"
              fill="#FCBC77"
            />
            <path
              d="M86.66 0H43.765C39.3467 0 35.765 3.58172 35.765 8V98.303C35.765 102.721 39.3467 106.303 43.765 106.303H86.66C91.0783 106.303 94.66 102.721 94.66 98.303V8C94.66 3.58172 91.0783 0 86.66 0Z"
              fill="url(#paint2_linear_1_45)"
            />
            <path
              d="M85.861 1.43799H44.559C40.1407 1.43799 36.559 5.01971 36.559 9.43799V96.87C36.559 101.288 40.1407 104.87 44.559 104.87H85.861C90.2793 104.87 93.861 101.288 93.861 96.87V9.43799C93.861 5.01971 90.2793 1.43799 85.861 1.43799Z"
              fill="white"
            />
            <path
              d="M79.068 5.85599C78.9074 6.91128 78.3747 7.87434 77.5661 8.57123C76.7576 9.26811 75.7264 9.65287 74.659 9.65599H55.608C54.5407 9.65263 53.5098 9.26777 52.7015 8.57091C51.8931 7.87405 51.3606 6.91111 51.2 5.85599H41.1C40.5439 5.85599 40.0105 6.07655 39.6168 6.4693C39.2231 6.86204 39.0013 7.3949 39 7.95099V98.351C39 98.9071 39.2205 99.4405 39.6133 99.8342C40.006 100.228 40.5389 100.45 41.095 100.451H89.318C89.8741 100.451 90.4075 100.23 90.8012 99.8377C91.1948 99.4449 91.4167 98.9121 91.418 98.356V7.95599C91.418 7.3999 91.1974 6.86651 90.8047 6.47283C90.412 6.07915 89.8791 5.85731 89.323 5.85599H79.068Z"
              fill="#F9F9F9"
            />
            <path
              d="M71.277 5.26801H59.305C59.0846 5.26801 58.906 5.44664 58.906 5.66701C58.906 5.88737 59.0846 6.06601 59.305 6.06601H71.277C71.4974 6.06601 71.676 5.88737 71.676 5.66701C71.676 5.44664 71.4974 5.26801 71.277 5.26801Z"
              fill="#DBDBDB"
            />
            <path
              d="M74.389 6.06701C74.6535 6.06701 74.868 5.85255 74.868 5.58801C74.868 5.32346 74.6535 5.10901 74.389 5.10901C74.1245 5.10901 73.91 5.32346 73.91 5.58801C73.91 5.85255 74.1245 6.06701 74.389 6.06701Z"
              fill="#DBDBDB"
            />
            <path
              d="M104.161 96.202C100.038 97.156 97.209 94.467 96.255 90.346L86.782 55.17C86.3294 53.1828 86.6814 51.0972 87.7612 49.3687C88.8409 47.6401 90.5607 46.4089 92.545 45.944C94.5322 45.4914 96.6177 45.8434 98.3463 46.9231C100.075 48.0029 101.306 49.7226 101.771 51.707L109.501 87.791C110.456 91.913 108.282 95.249 104.161 96.202Z"
              fill="url(#paint3_linear_1_45)"
            />
            <path
              d="M92.956 47.7246L92.9551 47.7248C89.4767 48.5285 87.3085 51.9997 88.1122 55.4781L96.8232 93.1798C97.6269 96.6581 101.098 98.8264 104.576 98.0227L104.577 98.0225C108.056 97.2188 110.224 93.7475 109.42 90.2692L100.709 52.5675C99.9056 49.0891 96.4344 46.9209 92.956 47.7246Z"
              fill="#FCBC77"
            />
            <path
              d="M109.125 125.335H55.056V137.939H109.125V125.335Z"
              fill="url(#paint4_linear_1_45)"
            />
            <path
              d="M107.663 126.796H56.517V136.66H107.663V126.796Z"
              fill="#4267B2"
            />
            <path
              d="M48.858 75.155C47.8837 76.6931 46.3402 77.783 44.5648 78.1866C42.7894 78.5902 40.9265 78.2747 39.383 77.309L25.762 68.495C24.2239 67.5207 23.134 65.9772 22.7304 64.2018C22.3268 62.4265 22.6423 60.5635 23.608 59.02C24.5823 57.4819 26.1258 56.392 27.9011 55.9884C29.6765 55.5848 31.5395 55.9003 33.083 56.866L46.704 65.68C48.2421 66.6543 49.332 68.1978 49.7356 69.9731C50.1392 71.7485 49.8237 73.6115 48.858 75.155Z"
              fill="url(#paint5_linear_1_45)"
            />
            <path
              d="M45.438 93.811C44.455 95.3632 42.8976 96.4632 41.106 96.8706C39.3145 97.278 37.4345 96.9596 35.877 95.985L27.44 89.833C25.8878 88.85 24.7877 87.2926 24.3804 85.501C23.973 83.7095 24.2914 81.8295 25.266 80.272C26.249 78.7198 27.8064 77.6198 29.598 77.2124C31.3895 76.805 33.2695 77.1234 34.827 78.098L43.264 84.252C44.8157 85.235 45.9153 86.792 46.3226 88.5831C46.7299 90.3742 46.4119 92.2537 45.438 93.811Z"
              fill="url(#paint6_linear_1_45)"
            />
            <g opacity="0.5">
              <path
                opacity="0.5"
                d="M65.21 69.583C74.2835 69.583 81.639 62.2275 81.639 53.154C81.639 44.0805 74.2835 36.725 65.21 36.725C56.1365 36.725 48.781 44.0805 48.781 53.154C48.781 62.2275 56.1365 69.583 65.21 69.583Z"
                fill="url(#paint7_linear_1_45)"
              />
            </g>
            <path
              d="M65.234 68.555C73.774 68.555 80.697 61.632 80.697 53.092C80.697 44.552 73.774 37.629 65.234 37.629C56.694 37.629 49.771 44.552 49.771 53.092C49.771 61.632 56.694 68.555 65.234 68.555Z"
              fill="#3EC241"
            />
            <path
              d="M44.757 93.353C43.8401 94.7997 42.388 95.8248 40.7178 96.2044C39.0476 96.584 37.2951 96.2873 35.843 95.379L27.974 89.651C26.5273 88.7342 25.5021 87.282 25.1225 85.6118C24.7429 83.9416 25.0397 82.1891 25.948 80.737C26.8648 79.2903 28.317 78.2651 29.9872 77.8855C31.6574 77.5059 33.4099 77.8027 34.862 78.711L42.729 84.45C44.173 85.3664 45.1964 86.8163 45.5763 88.4839C45.9562 90.1514 45.6617 91.9016 44.757 93.353Z"
              fill="#FCBC77"
            />
            <path
              d="M48.109 74.671C47.1922 76.1178 45.74 77.1429 44.0698 77.5225C42.3997 77.9021 40.6471 77.6053 39.195 76.697L26.379 68.404C24.9323 67.4872 23.9071 66.0351 23.5275 64.3649C23.1479 62.6947 23.4447 60.9421 24.353 59.49C25.2698 58.0433 26.7219 57.0182 28.3921 56.6385C30.0623 56.2589 31.8149 56.5557 33.267 57.464L46.083 65.757C47.5297 66.6739 48.5549 68.126 48.9345 69.7962C49.3141 71.4664 49.0173 73.2189 48.109 74.671Z"
              fill="#FCBC77"
            />
            <path
              d="M52.38 56.589C51.4008 58.1338 49.8501 59.2285 48.0666 59.6337C46.2831 60.039 44.4116 59.722 42.861 58.752L25.599 47.513C24.0542 46.5338 22.9595 44.9831 22.5543 43.1996C22.149 41.416 22.466 39.5446 23.436 37.994C24.4151 36.4491 25.9659 35.3546 27.7494 34.9493C29.5329 34.544 31.4044 34.861 32.955 35.831L50.217 47.07C51.7618 48.0492 52.8565 49.5998 53.2617 51.3834C53.667 53.1669 53.35 55.0384 52.38 56.589Z"
              fill="url(#paint8_linear_1_45)"
            />
            <path
              d="M51.463 56.003C50.5462 57.4497 49.094 58.4748 47.4238 58.8545C45.7537 59.2341 44.0011 58.9373 42.549 58.029L26.381 47.502C24.9343 46.5852 23.9091 45.133 23.5295 43.4629C23.1499 41.7927 23.4467 40.0401 24.355 38.588C25.2718 37.1413 26.724 36.1161 28.3942 35.7365C30.0643 35.3569 31.8169 35.6537 33.269 36.562L49.435 47.089C50.8821 48.0055 51.9076 49.4575 52.2876 51.1277C52.6676 52.7979 52.3711 54.5506 51.463 56.003Z"
              fill="#FCBC77"
            />
            <path
              d="M73.095 47.367C73.0212 47.2911 72.9329 47.2307 72.8353 47.1894C72.7378 47.1482 72.6329 47.127 72.527 47.127C72.4211 47.127 72.3162 47.1482 72.2187 47.1894C72.1211 47.2307 72.0328 47.2911 71.959 47.367L62.332 57.198L58.632 53.419C58.5582 53.3431 58.4699 53.2827 58.3723 53.2414C58.2748 53.2002 58.1699 53.179 58.064 53.179C57.9581 53.179 57.8532 53.2002 57.7557 53.2414C57.6581 53.2827 57.5698 53.3431 57.496 53.419C57.3452 53.5744 57.2609 53.7825 57.2609 53.999C57.2609 54.2156 57.3452 54.4236 57.496 54.579L61.761 58.939C61.8348 59.015 61.9231 59.0754 62.0207 59.1166C62.1182 59.1578 62.2231 59.1791 62.329 59.1791C62.4349 59.1791 62.5398 59.1578 62.6373 59.1166C62.7349 59.0754 62.8232 59.015 62.897 58.939L73.095 48.529C73.2464 48.3735 73.3311 48.165 73.3311 47.948C73.3311 47.731 73.2464 47.5225 73.095 47.367Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_45"
                x1="73.27"
                y1="131.197"
                x2="73.27"
                y2="78.3658"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_45"
                x1="40.7005"
                y1="40.661"
                x2="40.7005"
                y2="13.3871"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_45"
                x1="108.854"
                y1="119.485"
                x2="108.854"
                y2="13.1816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1_45"
                x1="98.1567"
                y1="96.3946"
                x2="98.1567"
                y2="45.7513"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_1_45"
                x1="125.724"
                y1="151.135"
                x2="125.724"
                y2="138.531"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_1_45"
                x1="36.233"
                y1="78.3581"
                x2="36.233"
                y2="55.817"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_1_45"
                x1="35.3515"
                y1="97.0437"
                x2="35.3515"
                y2="77.0393"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_1_45"
                x1="65.21"
                y1="69.583"
                x2="65.21"
                y2="36.725"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_1_45"
                x1="37.908"
                y1="59.8058"
                x2="37.908"
                y2="34.7772"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.251" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.122" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.102" />
              </linearGradient>
            </defs>
          </svg>
          <p className="VerifyHeading">Please verify Mobile number</p>
          <p className="VerifyPara">
            An OTP is sent to <span className="MobileNo">{mobile}</span>
          </p>
          <button
            type="button"
            onClick={this.changeTheNumber}
            className="changeNumber"
          >
            Change Phone Number
          </button>
          <br />
          <div className="OTPContainer">
            <input
              type="text"
              className="box"
              onChange={this.UpdateDigit1}
              maxLength={1}
            />
            <input
              type="text"
              className="box"
              onChange={this.UpdateDigit2}
              maxLength={1}
            />
            <input
              type="text"
              className="box"
              onChange={this.UpdateDigit3}
              maxLength={1}
            />
            <input
              type="text"
              className="box"
              onChange={this.UpdateDigit4}
              maxLength={1}
            />
          </div>

          <p className="question">
            Didn’t receive the code?
            <button
              type="button"
              className="resendButton"
              onClick={this.getTheResponse}
            >
              Resend
            </button>
          </p>
          <button className="verifyButton" type="submit">
            Verify
          </button>
        </div>
      </form>
    )
  }
}

export default verifyOTP
