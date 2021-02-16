/* eslint-disable */
/** @jsx jsx */
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui` if it exists or ... Remove this comment to see the full error message
import { jsx, Styled } from 'theme-ui'
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(2578) FIXME: Unused '@ts-expect-error' directive.
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/theme-ui__components` if i... Remove this comment to see the full error message
import { Button, Box, Flex, Input } from '@theme-ui/components'
const Link = Styled.a

export const HeaderA = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      to="/"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        variant: 'styles.navLink',
        // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'p'. Did you mean 'P'?
        p: 2
      }}
    // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
      Hello
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div sx={{ mx: 'auto' }} />
    <Link
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      to="/blog"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        variant: 'styles.navLink',
        // @ts-expect-error ts-migrate(2552) FIXME: Cannot find name 'p'. Did you mean 'P'?
        p: 2
      }}
    // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
      Blog
    </Link>
    <Link
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      to="/about"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        variant: 'styles.navLink',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        p: 2
      }}
    // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
      About
    </Link>
  </header>
)

export const HeaderAA = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'space-between'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      to="/"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        variant: 'styles.navLink',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        p: 2
      }}
    // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
      Hello
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
    <nav>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mx'.
      <Button mx={2} variant="secondary">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Login'.
        Login
      </Button>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Sign'.
      <Button>Sign Up</Button>
    </nav>
  </header>
)

export const HeaderAAA = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'space-between'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      to="/"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        variant: 'styles.navLink',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        p: 2,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
        width: '20%'
      }}
    // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
      Hello
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
    <nav>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/resources"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Resources'.
        Resources
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/contact"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
    </nav>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
    <nav sx={{ width: '20%', textAlign: 'right' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mx'.
      <Button mx={2} variant="secondary">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Login'.
        Login
      </Button>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Sign'.
      <Button>Sign Up</Button>
    </nav>
  </header>
)

export const HeaderAAAA = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'space-between'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
    <nav>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'pr'.
          pr: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
          fontSize: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
          color: 'primary'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
        Hello
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
    </nav>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
    <nav>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mx'.
      <Button mx={2} variant="secondary">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Login'.
        Login
      </Button>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Sign'.
      <Button>Sign Up</Button>
    </nav>
  </header>
)

export const HeaderB = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        maxWidth: 768,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mx'.
        mx: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 3,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'display'.
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'baseline'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
          fontSize: 5,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
        Hello
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ mx: 'auto' }} />
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
    </div>
  </header>
)

export const HeaderBA = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mx: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 3,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'display'.
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'baseline'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
          fontSize: 5,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
        Hello
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ mx: 'auto' }} />
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomStyle'.
          borderBottomStyle: 'solid',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomWidth'.
          borderBottomWidth: 4,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomStyle'.
          borderBottomStyle: 'solid',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomWidth'.
          borderBottomWidth: 4,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
    </div>
  </header>
)

export const HeaderBB = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mx: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 3,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'display'.
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'baseline'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
          fontSize: 5,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
        Hello
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ mx: 'auto' }} />
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
    </div>
  </header>
)

export const HeaderBC = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mx: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 3,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'display'.
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'baseline'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
        Hello
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ mx: 'auto' }} />
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 2,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
    </div>
  </header>
)

export const HeaderC = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'grid',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      gridGap: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 768,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      gridAutoFlow: 'row',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridColumnStart'.
        gridColumnStart: [1, 2],
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridColumnEnd'.
        gridColumnEnd: [3, 3],
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'order'.
        order: [0, 1]
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" title="Home">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt="UI Logo"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
        <span
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
            width: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
            height: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
            overflow: 'hidden',
            top: -9999
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
          Home
        </span>
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'flex-start'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/work"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Work'.
        Work
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'flex-end',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'order'.
        order: 2
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/contact"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderC2 = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'grid',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      gridGap: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 768,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      gridAutoFlow: 'row',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridColumnStart'.
        gridColumnStart: [1, 2],
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridColumnEnd'.
        gridColumnEnd: [3, 3],
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'order'.
        order: [0, 1]
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" title="Home">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt="UI Logo"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
        <span
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
            width: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
            height: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
            overflow: 'hidden',
            top: -9999
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
          Home
        </span>
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'flex-end'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/work"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Work'.
        Work
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'flex-start',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'order'.
        order: 2
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/contact"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderC3 = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      flexWrap: 'wrap',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 768,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'center'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'order'.
        order: [0, 1],
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
        width: ['100%', 'auto'],
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 2
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" title="Home" sx={{ lineHeight: 1 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt="UI Logo"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
        <span
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
            width: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
            height: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
            overflow: 'hidden',
            top: -9999
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
          Home
        </span>
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/work"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Work'.
        Work
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'order'.
        order: 2
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/contact"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderD = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'grid',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      gridGap: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      gridTemplateColumns: 'repeat(3, 1fr)',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'button'.
    <button
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'title'.
      title="Toggle Menu"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        appearance: 'none',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
        width: 32,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
        height: 32,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'm'.
        m: 0,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        p: 1,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
        color: 'inherit',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'bg'.
        bg: 'transparent',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'border'.
        border: 0,
        ':focus': {
          outline: '2px solid'
        },
        ':hover': {
          color: 'primary'
        }
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'svg'.
      <svg
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'xmlns'.
        xmlns="http://www.w3.org/2000/svg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
        width="24"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
        height="24"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fill'.
        fill="currentcolor"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'viewBox'.
        viewBox="0 0 24 24"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          display: 'block',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'margin'.
          margin: 0
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'path'.
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </button>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
          px: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 1,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'textTransform'.
          textTransform: 'uppercase',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'letterSpacing'.
          letterSpacing: '0.1em',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'border'.
          border: '4px solid',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
          color: 'primary'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
        Home
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'flex-end'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
          ml: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 3
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
    </div>
  </header>
)

