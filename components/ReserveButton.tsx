import React from 'react';
import '../app/global.scss';

export default function ReserveButton() {
  return (
    <>
      <a
        href="https://www.opentable.ca/restref/client/?lang=en-CA&ot_source=Restaurant%20website&restref=1258960&corrid=befd898d-281a-4b88-bd26-9746336d6059"
        target="_blank"
      >
        <button className="btn-reserve">Reserve</button>
      </a>
    </>
  );
}
