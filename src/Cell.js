import * as React from 'react';

export default function Cell({
  content,
  header,
}) {

  const cellMarkup = header ? (
    <th className="Cell Cell-header" style={{border:"1px solid black"}}>
      {content}
    </th>
  ) : (
    <td className="Cell" style={{border:"1px solid black"}}>
      {content}
    </td>
  );

  return (cellMarkup);
}