export const HeaderF = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
        mb: 3
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" title="Home">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt="UI Logo"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
        <span
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
            width: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
            height: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
            overflow: 'hidden',
            top: -9999
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
          Home
        </span>
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/work"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Work'.
        Work
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/contact"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderFA = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      textAlign: 'center'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
        mb: 3
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" title="Home">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt="UI Logo"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src="https://contrast.now.sh/black/white?height=160&width=480&fontSize=1.4&baseline=2&fontWeight=900&text=Awesomeness"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
        <span
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
            width: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
            height: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
            overflow: 'hidden',
            top: -9999
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
          Home
        </span>
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'inline-block',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
        width: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mx'.
        mx: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
        mb: 4,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderTopStyle'.
        borderTopStyle: 'solid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderTopWidth'.
        borderTopWidth: 'thin',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderTopColor'.
        borderTopColor: 'gray',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomStyle'.
        borderBottomStyle: 'solid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomWidth'.
        borderBottomWidth: 'thin',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomColor'.
        borderBottomColor: 'gray',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 4,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
        py: 3
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/work"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Work'.
        Work
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/blog"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/about"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      <Link
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
        to="/contact"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          variant: 'styles.navLink',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
          p: 2
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
    </div>
  </header>
)

export const HeaderFB = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      textAlign: 'center'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
        mb: 3
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" title="Home">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt="UI Logo"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src="https://contrast.now.sh/black/white?height=160&width=480&fontSize=1.4&baseline=2&fontWeight=900&text=Awesomeness"
        />
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
        <span
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
            width: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'height'.
            height: 1,
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'overflow'.
            overflow: 'hidden',
            top: -9999
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
          Home
        </span>
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'space-between',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
        width: '100%',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mx'.
        mx: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
        mb: 4,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderTopStyle'.
        borderTopStyle: 'solid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderTopWidth'.
        borderTopWidth: 'thin',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderTopColor'.
        borderTopColor: 'gray',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomStyle'.
        borderBottomStyle: 'solid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomWidth'.
        borderBottomWidth: 'thin',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderBottomColor'.
        borderBottomColor: 'gray',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        p: 3
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
      <nav>
        // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Link
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
          to="/work"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            variant: 'styles.navLink',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
            p: 2
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Work'.
          Work
        </Link>
        <Link
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
          to="/blog"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            variant: 'styles.navLink',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
            p: 2
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
          Blog
        </Link>
        <Link
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
          to="/about"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            variant: 'styles.navLink',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
            p: 2
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
          About
        </Link>
        <Link
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
          to="/contact"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            variant: 'styles.navLink',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
            p: 2
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
          Contact
        </Link>
      </nav>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
      <nav>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'variant'.
        <Button variant="secondary" mr={2}>
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Sign'.
          Sign In
        </Button>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Sign'.
        <Button>Sign Up</Button>
      </nav>
    </div>
  </header>
)

export const HeaderE = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'space-between',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link to="/" title="Home">
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
        alt="UI Logo"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
      />
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
    <nav>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
    </nav>
  </header>
)

export const HeaderE2 = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'space-between',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 800,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link to="/" title="Home">
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
        alt="UI Logo"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
      />
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
    <nav>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
    </nav>
  </header>
)

export const HeaderG = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 800,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link to="/" title="Home">
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
        alt="UI Logo"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
      />
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'nav'.
    <nav
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        mt: 4
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/about" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/contact" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
    </nav>
  </header>
)

export const HeaderH = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'space-between',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 5,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link to="/blog" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blocks'.
      Blocks
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/blog" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
      Blog
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/about" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
      About
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/contact" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
      Contact
    </Link>
  </header>
)

export const HeaderI = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'header'.
  <header
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      color: 'background',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      backgroundColor: 'text',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'space-between',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.header'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link to="/blog" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blocks'.
      Blocks
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/blog" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
      Blog
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/about" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
      About
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/contact" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
      Contact
    </Link>
  </header>
)

