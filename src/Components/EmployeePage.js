import EmployeeListItem from "./EmployeeListItem";
import Header from "./Header";

export default function EmployeePage(){
    return(
        <div className="employeePage">
            <Header className={'homeHeader'} heading={'Employee'}/>
            <div className="employeePageContainerTop">
                <div className="imageContainer2">
                    <img className="employeeImageField2" src={"https://cdn.icon-icons.com/icons2/2248/PNG/512/face_icon_137648.png"} alt="Image" />
                </div>
                <div>
                    <p className="employeeName2">Julie Taylor</p>
                    <p className="employeeTitle2">VP of Marketing</p>
                </div>
            </div>
            <div className="infoContainer">
                <p className="employeeName">Call Office</p>
                <p className="employeeTitle">781-000-0002</p>
            </div>
            <div className="infoContainer">
                <p className="employeeName">Call Mobile</p>
                <p className="employeeTitle">617-000-0002</p>
            </div>
            <div className="infoContainer">
                <p className="employeeName">SMS</p>
                <p className="employeeTitle">617-000-0002</p>
            </div>
            <div className="infoContainerBottom">
                <p className="employeeName">Email</p>
                <p className="employeeTitle">jtaylor@fakemail.com</p>
            </div>
        </div>
    );
}