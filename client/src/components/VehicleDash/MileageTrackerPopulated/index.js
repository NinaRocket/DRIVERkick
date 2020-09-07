import React from 'react';
import "./style.css";
import Table from 'react-bootstrap/Table';


function MileageTrackerPopulated({ mileageTrackingModal }) {

    // ORIGINAL CARD'S CODE ——————————————————————————————————|
    // const [mileage, setUpdateMileage] = useState([]);

    // const updateMileageValue = (event) => {
    //     setUpdateMileage(event.target.value);
    // };

    // const submitUpdateMileage = (event) => {
    //     event.preventDefault();
    //     console.log(mileage);

    //     API.updateMileage(mileage)
    //         .then((response) => {
    //             console.log("update mileage response: ");
    //             console.log(response);
    //             if (!response.data.errmsg) {
    //                 console.log("successfully updated mileage");
    //                 //   this.state({
    //                 //     //redirect to login page
    //                 //     //home for now
    //                 //     redirectTo: "/home",
    //                 //   });
    //             } else {
    //                 console.log("Nina doesn't know how to code");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log("adding vehicle error: ");
    //             console.log(error);
    //         });
    // };
    // ORGINAL CARD'S CODE ——————————————————————————————————|


    return (

        <div className="mileage-card__body">
            <div className="mileage-card__current">
                <div>
                    <h4 className="g__card__subhead">Current Mileage</h4>
                    <h3 className="mileage-card__mileage-txt">76,000</h3>
                </div>
                <div>
                    <h4 className="g__card__subhead">Last Updated</h4>
                    <h3 className="mileage-card__date-txt">2/28/2020</h3>
                </div>
                <button className="g__vehicle-card__btn" onClick={mileageTrackingModal}>Update Milage</button>
            </div>
            <div className="mileage-card__history">
                <h4 className="g__card__subhead">History</h4>
                <Table hover>
                    <tbody>
                        <tr>
                            <td>2/14/2020</td>
                            <td>75,000</td>
                        </tr>
                        <tr>
                            <td>2/14/2020</td>
                            <td>75,000</td>
                        </tr>
                        <tr>
                            <td>2/14/2020</td>
                            <td>75,000</td>
                        </tr>
                        <tr>
                            <td>2/14/2020</td>
                            <td>75,000</td>
                        </tr>
                        <tr>
                            <td>2/14/2020</td>
                            <td>75,000</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>



    );
}

export default MileageTrackerPopulated;