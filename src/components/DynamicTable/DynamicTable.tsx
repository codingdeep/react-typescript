import React from 'react';
import {Table} from "reactstrap";

interface Props<T extends object> {
    data: T[]
}

function DynamicTable<T extends object>({data}: Props<T>) {
    const tableHeading = Object.keys(data[0])
    return (
        <Table>
            <thead>
            <tr>
                {tableHeading.map((th) => (
                    <th>{th.split('_').join(' ')}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr>
                    {tableHeading.map((th: string) => (
                        <td>{row[th as keyof T]?.toString()}</td>
                    ))}
                </tr>
            ))}

            </tbody>
        </Table>
    )
}

export default DynamicTable;