/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'

const animationKeyframes = keyframes`
  from {
    transform: translate(0, -49px);
  }

  16.667% {
    transform: translate(42px, -24px);
  }

  33.333% {
    transform: translate(42px, 24px);
  }

  50% {
    transform: translate(0, 49px);
  }

  66.667% {
    transform: translate(-42px, 24px);
  }

  83.333% {
    transform: translate(-42px, -24px);
  }

  to {
    translate(0, -49px);
  }
`

export const Loader = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      height: '100%',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      width: '100%',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'center'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'svg'.
    <svg
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'xmlns'.
      xmlns="http://www.w3.org/2000/svg"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'xmlnsXlink'.
      xmlnsXlink="http://www.w3.org/1999/xlink"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
      width="174"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
      height="202"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        transform: 'scale(0.5)'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'defs'.
      <defs>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
        <path id="a" d="M1.25 0l85.51 50.5-.51 100.2L.76 100.68z" />
      </defs>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'g'.
      <g fill="none" fillRule="evenodd">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
        <path
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fill'.
          fill="#FFF"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'd'.
          d="M87 1l86.301 50.186L173 151l-85.75 50.088L1 150.5.699 51.75z"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'g'.
        <g stroke="#000" strokeLinecap="round" strokeWidth="3">
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
          <path d="M8.5 59.5l5-8M20.25 52.75l10.5-.5M45.25 53.75l5.25 5.75M40.25 45.75l7.25-2.25M47.733 24.483L50.5 25.5M35.125 36.625l10.25-.25M56.125 24.625L61.5 23.5M68.188 26.062L72.5 22.5M44.125 29.625L53.5 32.5M59.188 28.937L65.5 31.5M58.156 34.781L60.5 43.5M51.172 51.859L58.5 51.5M64.164 46.679L68.5 49.5M54.164 57.679L58.5 56.5M54.164 63.679L61.5 66.5M64.164 54.679L65.5 57.5M69.164 43.679L73.5 41.5M74.164 36.679l7.328-.359M82.164 26.679L86.5 26.5M79.164 42.679L81.5 46.5M72.164 53.679L75.5 45.5M77.164 55.679l7.328-.359M66.164 65.679L70.5 62.5M45.164 72.679l7.328-.359M55.164 77.679L58.5 72.5M44.164 78.679L49.5 80.5M23.164 91.679L33.5 91.5M4.164 101.679L12.5 99.5M38.164 86.679l7.328-.359M76.172 8.859l2.344 8.719M77.172 22.859L74.5 31.5M68.836 35.82L65.5 40.5M85.836 2.82l-1.672 5.641M65.156 17.781L71.5 17.5M52.188 38.937L52.5 44.5M6.25 72.75l10.5-.5M24.5 72.5l10.25-6.25M1.5 67.5l4.125-.875M7.375 94.875l10.25-6.25M35.375 82.875L40.5 72.5M40.313 66.062l9.125 1.625M27.313 80.437l5.125-7.375M17.375 80.875L25.5 85.5M6.375 85.875L11.5 78.5M29.25 56.75L40.5 59.5M16.125 64.125l8.25-4.25M14.875 105.14l5-8M26.625 98.39l10.5-.5M51.625 99.39l5.25 5.75M57.547 97.5l7.328-.36M60.539 103.32l4.336-1.18M51.539 118.32l4.961-.82M12.625 118.39l10.5-.5M4.25 122.75l3.25 8.75M30.875 118.14l10.25-6.25M7.875 113.14l4.125-.875M13.75 140.515l10.25-6.25M1.5 140.5l6.125-3.875M46.688 111.703l9.125 1.625M33.688 126.078l5.125-7.375M23.75 126.515l8.125 4.625M12.75 131.515l5.125-7.375M35.625 102.39l11.25 2.75M22.5 109.765l8.25-4.25M62.875 77.14l5-8M74.625 70.39l10.5-.5M60.625 90.39l10.5-.5M78.875 90.14L86.5 84.5M55.875 85.14L60 84.265M61.75 112.515l10.25-6.25M46.313 98.437l5.125-10.375M81.688 98.078L86.5 91.5M71.75 98.515l8.125 4.625M83.625 74.39L86.5 76.5M70.5 81.765l8.25-4.25M24.25 40.75L34.5 45.5" />
        </g>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'g'.
        <g transform="translate(86.75 1)">
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mask'.
          <mask id="b" fill="#fff">
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'use'.
            <use xlinkHref="#a" />
          </mask>
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'g'.
          <g stroke="#BABAB9" strokeLinecap="square" mask="url(#b)">
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
            <path d="M1.25 3l87.5.5M1.5 5.75l87.5.5M1.5 8.75l87.5.5M1.5 11.75l87.5.5M1.5 14.75l87.5.5M1.5 17.75l87.5.5M1.5 20.75l87.5.5M1.5 23.75l87.5.5M1.5 26.75l87.5.5M1.5 29.75l87.5.5M1.5 32.75l87.5.5M1.5 35.75l87.5.5M1.5 38.75l87.5.5M1.5 41.75l87.5.5M1.5 44.75l87.5.5M1.5 47.75l87.5.5M1.75 50.5l87.5.5M1 53.25l87.5.5M1 56.25l87.5.5M1 59.25l87.5.5M1 62.25l87.5.5M1 65.25l87.5.5M1 68.25l87.5.5M1 71.25l87.5.5M1 74.25l87.5.5M1 77.25l87.5.5M1 80.25l87.5.5M1 83.25l87.5.5M1 86.25l87.5.5M1 89.25l87.5.5M1 92.25l87.5.5M1 95.25l87.5.5M.5 97.75l87.5.5M1 100.25l87.5.5M1 103.25l87.5.5M1 106.25l87.5.5M1 109.25l87.5.5M1 112.25l87.5.5M1 115.25l87.5.5M1 118.25l87.5.5M1 121.25l87.5.5M1 124.25l87.5.5M1 127.25l87.5.5M1 130.25l87.5.5M1 133.25l87.5.5M1 136.25l87.5.5M1 139.25l87.5.5M1 142.25l87.5.5M1.5 144.75l87.5.5M1.5 147.75l87.5.5" />
          </g>
        </g>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
        <path
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'stroke'.
          stroke="#000"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'strokeWidth'.
          strokeWidth="2"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'd'.
          d="M87 1v100M173 50.254v101.449M1 50.327V151.7M86.503.872l86.994 50.247M87.502.871L.504 51.186M87.301 101L.699 151M87.51 201.088L.506 150.834M86.508 201.088l87.002-50.243M86.699 101l86.602 50"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'g'.
        <g
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            transform: 'translate(0, -49px)',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'animation'.
            animation: `${animationKeyframes} 3s ease infinite`
          }}
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
          <path
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fill'.
            fill="#FFF"
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'd'.
            d="M87.5 51.131L131 76.489V126.5l-43.5 25-43.25-25V76.489z"
          />
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
          <path
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'stroke'.
            stroke="#000"
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'strokeWidth'.
            strokeWidth="2"
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'd'.
            d="M44.25 75.486v51.747M87.5 100.631v51.72M131 75.633v51.531M43.775 76.245L88 101.5M131.516 76.241L87 101.5M131.49 126.319l-44.5 25.803M88.016 50.177L43.775 76.359M86.989 50.177l44.527 26.312M43.778 126.376L88 152.122"
          />
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'g'.
          <g fill="#000" transform="translate(87 80)">
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="1.5" cy="30.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="6" cy="25.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="10.5" cy="21" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="15" cy="16.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="19.5" cy="11.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="1.5" cy="39.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="6" cy="34.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="10.5" cy="30" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="15" cy="25.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="19.5" cy="20.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="24" cy="15.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="28.5" cy="11" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="33" cy="6.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="1.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="1.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="1.5" cy="48.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="6" cy="43.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="10.5" cy="39" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="15" cy="34.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="19.5" cy="29.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="24" cy="24.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="28.5" cy="20" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="33" cy="15.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="10.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="10.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="42" cy="5.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="1.5" cy="58.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="6" cy="53.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="10.5" cy="49" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="15" cy="44.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="19.5" cy="39.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="24" cy="34.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="28.5" cy="30" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="33" cy="25.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="20.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="20.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="42" cy="15.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="1.5" cy="67.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="6" cy="62.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="10.5" cy="58" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="15" cy="53.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="19.5" cy="48.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="24" cy="43.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="28.5" cy="39" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="33" cy="34.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="29.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="29.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="42" cy="24.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="15" cy="62.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="19.5" cy="57.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="24" cy="52.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="28.5" cy="48" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="33" cy="43.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="38.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="38.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="42" cy="33.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="33" cy="52.25" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="37.5" cy="47.5" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="42" cy="42.75" r="1.5" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'circle'.
            <circle cx="1.5" cy="21.5" r="1.5" />
          </g>
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'g'.
          <g stroke="#000" strokeLinecap="square">
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
            <path d="M53.5 97.5v2m-1-1h2m3.25 2v2m-1-1h2m-9.272 1.865v2m-1-1h2m7.272 3.571v2m-1-1h2m-8.272 4.84v2m-1-1h2M69.445 98.5v2m-1-1h2m-5.631 5.865v2m-1-1h2M50.478 88.374v2m-1-1h2m23.482 17.991v2m-1-1h2m-18.21 7.411v2m-1-1h2m10.695-4v2m-1-1h2m-6.631 10.784v2m-1-1h2m15.486-9.784v2m-1-1h2m-8.34 5.784v2m-1-1h2m-19.292-1v2m-1-1h2M80.3 138.748v2m-1-1h2M62.814 87.374v2m-1-1h2m21.97 18.562v2m-1-1h2m-20.97 28.812v2m-1-1h2" />
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
            <path
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'strokeWidth'.
              strokeWidth="2"
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'd'.
              d="M74.96 131.601v4m-2-2h4m-2-27.665v4m-2-2h4M62.303 88.374v4m-2-2h4m-7.553 16.991v4m-2-2h4"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
)
