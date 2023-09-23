import React from 'react';
import {Table} from "reactstrap";
import {Student} from "../../MockData/student.mock";

interface Props {
    data: Student[]
}

const DynamicTable: React.FC<Props> = ({data}) => {
    const tableHeading = Object.keys(data[0])
    return (
        <Table>
            <thead>
            <tr>
                {tableHeading.map((th) => (
                    <th className="text-capitalize">{th.split('_').join(' ')}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row: Student) => (
                <tr>
                    {tableHeading.map((th: string) => (
                        <td>{row[th as keyof Student]}</td>
                    ))}
                </tr>
            ))}

            </tbody>
        </Table>
    )
}
export default DynamicTable;