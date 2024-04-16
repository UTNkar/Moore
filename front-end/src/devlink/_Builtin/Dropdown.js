import * as React from 'react';

import { Link } from './Basic';
import { NavbarContext } from './Navbar';
import { useIXEvent } from '../interactions';
import { KEY_CODES, cj, useClickOut } from '../utils';

function getLinksList(root) {
  return root.querySelectorAll('.w-dropdown-list .w-dropdown-link');
}

const DropdownContext = React.createContext({
  hover: false,
  isOpen: false,
  root: undefined,
  setFocusedLink: () => undefined,
  toggleOpen: () => undefined,
});

const INITIAL_DROPDOWN_STATE = {
  isOpen: false,
  openingCount: 0,
};

export function DropdownLink({ className = '', ...props }) {
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);

  return React.createElement(Link, {
    ...props,
    className: cj(className, 'w-dropdown-link', isNavbarOpen && 'w--nav-link-open'),
    tabIndex: 0,
  });
}

function Dropdown({ tag = 'div', className = '', ...props }) {
  const { root, setFocusedLink, hover, toggleOpen } = React.useContext(DropdownContext);

  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);

  const handleFocus = (e) => {
    const linkList = root.current ? Array.from(getLinksList(root.current)) : [];
    const linkAmount = linkList.length;

    switch (e.key) {
      case KEY_CODES.ARROW_LEFT:

      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setFocusedLink((prev) => Math.max(prev - 1, 0));
        break;
      }

      case KEY_CODES.ARROW_RIGHT:

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setFocusedLink((prev) => Math.min(prev + 1, linkAmount - 1));
        break;
      }

      case KEY_CODES.HOME: {
        e.preventDefault();
        setFocusedLink(0);
        break;
      }

      case KEY_CODES.END: {
        e.preventDefault();
        setFocusedLink(linkAmount - 1);
        break;
      }

      case KEY_CODES.TAB: {
        setTimeout(() => {
          setFocusedLink(linkList.findIndex((link) => link === document.activeElement));
        }, 0);

        break;
      }

      case KEY_CODES.SPACE: {
        e.preventDefault();
        break;
      }

      default: {
        return;
      }
    }
  };

  return React.createElement(tag, {
    ...props,
    className: cj(className, 'w-dropdown', isNavbarOpen && 'w--nav-dropdown-open'),
    onKeyDown: handleFocus,
    onMouseEnter: () => {
      if (hover) {
        toggleOpen();
      }
    },
    onMouseLeave: () => {
      if (hover) {
        toggleOpen();
      }
    },
    ref: root,
  });
}

export function DropdownList({ tag = 'nav', className = '', ...props }) {
  const { isOpen } = React.useContext(DropdownContext);
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);

  return React.createElement(tag, {
    ...props,
    className: cj(
      className,
      'w-dropdown-list',
      isOpen && 'w--open',
      isNavbarOpen && 'w--nav-dropdown-list-open',
    ),
  });
}

export function DropdownToggle({ tag = 'div', className = '', ...props }) {
  const { isOpen, toggleOpen, hover } = React.useContext(DropdownContext);
  const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);

  return React.createElement(tag, {
    ...props,
    'aria-expanded': isOpen,
    'aria-haspopup': 'menu',
    className: cj(className, 'w-dropdown-toggle', isNavbarOpen && 'w--nav-dropdown-toggle-open'),
    onClick: () => {
      if (!hover) toggleOpen();
    },
    onKeyDown: (e) => {
      if (e.key === KEY_CODES.ENTER || e.key === KEY_CODES.SPACE) {
        toggleOpen();
        e.stopPropagation();
        return e.preventDefault();
      }
    },
    role: 'button',
    tabIndex: 0,
  });
}

export function DropdownWrapper({ delay, hover, ...props }) {
  const root = React.useRef(null);
  const [{ isOpen }, setIsOpen] = React.useState(INITIAL_DROPDOWN_STATE);
  const [focusedLink, setFocusedLink] = React.useState(-1);
  const closeTimeoutRef = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const toggleOpen = React.useCallback(() => {
    clearTimeout(closeTimeoutRef.current);
    setFocusedLink(-1);

    setIsOpen(({ openingCount, ...rest }) => ({
      ...rest,
      openingCount: openingCount + 1,
    }));

    if (delay > 0 && isOpen) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(({ openingCount }) => ({
          isOpen: openingCount % 2 === 1,
          openingCount,
        }));
      }, delay);
    } else {
      setIsOpen(({ openingCount }) => ({
        isOpen: openingCount % 2 === 1,
        openingCount,
      }));
    }
  }, [hover, isOpen, delay]);

  const closeDropdown = React.useCallback(() => setIsOpen(INITIAL_DROPDOWN_STATE), [setIsOpen]);

  useClickOut(root, closeDropdown);
  useIXEvent(root.current, isOpen);

  React.useEffect(() => {
    if (root.current) {
      const links = getLinksList(root.current);

      links[focusedLink ?? 0]?.focus();
    }
  }, [focusedLink]);

  return (
    <DropdownContext.Provider
      value={{
        hover,
        isOpen,
        root,
        setFocusedLink,
        toggleOpen,
      }}
    >
      <Dropdown {...props} />
    </DropdownContext.Provider>
  );
}
