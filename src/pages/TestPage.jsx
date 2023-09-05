import React from 'react';
import { az_lang } from '../language/language';

function TestPage() {
  console.log(az_lang);
  return (
    <div>
      {az_lang.nav.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
        {az_lang.blogTitles.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
}

export default TestPage;