export const FooterA = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
  <footer
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      flexWrap: 'wrap',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      p: 2,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.footer'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
      Home
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
      Blog
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
      About
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div sx={{ mx: 'auto' }} />
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div sx={{ p: 2 }}>© 2019 Jane Doe</div>
  </footer>
)

export const FooterB = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
  <footer
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      fontSize: 1,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      color: 'background',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      bg: 'text',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.footer'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'flexWrap'.
        flexWrap: 'wrap',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alignItems'.
        alignItems: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'maxWidth'.
        maxWidth: 768,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mx'.
        mx: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 2,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
        py: 4
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
        Home
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ mx: 'auto' }} />
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ p: 2 }}>© 2019 Jane Doe</div>
    </div>
  </footer>
)

export const FooterC = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
  <footer
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      display: 'flex',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      flexWrap: 'wrap',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      justifyContent: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      p: 2,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.footer'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
      Home
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
      Blog
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
    <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
      About
    </Link>
  </footer>
)

export const FooterD = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
  <footer
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      fontSize: 1,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.footer'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'grid',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridTemplateRows'.
        gridTemplateRows: 'repeat(4, 32px)',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridTemplateColumns'.
        gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gridAutoFlow'.
        gridAutoFlow: 'column',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 2,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
        py: 4
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Home'.
        Home
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/work" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Work'.
        Work
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/blog" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blog'.
        Blog
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/about" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'About'.
        About
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/products" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Products'.
        Products
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/community" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Community'.
        Community
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/support" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Support'.
        Support
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/contact" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/support" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Support'.
        Support
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/products" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Products'.
        Products
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/contact" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/community" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Community'.
        Community
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/products" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Products'.
        Products
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/community" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Community'.
        Community
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/support" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Support'.
        Support
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/contact" sx={{ variant: 'styles.navLink', p: 2 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Contact'.
        Contact
      </Link>
    </div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        display: 'flex',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'justifyContent'.
        justifyContent: 'flex-start',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
        color: 'gray',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
        p: 3
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/privacy-policy" sx={{ color: 'inherit' }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Privacy'.
        Privacy Policy
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ mx: 1 }} />
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/terms-of-use" sx={{ color: 'inherit' }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Terms'.
        Terms of Use
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ mx: 1 }} />© 2019 Jane Doe
    </div>
  </footer>
)

export const FooterE = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
  <footer
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      variant: 'styles.footer',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 768,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: [4, 6]
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Link
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      to="mailto:hello@example.org"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        fontWeight: 'bold',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
        fontSize: 5,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
        color: 'inherit'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'hello'.
      hello@example.org
    </Link>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'p'.
    <p sx={{ mt: -1, mb: 4, fontSize: 1 }}>© 2019 Jane Doe</p>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    <div sx={{ display: 'flex' }}>
      // @ts-expect-error ts-migrate(2749) FIXME: 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Link to="/privacy-policy" sx={{ color: 'inherit' }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Privacy'.
        Privacy Policy
      </Link>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
      <div sx={{ ml: 3 }} />
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'to'.
      <Link to="/terms-of-use" sx={{ color: 'inherit' }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Terms'.
        Terms of Use
      </Link>
    </div>
  </footer>
)

export const ImageTitleA = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'h1'.
    <h1
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        textAlign: 'center',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundImage: 'url(http://dc28c2r6oodom.cloudfront.net/p/h/006.jpg)',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundPositionX: 'center',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundPositionY: 'center',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundSize: 'cover',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        WebkitBackgroundClip: 'text',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        WebkitTextFillColor: 'transparent',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        fontSize: 8,
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        fontWeight: 800
      }}
    // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
      Hello, world!
    </h1>
  </div>
)

export const ImageTitleB = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'h1'.
    <h1
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        textAlign: 'center',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundImage: 'url(http://dc28c2r6oodom.cloudfront.net/p/h/058.jpg)',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundPositionX: 'center',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundPositionY: 'center',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundSize: 'cover',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        WebkitBackgroundClip: 'text',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        WebkitTextFillColor: 'transparent',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        fontSize: 8,
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        fontWeight: 800
      }}
    // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
      Hello, world!
    </h1>
  </div>
)

export const ImageTitleC = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      textAlign: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      backgroundColor: 'black',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      color: 'white',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'h1'.
    <h1
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        backgroundImage: 'url(http://dc28c2r6oodom.cloudfront.net/p/h/048.jpg)',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundPositionX'.
        backgroundPositionX: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundPositionY'.
        backgroundPositionY: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundSize'.
        backgroundSize: 'contain',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'WebkitBackgroundClip'.
        WebkitBackgroundClip: 'text',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'WebkitTextFillColor'.
        WebkitTextFillColor: 'transparent',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
        fontSize: 8,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontWeight'.
        fontWeight: 800,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
        backgroundColor: 'text',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
        color: 'background'
      }}
    // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Hello'.
      Hello, world!
    </h1>
  </div>
)

