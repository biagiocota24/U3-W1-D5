import SettingsRow from "./SettingsRow";
import InfoLink from "./InfoLink";

const links = [
  "Parental controls",
  "Test participation",
  "Manage download services",
  "Activate a device",
  "Recent device streaming activity",
  "Sign out of all devices",
];

const SettingsSection = () => {
  return (
    <SettingsRow title="Settings">
      <div className="d-flex flex-column gap-2">
        {links.map((link) => (
          <InfoLink key={link}>{link}</InfoLink>
        ))}
      </div>
    </SettingsRow>
  );
};

export default SettingsSection;