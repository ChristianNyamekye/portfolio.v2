// import { css } from 'styled-components';

// const variables = css`
//   :root {
//     --dark-navy: #121212;
//     --navy: #1e1e1f;
//     --light-navy: #112240;
//     --lightest-navy: #233554;
//     --navy-shadow: rgba(2, 12, 27, 0.7);
//     --dark-slate: #495670;
//     --slate: #8892b0;
//     --light-slate: #a8b2d1;
//     --lightest-slate: #ccd6f6;
//     --white: #e6f1ff;
//     --green: #121212;
//     --green-tint: #ffd86e;
//     --pink: #f57dff;
//     --blue: #57cbff;

//     --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
//       sans-serif;
//     --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

//     --fz-xxs: 12px;
//     --fz-xs: 13px;
//     --fz-sm: 14px;
//     --fz-md: 16px;
//     --fz-lg: 18px;
//     --fz-xl: 20px;
//     --fz-xxl: 22px;
//     --fz-heading: 32px;

//     --border-radius: 4px;
//     --nav-height: 100px;
//     --nav-scroll-height: 70px;

//     --tab-height: 42px;
//     --tab-width: 120px;

//     --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
//     --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

//     --hamburger-width: 30px;

//     --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
//     --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
//     --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
//     --ham-after-active: bottom 0.1s ease-out,
//       transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
//   }
// `;

// export default variables;

import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #101010; // Replacing navy blue with dark gray
    --navy: #101010; // Replacing navy blue with dark gray
    --light-navy: #1e1e1f; // Adding medium gray
    --lightest-navy: #e6f1ff; // Adding medium gray
    --navy-shadow: #1e1e1f; // Updated shadow color
    --dark-slate: #272727; // Updated dark slate
    --slate: #747474; // Updated slate
    --light-slate: #a8b2d1; // Keeping light slate
    --lightest-slate: #ccd6f6; // Keeping lightest slate
    --white: #e6f1ff; // Keeping white
    --green: #ffd86e; // Replacing cyan with orange
    --green-tint: rgba(255, 101, 47, 0.1); // Updated tint color
    --pink: #f57dff; // Keeping pink
    --blue: #57cbff; // Keeping blue

    --font-sans: 'Times New Roman', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system,
      system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