export const TagLineA = () => (
  // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
  <Box sx={{ py: [3, 4, 5], backgroundColor: 'primary', color: 'background' }}>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
      <Styled.h1 as="h3" sx={{ m: 0 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'What'.
        What is a block?
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ m: 0, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'A'.
        A Block refers to a piece of content or a component. It&lsquo;s a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'section'.
        section of your content while a document is a collection of blocks.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ mb: 0, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color. Blocks can be complex like an embedded
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'spreadsheet'.
        spreadsheet or a chart that fetches live data.
      </Styled.p>
    </Box>
  </Box>
)

export const TagLineB = () => (
  // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
  <Box sx={{ py: [3, 4, 5] }}>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
      <Styled.h1 as="h3" sx={{ mb: 0 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'What'.
        What is a block?
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ mt: 0, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color. Blocks can be complex like an embedded
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'spreadsheet'.
        spreadsheet or a chart that fetches live data.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Get'.
      <Button>Get started</Button>
    </Box>
  </Box>
)

export const TagLineC = () => (
  // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
  <Flex sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 800, mx: 'auto' }}>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pr: 3 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
      <Styled.h1 as="h3" sx={{ m: 0 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'What'.
        What is a block?
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ m: 0, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color.
      </Styled.p>
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pl: 3 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Get'.
      <Button>Get started</Button>
    </Box>
  </Flex>
)

export const TagLineD = () => (
  // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
  <Flex sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 800, mx: 'auto' }}>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pr: 3 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Get'.
      <Button>Get started</Button>
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pl: 3 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
      <Styled.h1 as="h3" sx={{ m: 0 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'What'.
        What is a block?
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ m: 0, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color.
      </Styled.p>
    </Box>
  </Flex>
)

export const TagLineE = () => (
  // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
  <Box sx={{ textAlign: 'center', py: [3, 4, 5], maxWidth: 800, mx: 'auto' }}>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
    <Styled.h1 as="h3" sx={{ m: 0 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'What'.
      What is a block?
    </Styled.h1>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Styled.p sx={{ mt: 0, mx: 'auto', maxWidth: 600 }}>
      // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
      Blocks can be simple like a paragraph of text or even a box with a tomato
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
      background color.
    </Styled.p>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Get'.
    <Button>Get started</Button>
  </Box>
)

export const TagLineEA = () => (
  // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
  <Box sx={{ backgroundColor: '#2B2D2D' }}>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ textAlign: 'center', py: [4, 5, 6], maxWidth: 800, mx: 'auto' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
      <Styled.h1 as="h3" sx={{ mt: 0, color: 'white' }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Let'.
        Let&lsquo;s do something great together
      </Styled.h1>
      <Button
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          backgroundColor: 'transparent',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'border'.
          border: '2px solid',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
          color: 'white',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
          fontSize: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
          px: 5
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Get'.
        Get started
      </Button>
    </Box>
  </Box>
)

export const TagLineF = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  <Box
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      background: 'linear-gradient(330deg, #471091 34%, #2D2BAB 79%)',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      backgroundColor: '#471091',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      color: 'white'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ textAlign: 'center', py: [3, 4, 5], maxWidth: 800, mx: 'auto' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
      <Styled.h1 as="h3" sx={{ m: 0 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'What'.
        What is a block?
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ mt: 0, mb: 4, mx: 'auto', maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color.
      </Styled.p>
      <Button
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          color: '#471091',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
          backgroundColor: '#acaedf',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
          px: 5,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
          fontSize: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontWeight'.
          fontWeight: 600
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Take'.
        Take it for a spin
      </Button>
    </Box>
  </Box>
)

export const TagLineFA = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  <Box
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      background: 'linear-gradient(330deg, #471091 34%, #2D2BAB 79%)',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      backgroundColor: '#471091',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      color: 'white'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ py: [3, 4, 5], maxWidth: 800, mx: 'auto' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
      <Styled.h1 as="h3" sx={{ m: 0 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'What'.
        What is a block?
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ mt: 0, mb: 4, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color.
      </Styled.p>
      <Button
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          color: '#471091',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
          backgroundColor: '#acaedf',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
          px: 5,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
          fontSize: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontWeight'.
          fontWeight: 600
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Take'.
        Take it for a spin
      </Button>
    </Box>
  </Box>
)

export const HeroA = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 1200, mx: 'auto' }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pr: 3, width: '50%' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Awesomeness</Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], m: 0, maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        This is a hero, with some convincing copy and a call to action.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ pt: 3 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Try'.
        <Button>Try it</Button>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Button sx={{ ml: 2 }} variant="secondary">
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Doc'.
          Doc
        </Button>
      </Box>
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ width: '50%', pl: [null, 3, 4] }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
        alt="Hologram graphic"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://assets.blocks-ui.com/hologram.svg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          maxWidth: '100%'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Box>
  </Flex>
)

export const HeroB = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 1200, mx: 'auto' }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pr: 3, width: '50%' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h6 sx={{ mb: 1, textTransform: 'uppercase' }}>Kicker</Styled.h6>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Awesomeness</Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], m: 0, maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        This is a hero, with some convincing copy and a call to action.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ pt: 3 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Try'.
        <Button>Try it</Button>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Button sx={{ ml: 2 }} variant="secondary">
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Doc'.
          Doc
        </Button>
      </Box>
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ width: '50%', pl: [null, 3, 4] }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
        alt="Hologram graphic"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://assets.blocks-ui.com/hologram.svg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          maxWidth: '100%'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Box>
  </Flex>
)

export const HeroBG = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  <Box
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      background: 'linear-gradient(330deg, #471091 34%, #2D2BAB 79%)',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      backgroundColor: '#471091',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      color: 'white'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Flex
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 1200, mx: 'auto' }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ pr: 3, width: '50%' }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Styled.h6 sx={{ mb: 1, textTransform: 'uppercase', color: '#acaedf' }}>
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Kicker'.
          Kicker
        </Styled.h6>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Awesomeness</Styled.h1>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Styled.p sx={{ fontSize: [2, 3, 4], m: 0, maxWidth: 500 }}>
          // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
          This is a hero, with some convincing copy and a call to action.
        </Styled.p>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Box sx={{ pt: 4 }}>
          // @ts-expect-error ts-migrate(2749) FIXME: 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
            sx={{
              // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              color: '#471091',
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
              backgroundColor: '#acaedf',
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
              px: 5,
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
              py: 3,
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
              fontSize: 3,
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontWeight'.
              fontWeight: 600
            }}
          >
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Take'.
            Take it for a spin
          </Button>
        </Box>
      </Box>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ width: '50%', pl: [null, 3, 4] }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt="Hologram graphic"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src="https://assets.blocks-ui.com/hologram.svg"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            maxWidth: '100%'
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Box>
    </Flex>
  </Box>
)

