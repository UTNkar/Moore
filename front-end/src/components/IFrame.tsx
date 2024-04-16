import objectAssign from 'object-assign';

export default function IFrame({
  url,
  allowFullScreen,
  position,
  display,
  height,
  width,
  overflow,
  styles,
  onLoad,
  onMouseOver,
  onMouseOut,
  scrolling,
  id,
  frameBorder,
  ariaHidden,
  sandbox,
  allow,
  className,
  title,
  ariaLabel,
  ariaLabelledby,
  name,
  target,
  loading,
  importance,
  referrerPolicy,
  allowPaymentRequest,
  src,
  key,
}: IFrameProps) {
  const defaultProps = objectAssign({
    allow: allow || null,
    allowFullScreen: allowFullScreen || null,
    allowPaymentRequest: allowPaymentRequest || null,
    'aria-hidden': ariaHidden || null,
    'aria-label': ariaLabel || null,
    'aria-labelledby': ariaLabelledby || null,
    className: className || null,
    height: height || null,
    id: id || null,
    importance: importance || null,
    key: key || 'iframe',
    loading: loading || null,
    name: name || null,
    onLoad: onLoad || null,
    onMouseOut: onMouseOut || null,
    onMouseOver: onMouseOver || null,
    referrerPolicy: referrerPolicy || null,
    sandbox: (sandbox && [...sandbox].join(' ')) || null,
    scrolling: scrolling || null,
    src: src || url,
    style: {
      display: display || 'initial',
      overflow: overflow || null,
      position: position || null,
    },
    styles: styles || null,
    target: target || null,
    title: title || null,
    width: width || null,
  } as Partial<JSX.IntrinsicElements['iframe']>);

  const props: JSX.IntrinsicElements['iframe'] = Object.create(null);

  for (const prop of Object.keys(defaultProps)) {
    if (defaultProps[prop] != null) {
      props[prop] = defaultProps[prop];
    }
  }

  for (const i of Object.keys(props.style)) {
    if (props.style[i] == null) {
      delete props.style[i];
    }
  }

  if (props.style) {
    for (const key of Object.keys(props.style)) {
      if (props.style.hasOwnProperty(key)) {
        if (props.style[key] == null) {
          delete props.style[key];
        }
      }

      if (Object.keys(props.style).pop() === key) {
        delete props.style;
      }
    }
  }

  if (allowFullScreen) {
    if ('allow' in props) {
      const currentAllow = props.allow.replace('fullscreen', '');

      props.allow = `fullscreen ${currentAllow.trim()}`.trim();
    } else {
      props.allow = 'fullscreen';
    }
  }

  if (frameBorder >= 0) {
    if (!props.style.hasOwnProperty('border')) {
      props.style.border = frameBorder;
    }
  }

  return <iframe title={props.title!} {...props} />;
}

type SandboxAttributeValue =
  | 'allow-downloads-without-user-activation'
  | 'allow-forms'
  | 'allow-modals'
  | 'allow-orientation-lock'
  | 'allow-pointer-lock'
  | 'allow-popups'
  | 'allow-popups-to-escape-sandbox'
  | 'allow-presentation'
  | 'allow-same-origin'
  | 'allow-scripts'
  | 'allow-storage-access-by-user-activation'
  | 'allow-top-navigation'
  | 'allow-top-navigation-by-user-activation';

export interface IFrameProps {
  allow?: string;
  allowFullScreen?: boolean;
  allowPaymentRequest?: boolean;
  ariaHidden?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  className?: string;
  display?: 'block' | 'none' | 'inline' | 'initial';
  frameBorder?: number;
  height?: string;
  id?: string;
  importance?: 'auto' | 'high' | 'low';
  key?: string;
  loading?: 'auto' | 'eager' | 'lazy';
  name?: string;
  onLoad?: () => void;
  onMouseOut?: () => void;
  onMouseOver?: () => void;
  overflow?: string;
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static' | 'inherit' | 'initial' | 'unset';
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
  sandbox?: SandboxAttributeValue | SandboxAttributeValue[];
  scrolling?: 'auto' | 'yes' | 'no';
  src?: string;
  styles?: object;
  target?: string;
  title: string;
  url: string;
  width?: string;
}
