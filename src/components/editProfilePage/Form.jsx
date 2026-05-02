import { Button, Form, Badge } from "react-bootstrap";

const ProfilePage = function () {
  return (
        <Form className="d-flex flex-column m-auto py-5 px-3" style={{ maxWidth: "600px" }}>
      <h1 className="display-4 border-bottom mb-4 text-light">Edit Profile</h1>

      <div className="d-flex flex-column align-items-center flex-md-row align-items-md-start gap-4">
        
        {/* Avatar */}
        <div style={{ width: "100px", height: "100px", flexShrink: 0 }}>
          <img
            className="object-fit-cover w-100 h-100 rounded-2"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
            alt="img-avatar"
          />
        </div>

        {/* Contenuto */}
        <div className="d-flex flex-column align-items-start gap-2 text-light w-100">
          <Badge bg="secondary" className="w-100 rounded-0 py-2 text-start fs-6 fw-normal">
            Strive Student
          </Badge>

          {/* Language */}
          <div className="border-bottom py-4 w-100 d-flex flex-column gap-2">
            <Form.Label htmlFor="language">Language:</Form.Label>
            <Form.Select id="language" className="rounded-0 bg-black text-light">
              <option>Italian</option>
              <option>English</option>
              <option>German</option>
              <option>Spanish</option>
              <option>French</option>
            </Form.Select>
          </div>

          {/* Maturity */}
          <div className="border-bottom py-4 w-100 d-flex flex-column gap-2">
            <Form.Label>Maturity Settings:</Form.Label>
            <Badge bg="secondary" className="rounded-0 text-start fs-6 fw-normal">
              ALL MATURITY RATINGS
            </Badge>
            <p className="mb-1">Show titles of all maturity ratings for this profile</p>
            <Button variant="outline-secondary" disabled className="rounded-0 border-2 fw-bold">
              EDIT
            </Button>
          </div>

          {/* Autoplay */}
          <div className="py-4 w-100 d-flex flex-column gap-2">
            <Form.Label>Autoplay controls</Form.Label>
            <Form.Check
              type="checkbox"
              id="autoplay1"
              label="Autoplay next episode in a series on all devices"
            />
            <Form.Check
              type="checkbox"
              id="autoplay2"
              label="Autoplay previews while browsing on all devices"
            />
          </div>
        </div>
      </div>

      {/* Bottoni */}
      <div className="py-4 d-flex gap-2 border-top w-100">
        <Button type="submit" variant="light" className="rounded-0 border-2 fw-bold w-25">
          SAVE
        </Button>
        <Button type="button" variant="outline-secondary" className="rounded-0 border-2 fw-bold w-25">
          CANCEL
        </Button>
        <Button type="button" variant="outline-danger" className="rounded-0 border-2 fw-bold w-50">
          DELETE PROFILE
        </Button>
      </div>
    </Form>

  );
};

export default ProfilePage;