export const HeroBGNewsletter = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  <Box
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: 4,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      background: 'linear-gradient(330deg, #471091 34%, #2D2BAB 79%)',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      backgroundColor: '#471091',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      color: 'white'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Flex
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 1200, mx: 'auto' }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ pr: 3, width: '50%' }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Styled.h6 sx={{ mb: 1, textTransform: 'uppercase', color: '#acaedf' }}>
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Coming'.
          Coming Soon
        </Styled.h6>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Some product</Styled.h1>
        <Styled.p
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{ fontSize: [2, 3, 4], m: 0, maxWidth: 500, color: '#d1d3ff' }}
        >
          // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
          This is a hero, with some convincing copy and a call to action.
        </Styled.p>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Styled.p sx={{ mt: [3, 4, 4], mb: 2, maxWidth: 500 }}>
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Sign'.
          Sign up for project updates and releases.
        </Styled.p>
        <Flex>
          // @ts-expect-error ts-migrate(2749) FIXME: 'Input' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Input
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
            sx={{
              maxWidth: '18rem'
            }}
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'placeholder'.
            placeholder={'hello@example.com'}
          />
          // @ts-expect-error ts-migrate(2749) FIXME: 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
            sx={{
              // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              color: '#471091',
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
              backgroundColor: '#acaedf',
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
              ml: 3,
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontWeight'.
              fontWeight: 600
            }}
          // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
          >
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Subscribe'.
            Subscribe
          </Button>
        </Flex>
      </Box>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ width: '50%', pl: [null, 3, 4] }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
        <img
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
          alt="Hologram graphic"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
          src="https://assets.blocks-ui.com/hologram.svg"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{
            maxWidth: '100%'
          }}
        // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </Box>
    </Flex>
  </Box>
)

export const HeroC = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 1200, mx: 'auto' }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ width: '50%', pr: [null, 3, 4] }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
        alt="Hologram graphic"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://assets.blocks-ui.com/hologram.svg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          maxWidth: '100%'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pl: 3, width: '50%' }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h6 sx={{ mb: 1, textTransform: 'uppercase' }}>Kicker</Styled.h6>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Awesomeness</Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], m: 0, maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        This is a hero, with some convincing copy and a call to action.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ pt: 3 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Try'.
        <Button>Try it</Button>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Button sx={{ ml: 2 }} variant="secondary">
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Doc'.
          Doc
        </Button>
      </Box>
    </Box>
  </Flex>
)

export const HeroD = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  <Box
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      textAlign: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: [3, 4, 5],
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 1200,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      width: '50%'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Awesomeness</Styled.h1>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Styled.p sx={{ fontSize: [2, 3, 4], my: 0, mx: 'auto', maxWidth: 500 }}>
      // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
      This is a hero, with some convincing copy and a call to action.
    </Styled.p>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pt: 4 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Button sx={{ mr: 2 }}>Try it</Button>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'span'.
      <span>or</span>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Button sx={{ ml: 2 }} variant="secondary">
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Doc'.
        Doc
      </Button>
    </Box>
  </Box>
)

