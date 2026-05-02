import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MembershipSection from "./MembershipSection";
import PlanSection from "./PlanSection";
import SettingsSection from "./SettingsSection";
import ProfileSection from "./ProfileSection";

const SettingsPage = () => {
  return (
    <Container className="text-secondary py-5">
      <h1 className="display-5 border-bottom border-3 py-3 text-center text-md-start">
        Account
      </h1>
      <MembershipSection />
      <PlanSection />
      <SettingsSection />
      <ProfileSection />
      <section className="text-center py-4">
        <Link to="/" className="link-warning">
          Back to the Homepage!!!
        </Link>
      </section>
    </Container>
  );
};

export default SettingsPage;
