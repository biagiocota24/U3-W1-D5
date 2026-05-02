import SettingsRow from "./SettingsRow";
import InfoLink from "./InfoLink";

const PlanSection = () => {
  return (
    <SettingsRow title="Plan Details">
      <div className="d-flex justify-content-between">
        <span className="fw-bold text-dark">Premium</span>
        <InfoLink>Change plan</InfoLink>
      </div>
    </SettingsRow>
  );
};

export default PlanSection;