export const HeroE = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: [3, 4, 5],
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 1200,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        width: '60%'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Hello, world!</Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], my: 0, maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        This is a hero, with some convincing copy and a rad picture of the top
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'of'.
        of a building.
      </Styled.p>
    </Box>
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        width: '40%'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://assets.blocks-ui.com/lachlan-gowen-building.jpg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          width: '100%'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Box>
  </Flex>
)

export const HeroEA = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: [3, 4, 5],
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 1200,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        width: '60%',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
        backgroundColor: 'background',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mr'.
        mr: -5,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 5,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
        py: 5,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'zIndex'.
        zIndex: 999
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>An image overlap</Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], mt: 0, maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Having'.
        Having your written content overlap the image on the side is playful. It
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'gives'.
        gives a unique, modern feel to your site.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'It'.
        It&lsquo;s a nice touch for minimal websites and stores.
      </Styled.p>
    </Box>
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        width: '40%'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://assets.blocks-ui.com/minh-pham-interior.jpg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          width: '100%'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Box>
  </Flex>
)

export const HeroEB = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: [3, 4, 5],
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 1200,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        width: '40%'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://assets.blocks-ui.com/minh-pham-interior.jpg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          width: '100%'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Box>
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        width: '60%',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'backgroundColor'.
        backgroundColor: 'background',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ml'.
        ml: -5,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
        px: 5,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
        py: 5,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'zIndex'.
        zIndex: 999
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Awesomeness</Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], mt: 0, maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        This is a hero, with some convincing copy and a call to action.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        This is a hero, with some convincing copy and a call to action.
      </Styled.p>
    </Box>
  </Flex>
)

export const HeroF = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  <Box
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      textAlign: 'center',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: [3, 4, 5],
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 1200,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto'
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Awesomeness</Styled.h1>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Styled.p sx={{ fontSize: [2, 3, 4], my: 0, mx: 'auto', maxWidth: 500 }}>
      // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
      This is a hero, with some convincing copy and a call to action.
    </Styled.p>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pt: 4, pb: 5 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Button sx={{ backgroundColor: '#173383' }}>Give it a go</Button>
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
    <img
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
      src="https://assets.blocks-ui.com/house-interior.jpg"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        width: '100%'
      }}
    />
  </Box>
)

export const HeroFA = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  <Box>
    // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        p: [3, 4, 5],
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        pb: [7, 7, 7],
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        backgroundColor: '#2B2D2D',
        // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
        color: 'white'
      }}
    >
      // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          textAlign: 'center',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
          px: 3,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'py'.
          py: [3, 4, 5],
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'maxWidth'.
          maxWidth: 1200,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mx'.
          mx: 'auto'
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Demo'.
          Demo content is interesting
        </Styled.h1>
        <Styled.p
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
          sx={{ fontSize: [2, 3, 4], my: 0, mx: 'auto', maxWidth: 540 }}
        >
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'It'.
          It often shows houses that are way cleaner than my own. How do those
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'blankets'.
          blankets stay folded? I guess they don&lsquo;t have kids.
        </Styled.p>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        <Box sx={{ py: 5 }}>
          // @ts-expect-error ts-migrate(2749) FIXME: 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Button
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
            sx={{
              // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
              backgroundColor: 'transparent',
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'color'.
              color: 'white',
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'px'.
              px: 4,
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontSize'.
              fontSize: 3,
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'fontWeight'.
              fontWeight: 500,
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'border'.
              border: '2px solid white',
              // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'borderRadius'.
              borderRadius: 0
            }}
          >
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Click'.
            Click a button
          </Button>
        </Box>
      </Box>
    </Box>
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        textAlign: 'center',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'pb'.
        pb: [3, 4, 5]
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://assets.blocks-ui.com/kara-eads-interior.jpg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mt: -7,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
          width: '100%',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'maxWidth'.
          maxWidth: 1200
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Box>
  </Box>
)

export const HeroG = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      px: 3,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      py: [3, 4, 5],
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: 1200,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mx: 'auto',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      alignItems: 'center'
    }}
  >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        width: '60%'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0, color: '#0F5A3D' }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Awesomeness'.
        Awesomeness
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ fontSize: [2, 3, 4], mt: 0, maxWidth: 500 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        This is a hero, with some convincing copy and a call to action.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Button sx={{ backgroundColor: '#0F5A3D' }}>Give it a try</Button>
    </Box>
    <Box
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        width: '40%'
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
      <img
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
        src="https://assets.blocks-ui.com/jude-beck-plant.jpg"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          width: '100%'
        }}
      // @ts-expect-error ts-migrate(2365) FIXME: Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
      />
    </Box>
  </Flex>
)

