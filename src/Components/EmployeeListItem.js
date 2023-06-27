export default function EmployeeListItem({name, title}){
    return(
        <li>
            <div className="employeeListCard">
                <div className="imageContainer">
                    <img className="employeeImageField" src={"https://cdn.icon-icons.com/icons2/2248/PNG/512/face_icon_137648.png"} alt="Image" />
                </div>
                <div className="nameContainer">
                    <p className="employeeName">{name}</p>
                    <p className="employeeTitle">{title}</p>
                </div>
            </div>
        </li>
    );
}