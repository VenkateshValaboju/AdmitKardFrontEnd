AdmitKard - Exercise - b [OTP Verification]-Front_END

This React application showcases a common user authentication flow, where users enter their mobile number, verify it with an OTP, and are then redirected to a success page. Here's a brief overview of the application structure:

- **Login:** Users input their mobile number and request an OTP.

- **VerifyOTP:** Users enter the OTP received on their mobile to verify their identity.

- **SuccessPage:** After successful verification, users are welcomed to the application.

## Components

### Login

The Login component handles the user's input of their mobile number. It validates the number and, if valid, requests an OTP from the server.

### VerifyOTP

The VerifyOTP component allows users to enter the OTP sent to their mobile. It verifies the OTP with the server and redirects to the SuccessPage upon success.

### SuccessPage

The SuccessPage component displays a welcome message and potentially other instructions or actions to the user. Users are redirected to this page after successfully verifying their mobile number.

## Routing

Routing in this application is managed using React Router. Here's how the routes are configured:

- The default route ("/") redirects to the login page.
- "/login" displays the Login component.
- "/verify-otp" displays the VerifyOTP component.
- "/success" displays the SuccessPage component.

The `Switch` component ensures that only one route is rendered at a time.

this page consists for three screens 1)Login 2)OTP Verification 3)Success Page

### Screen 1 - Login Page

## Screenshots

<img src="https://i.ibb.co/CHtyj8X/login1.png" width="200" height="150" />

## Features

- User-friendly interface for mobile number input.
- Mobile number validation with a 10-digit number requirement.
- Requesting an OTP from the backend via an API POST request.
- Displaying the OTP to the user in an alert message.
- Seamless navigation to the next page after OTP confirmation.

### Screen 2 - Verify OTP

This page is responsible for verifying the OTP sent to the user's mobile number.

## Screenshots

![Verify OTP Page](/screenshots/verify-otp-page.png)

## Features

- **Change Phone Number:** Clicking on "Change Phone Number" redirects the user back to the login page to change their phone number.

- **Resend OTP:** Clicking "Resend" triggers a new OTP request from the backend. The newly generated OTP is displayed in an alert message.

- **Verify OTP:** Clicking "Verify" sends an API request to validate the OTP entered by the user. If the OTP matches the original OTP, the user is redirected to the success page. Otherwise, an alert message is displayed.

- **Mobile Number Validation:** The user cannot access the Verify OTP page without entering a valid mobile number. If the user attempts to do so, they will be redirected to the login page.

### Screen 3 - Success Page

The Success Page component serves as a user interface to welcome users to your application and potentially provide additional instructions or actions. In this implementation, the page includes a welcome message, a brief description, and a submit button. The user is redirected to this page after successfully verifying their mobile number with an OTP.

## Screenshots

![Success Page](/screenshots/success-page.png)

## Features

- **Automatic Redirection:** The Success Page component includes automatic redirection logic. If the user tries to access this page without completing the OTP verification process (no OTP in the state), they will be automatically redirected to the login page.

- **Welcome Message:** Users are greeted with a welcome message, creating a positive user experience.

- **Description:** A brief description informs users about the purpose of the page, potentially setting expectations or providing context.

- **Submit Button:** The "Submit" button may trigger further actions or navigate users to different parts of your application.

- **Estimated Time:** A message informs users that the process will take only 5 minutes, helping manage user expectations.
