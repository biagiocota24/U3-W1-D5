import SettingsRow from "./SettingsRow";
import InfoLink from "./InfoLink";

const MembershipSection = () => {
  return (
    <SettingsRow title="Membership & Billing">

      {/* Email, password, phone */}
      <div className="d-flex flex-column flex-md-row justify-content-between gap-3 border-bottom border-3 py-2">
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold text-dark">Student@strive.school</span>
          <span>Password: **********</span>
          <span>Phone: 321 044 1279</span>
        </div>
        <div className="d-flex flex-column gap-2 text-md-end">
          <InfoLink>Change account email</InfoLink>
          <InfoLink>Change password</InfoLink>
          <InfoLink>Change phone number</InfoLink>
        </div>
      </div>

      {/* Payment */}
      <div className="d-flex flex-column flex-md-row justify-content-between gap-3 border-bottom border-3 py-3">
        <span className="fw-bold text-dark">admin@strive.school</span>
        <div className="d-flex flex-column gap-2 text-md-end">
          <InfoLink>Update payment info</InfoLink>
          <InfoLink>Billing details</InfoLink>
        </div>
      </div>

      {/* Gift card */}
      <div className="d-flex justify-content-end py-3">
        <div className="d-flex flex-column gap-2 text-end">
          <InfoLink>Redeem gift card or promo code</InfoLink>
          <InfoLink>Where to buy gift cards</InfoLink>
        </div>
      </div>

    </SettingsRow>
  );
};

export default MembershipSection;