export const DescriptionA = () => (
  // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
  <Flex sx={{ py: [3, 4, 5], maxWidth: 1200, mx: 'auto' }}>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pr: 3, width: '50%' }}>
      // @ts-expect-error ts-migrate(2503) FIXME: Cannot find namespace 'Styled'.
      <Styled.h1
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
        as="blockquote"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mx: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mt'.
          mt: '-8px',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
          mb: 2,
          ':before': {
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            content: '"“"',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'position'.
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'transform'.
            transform: 'translateX(-30px)'
          },
          ':after': {
            content: '"”"'
          }
        }}
      // @ts-expect-error ts-migrate(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'It'.
        It&lsquo;s pretty fun to turn JSX into a WYSIWYG.
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
      <footer sx={{ fontSize: 2 }}>&mdash; Me</footer>
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pl: 3 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ mt: 0, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or a box with a tomato
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        background color. They can be complex and contain state or even fetch
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'data'.
        data. They&lsquo;re pre-built components that can be drag and dropped
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'onto'.
        onto the canvas.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'It'.
        It&lsquo;s “low code” because you don&lsquo;t have to peek into the JSX
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'until'.
        until you have bespoke needs.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Blocks'.
        Blocks are typically composed of multiple components which allows you to
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'edit'.
        edit styling of a particular element.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ mt: 4 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Get'.
        <Button>Get started</Button>
      </Box>
    </Box>
  </Flex>
)

export const DescriptionAA = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 1200, mx: 'auto' }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pr: 3, width: '50%' }}>
      // @ts-expect-error ts-migrate(2503) FIXME: Cannot find namespace 'Styled'.
      <Styled.h1
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
        as="blockquote"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mx: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mt'.
          mt: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
          mb: 2,
          ':before': {
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            content: '"“"',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'position'.
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'transform'.
            transform: 'translateX(-30px)'
          },
          ':after': {
            content: '"”"'
          }
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'This'.
        This is an amazing quote about something very interesting.
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
      <footer sx={{ fontSize: 2 }}>&mdash; Some person</footer>
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pl: 3 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ mt: 0, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color. Blocks can be simple like a paragraph of text
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        or even a box with a tomato background color.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ maxWidth: 600 }}>Blocks can be simple.</Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ mt: 4 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Do'.
        <Button>Do something</Button>
      </Box>
    </Box>
  </Flex>
)

export const DescriptionAAA = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
  <Flex
    // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    sx={{ alignItems: 'center', py: [3, 4, 5], maxWidth: 1200, mx: 'auto' }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pl: 3 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ mt: 0, maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color. Blocks can be simple like a paragraph of text
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        or even a box with a tomato background color.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ maxWidth: 600 }}>Blocks can be simple.</Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Styled.p sx={{ maxWidth: 600 }}>
        // @ts-expect-error ts-migrate(1101) FIXME: 'with' statements are not allowed in strict mode.
        Blocks can be simple like a paragraph of text or even a box with a
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'background'.
        tomato background color.
      </Styled.p>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      <Box sx={{ mt: 4 }}>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Do'.
        <Button>Do something</Button>
      </Box>
    </Box>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    <Box sx={{ pl: [3, 4, 5], width: '50%' }}>
      // @ts-expect-error ts-migrate(2503) FIXME: Cannot find namespace 'Styled'.
      <Styled.h1
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
        as="blockquote"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
        sx={{
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          mx: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mt'.
          mt: 0,
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
          mb: 2,
          ':before': {
            // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
            content: '"“"',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'position'.
            position: 'absolute',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'transform'.
            transform: 'translateX(-30px)'
          },
          ':after': {
            content: '"”"'
          }
        }}
      >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'This'.
        This is an amazing quote about something very interesting.
      </Styled.h1>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
      <footer sx={{ fontSize: 2 }}>&mdash; Some person</footer>
    </Box>
  </Flex>
)

export const BlockQuote = () => (
  // @ts-expect-error ts-migrate(2749) FIXME: 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
  <Box
    // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    sx={{ px: 3, py: [3, 4, 5], textAlign: 'center', m: 'auto', maxWidth: 700 }}
  >
    // @ts-expect-error ts-migrate(2503) FIXME: Cannot find namespace 'Styled'.
    <Styled.h1
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'as'.
      as="blockquote"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        mx: 0,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mt'.
        mt: 0,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'mb'.
        mb: 2,
        ':before': {
          // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
          content: '"“"',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'position'.
          position: 'absolute',
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'transform'.
          transform: 'translateX(-30px)'
        },
        ':after': {
          content: '"”"'
        }
      }}
    >
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'This'.
      This is an amazing quote about something very interesting.
    </Styled.h1>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'footer'.
    <footer sx={{ fontSize: 2 }}>&mdash; Some person</footer>
  </Box>
)

