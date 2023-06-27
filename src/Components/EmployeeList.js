import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
    return (
      <ul className="employeeList">
        <EmployeeListItem name={'James King'} title={'President and CEO'} />
        <EmployeeListItem name={'Julie Taylor'} title={'VP of Marketing'} />
        <EmployeeListItem name={'Eugene Lee'} title={'CFO'} />
        <EmployeeListItem name={'John Williams'} title={'VP of Engineering'} />
        <EmployeeListItem name={'Ray Moore'} title={'VP of Sales'} />
        <EmployeeListItem name={'Paul Jones'} title={'QA Manager'} />
      </ul>
    );
  }