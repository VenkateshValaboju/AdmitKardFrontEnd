import './index.css'

const SuccessPage = props => (
  <div className="successPage">
    <img
      src="https://s3-alpha-sig.figma.com/img/4383/46b2/e3abf6db68442f0616c3b62f5ef2e7da?Expires=1696809600&Signature=Ahv08Z-S1iNmFBC5envq8p2gAcS8f70uJq5b5QoSxTfbyy4lzqpGhIWQu0qk2m-K317IpmsIZK4lRwPiq0s3Cm0GlaQqcT6rLU9ACRUnB51pDuWSFqqt15NFGYEmv1GuCY0KihQcxpireoee5Ogc6zPE4AmQ967QyHFMdxS1Ipshr~6bAneaOP0xqKq3eUgcnplgmJwNALd6R20wKN4zN~tkkdWJU2NOTNhCC79pBwiGyfi~1ztN461IhMEeQ1~WN1WbcVdTMxiN54-jb~KWLcclVoSSmwfXt4jW5Q5IHQay0sSRRpf26Dx7hZAKrBiLySBZkXTRiJgnP-M0GpIEtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="successImage"
      className="successImage"
    />

    <h1 className="SuccessHeading">Welcome to AdmitKard</h1>
    <p className="SuccessDescription">
      In order to provide you with a custom experience, <br />
      <span>we need to ask you a few questions.</span>
    </p>
    <button className="SuccessButton" type="button">
      Submit{' '}
    </button>
    <p className="successMsg">*This will only take 5 min.</p>
  </div>
)

export default SuccessPage
