import React from "react";
import Container from "react-bootstrap/Container";
import AddVehicleModalForm from "../components/AddVehicleModalForm";
import UserNav from "../components/UserNav";
import UserWrapper from "../components/UserMainContentWrapper";
import UserVehicleCard from "../components/UserVehicleCard";

function UserPage(props) {
  // const [user, setUser] = useState({});

  // const { id } = useParams();
  // useEffect(() => {
  //   API.getUser(id)
  //     .then((res) => setUser(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Container>
      <UserNav />
      <UserWrapper>
        <UserVehicleCard />
      </UserWrapper>
    </Container>
  );
}

export default UserPage;
