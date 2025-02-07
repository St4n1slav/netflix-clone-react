import { Dropdown, ButtonGroup } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const MyTable = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center">
        <h2 className="my-1 mx-3 h2 ">TV Shows</h2>
        <Dropdown as={ButtonGroup} className="ms-4 mt-1">
          <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Anime</Dropdown.Item>
            <Dropdown.Item href="#">Horror</Dropdown.Item>
            <Dropdown.Item href="#">Romance</Dropdown.Item>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Grid className="icons me-2" />
        <Grid3x3 className="icons" />
      </div>
    </div>
  );
};

export default MyTable;
