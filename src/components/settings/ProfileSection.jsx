import SettingsRow from "./SettingsRow";
import InfoLink from "./InfoLink";

const profileLinks1 = ["Language", "Playback settings", "Subtitle appearance"];
const profileLinks2 = ["Viewing activity", "Ratings"];

const ProfileSection = () => {
  return (
    <SettingsRow title="My Profile">

      {/* Avatar + link gestione */}
      <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-3">
        <span className="fw-bold text-danger-emphasis d-flex align-items-center gap-2">
          <img
            src="./assets/avatar.png"
            alt="avatar"
            style={{ width: "35px", height: "35px", borderRadius: "4px" }}
          />
          Strive Student
        </span>
        <div className="d-flex flex-column gap-2 text-md-end">
          <InfoLink>Manage profiles</InfoLink>
          <InfoLink>Add profile email</InfoLink>
        </div>
      </div>

      {/* Link profilo in due colonne */}
      <div className="row">
        <div className="col-12 col-sm-6 d-flex flex-column gap-2">
          {profileLinks1.map((link) => (
            <InfoLink key={link}>{link}</InfoLink>
          ))}
        </div>
        <div className="col-12 col-sm-6 d-flex flex-column gap-2">
          {profileLinks2.map((link) => (
            <InfoLink key={link}>{link}</InfoLink>
          ))}
        </div>
      </div>

    </SettingsRow>
  );
};

export default ProfileSection;