export const ImageBlock = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'figure'.
  <figure
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
    sx={{
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      left: 'calc(50% - 50vw)',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      maxWidth: '100vw',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      position: 'relative',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      width: '100vw',
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      ml: 0,
      // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
      mr: 0
    }}
  >
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'img'.
    <img
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'alt'.
      alt="Pine branch"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'src'.
      src="https://assets.blocks-ui.com/tim-foster-pine-branch.jpg"
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'sx'.
      sx={{
        // @ts-expect-error ts-migrate(2695) FIXME: Left side of comma operator is unused and has no s... Remove this comment to see the full error message
        height: 'auto',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'verticalAlign'.
        verticalAlign: 'middle',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'display'.
        display: 'block',
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'width'.
        width: '100%'
      }}
    />
  </figure>
)

/*
export const ImageGrid = () => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      px: [null, 3, 3],
      py: [3, 4, 5]
    }}
  >
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3
      }}
    >
      <figure
        sx={{
          pt: '100%',
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3 / 4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/banter-snaps-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3
      }}
    >
      <figure
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3 / 4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/daniel-mirlea-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3
      }}
    >
      <figure
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3/4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/jason-blackeye-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3
      }}
    >
      <figure
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3/4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/jason-blackeye-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3
      }}
    >
      <figure
        sx={{
          pt: '100%',
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3 / 4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/banter-snaps-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3
      }}
    >
      <figure
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3 / 4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/daniel-mirlea-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
    </Box>
  </Flex>
)

export const ImageTextGrid = () => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      px: [null, 3, 3],
      py: [3, 4, 5]
    }}
  >
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3,
        pb: 3
      }}
    >
      <figure
        sx={{
          pt: '100%',
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3 / 4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/banter-snaps-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
      <Styled.h3 sx={{ m: 0 }}>Hello, world!</Styled.h3>
      <Styled.p sx={{ mt: 0 }}>
        Here is some text about things, more things, and yet other things.
      </Styled.p>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3,
        pb: 3
      }}
    >
      <figure
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3 / 4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/daniel-mirlea-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
      <Styled.h3 sx={{ m: 0 }}>Hello, world!</Styled.h3>
      <Styled.p sx={{ mt: 0 }}>
        Here is some text about things, more things, and yet other things.
      </Styled.p>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3,
        pb: 3
      }}
    >
      <figure
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3/4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/jason-blackeye-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
      <Styled.h3 sx={{ m: 0 }}>Hello, world!</Styled.h3>
      <Styled.p sx={{ mt: 0 }}>
        Here is some text about things, more things, and yet other things.
      </Styled.p>
    </Box>
  </Flex>
)

export const ImageTextGridA = () => (
  <Flex
    sx={{
      flexWrap: 'wrap',
      px: [null, 3, 3],
      py: [3, 4, 5],
      textAlign: 'center'
    }}
  >
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3,
        pb: 3
      }}
    >
      <figure
        sx={{
          pt: '100%',
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3 / 4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/banter-snaps-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
      <Styled.h3 sx={{ m: 0 }}>Hello, world!</Styled.h3>
      <Styled.p sx={{ mt: 0 }}>
        Here is some text about things, more things, and yet other things.
      </Styled.p>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3,
        pb: 3
      }}
    >
      <figure
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3 / 4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/daniel-mirlea-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
      <Styled.h3 sx={{ m: 0 }}>Hello, world!</Styled.h3>
      <Styled.p sx={{ mt: 0 }}>
        Here is some text about things, more things, and yet other things.
      </Styled.p>
    </Box>
    <Box
      sx={{
        width: [1, 'calc(1/3 * 100%)', 'calc(1/3 * 100%)'],
        overflow: 'hidden',
        px: 3,
        pb: 3
      }}
    >
      <figure
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          padding: 'calc(3/4 * 100%) 0 0',
          overflow: 'hidden',
          mr: [null, 2, 3],
          ml: 0
        }}
      >
        <img
          alt="Pine branch"
          src="https://assets.blocks-ui.com/jason-blackeye-trees.jpg"
          sx={{
            height: '100%',
            position: 'absolute',
            objectFit: 'cover',
            top: 0,
            width: '100%',
            verticalAlign: 'middle',
            maxWidth: '100%'
          }}
        />
      </figure>
      <Styled.h3 sx={{ m: 0 }}>Hello, world!</Styled.h3>
      <Styled.p sx={{ mt: 0 }}>
        Here is some text about things, more things, and yet other things.
      </Styled.p>
    </Box>
  </Flex>
)
*/

export const H1 = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Heading'.
    <Styled.h1>Heading One</Styled.h1>
  </div>
)
export const H2 = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Heading'.
    <Styled.h2>Heading Two</Styled.h2>
  </div>
)
export const H3 = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Heading'.
    <Styled.h3>Heading Three</Styled.h3>
  </div>
)
export const H4 = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div>
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Heading'.
    <Styled.h4>Heading Four</Styled.h4>
  </div>
)
export const P = () => (
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
  <div>
    // @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable '(Missing)'... Remove this comment to see the full error message
    <Styled.p sx={{ maxWidth: 320 }}>
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Here'.
      Here&lsquo;s an awesome paragraph
    </Styled.p>
  </div>
)
