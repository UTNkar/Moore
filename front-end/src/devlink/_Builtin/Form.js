import React from 'react';

import { loadScript } from '../utils';

function onKeyDownInputHandlers(e) {
  e.stopPropagation();
}

export function _FormFileUploadWrapper({ className = '', ...props }) {
  return React.createElement('div', {
    className: className + ' w-file-upload',
    ...props,
  });
}

export function FormBlockLabel(props) {
  return React.createElement('label', props);
}

export function FormBooleanInput({
  className = '',
  checked = false,
  type = 'checkbox',
  inputType,
  customClassName,
  ...props
}) {
  const [isChecked, setIsChecked] = React.useState(checked);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFocusedVisible, setIsFocusedVisible] = React.useState(false);
  const wasClicked = React.useRef(false);

  const inputProps = {
    checked: isChecked,
    onBlur: (e) => {
      if (props.onBlur) props.onBlur(e);
      setIsFocused(false);
      setIsFocusedVisible(false);
      wasClicked.current = false;
    },
    onChange: (e) => {
      if (props.onChange) props.onChange(e);
      setIsChecked((prevIsChecked) => !prevIsChecked);
    },
    onClick: (e) => {
      if (props.onClick) props.onClick(e);
      wasClicked.current = true;
    },
    onFocus: (e) => {
      if (props.onFocus) props.onFocus(e);
      setIsFocused(true);

      if (!wasClicked.current) {
        setIsFocusedVisible(true);
      }
    },
    onKeyDown: onKeyDownInputHandlers,
    type,
  };

  if (inputType === 'custom') {
    const pseudoModeClasses = `${isChecked ? ` ${CHECKED_CLASS}` : ''}${
      isFocused ? ` ${FOCUSED_CLASS}` : ''
    }${isFocusedVisible ? ` ${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}` : ''} ${customClassName ?? ''}`;

    const currentClassName = `${className}${pseudoModeClasses}`;

    return (
      <>
        <div className={currentClassName} />
        <input {...props} {...inputProps} style={HIDE_DEFAULT_INPUT_STYLES} />
      </>
    );
  }

  return <input className={className} {...props} {...inputProps} />;
}

export function FormButton({ className = '', value, ...props }) {
  return React.createElement('input', {
    ...props,
    className: className + ' w-button',
    onKeyDown: onKeyDownInputHandlers,
    type: 'submit',
    value: value ?? '',
  });
}

export function FormCheckboxInput({ className = '', ...props }) {
  return <FormBooleanInput {...props} type="checkbox" className={className + ' w-checkbox-input'} />;
}

export function FormCheckboxWrapper({ className = '', ...props }) {
  return React.createElement('label', {
    className: className + ' w-checkbox',
    ...props,
  });
}

export function FormErrorMessage({ className = '', ...props }) {
  return React.createElement('div', {
    className: className + ' w-form-fail',
    ...props,
  });
}

export function FormFileUploadDefault({ className = '', ...props }) {
  const { files, error } = React.useContext(FileUploadContext);

  return React.createElement('div', {
    className: className + ' w-file-upload-default',
    ...props,
    style: {
      ...props.style,
      display: !files || error ? 'block' : 'none',
    },
  });
}

const HIDE_DEFAULT_INPUT_STYLES = {
  opacity: 0,
  position: 'absolute',
  zIndex: -1,
};

const CHECKED_CLASS = 'w--redirected-checked';
const FOCUSED_CLASS = 'w--redirected-focus';
const FOCUSED_VISIBLE_CLASS = 'w--redirected-focus-visible';

export function FormFileUploadError({ className = '', ...props }) {
  const { error } = React.useContext(FileUploadContext);

  return React.createElement('div', {
    className: className + ' w-file-upload-error',
    ...props,
    style: {
      ...props.style,
      display: error ? 'block' : 'none',
    },
  });
}

export function FormFileUploadErrorMsg({ errors, className = '', ...props }) {
  const { error } = React.useContext(FileUploadContext);

  return React.createElement(
    'div',
    {
      className: className + ' w-file-upload-error-msg',
      ...props,
    },
    errors[error ?? 'GENERIC_ERROR'],
  );
}

export function FormFileUploadFile({ className = '', ...props }) {
  return React.createElement('div', {
    className: className + ' w-file-upload-file',
    ...props,
  });
}

const MAX_FILE_SIZE_DEFAULT = 10485760;

const FileUploadContext = React.createContext({
  error: null,
  files: null,
  maxSize: MAX_FILE_SIZE_DEFAULT,
  setError: () => undefined,
  setFiles: () => undefined,
});

export function FormFileUploadFileName({ className = '', ...props }) {
  const { files } = React.useContext(FileUploadContext);

  return React.createElement(
    'div',
    {
      className: className + ' w-file-upload-file-name',
      ...props,
    },
    files && files[0].name,
  );
}

export function FormFileUploadInfo({ className = '', ...props }) {
  return React.createElement('div', {
    className: className + ' w-file-upload-info',
    ...props,
  });
}

export function FormFileUploadInput({ className = '', ...props }) {
  const { setFiles, setError, maxSize } = React.useContext(FileUploadContext);

  return React.createElement('input', {
    ...props,
    className: className + ' w-file-upload-input',
    onChange: (e) => {
      if (e.target.files) {
        if (e.target.files[0].size <= maxSize) {
          setError(null);
          setFiles(e.target.files);
        } else setError('SIZE_ERROR');
      }
    },
    onKeyDown: onKeyDownInputHandlers,
    type: 'file',
  });
}

export function FormFileUploadLabel({ className = '', ...props }) {
  return React.createElement('label', {
    className: className + ' w-file-upload-label',
    ...props,
  });
}

export function FormFileUploadRemoveLink({ className = '', ...props }) {
  const { setFiles } = React.useContext(FileUploadContext);

  return React.createElement('div', {
    className: className + ' w-file-remove-link',
    ...props,
    onClick: () => {
      setFiles(null);
    },
  });
}

export function FormFileUploadSuccess({ className = '', ...props }) {
  const { files, error } = React.useContext(FileUploadContext);

  return React.createElement('div', {
    className: className + ' w-file-upload-success',
    ...props,
    style: {
      ...props.style,
      display: Boolean(files) && !error ? 'block' : 'none',
    },
  });
}

export function FormFileUploadText({ className = '', ...props }) {
  return React.createElement('div', {
    className: className + ' w-inline-block',
    ...props,
  });
}

export function FormFileUploadUploading({ className = '', ...props }) {
  return React.createElement('div', {
    className: className + ' w-file-upload-uploading',
    style: { ...props.style, display: 'none' },
    ...props,
  });
}

export function FormFileUploadUploadingBtn({ className = '', ...props }) {
  return React.createElement('div', {
    className: className + ' w-file-upload-uploading-btn',
    ...props,
  });
}

export function FormFileUploadUploadingIcon({ className = '', ...props }) {
  return React.createElement(
    'svg',
    {
      className: className + ' icon w-icon-file-upload-uploading',
      ...props,
    },
    <>
      <path
        fill="currentColor"
        opacity=".2"
        d="M15 30a15 15 0 1 1 0-30 15 15 0 0 1 0 30zm0-3a12 12 0 1 0 0-24 12 12 0 0 0 0 24z"
      ></path>
      <path fill="currentColor" opacity=".75" d="M0 15A15 15 0 0 1 15 0v3A12 12 0 0 0 3 15H0z">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="0.6s"
          from="0 15 15"
          repeatCount="indefinite"
          to="360 15 15"
          type="rotate"
        ></animateTransform>
      </path>
    </>,
  );
}

export function FormFileUploadWrapper({ maxSize = MAX_FILE_SIZE_DEFAULT, ...props }) {
  const [files, setFiles] = React.useState(null);
  const [error, setError] = React.useState(null);

  return React.createElement(
    FileUploadContext.Provider,
    {
      value: { error, files, maxSize, setError, setFiles },
    },
    React.createElement(_FormFileUploadWrapper, { ...props }),
  );
}

export function FormForm(props) {
  return React.createElement('form', props);
}

export function FormInlineLabel({ className = '', ...props }) {
  return React.createElement('span', {
    className: className + ' w-form-label',
    ...props,
  });
}

export function FormRadioInput({ className = '', ...props }) {
  return <FormBooleanInput {...props} type="radio" className={className + ' w-radio-input'} />;
}

export function FormRadioWrapper({ className = '', ...props }) {
  return React.createElement('label', {
    className: className + ' w-radio',
    ...props,
  });
}

export function FormReCaptcha({ siteKey = '', theme = 'light', size = 'normal' }) {
  React.useEffect(() => {
    loadScript('https://www.google.com/recaptcha/api.js', {
      cacheRegex: /(http|https):\/\/(www)?.+\/recaptcha/,
    });
  }, []);

  return <div className="g-recaptcha" data-sitekey={siteKey} data-theme={theme} data-size={size} />;
}

export function FormSelect({ options, className = '', ...props }) {
  return React.createElement(
    'select',
    { className: className + ' w-select', ...props },
    options.map(({ v, t }, index) =>
      React.createElement('option', { key: index, value: hasValue(v) ? v : '' }, hasValue(t) ? t : ''),
    ),
  );
}

export function FormSuccessMessage({ className = '', ...props }) {
  return React.createElement('div', {
    className: className + ' w-form-done',
    ...props,
  });
}

export function FormTextarea({ className = '', ...props }) {
  return React.createElement('textarea', {
    ...props,
    className: className + ' w-input',
    onKeyDown: onKeyDownInputHandlers,
  });
}

export function FormTextInput({ className = '', ...props }) {
  return React.createElement('input', {
    ...props,
    className: className + ' w-input',
    onKeyDown: onKeyDownInputHandlers,
  });
}

export function FormWrapper({
  className = '',
  state: initialState = 'normal',
  onSubmit,
  children,
  ...props
}) {
  const [state, setState] = React.useState(initialState);

  const formName = (children.find((c) => c.type === FormForm)?.props)['data-name'] ?? 'Form';

  return React.createElement(
    'div',
    {
      className: className + ' w-form',
      ...props,
    },
    React.Children.map(children, (child) => {
      if (child.type === FormForm) {
        const style = {};

        if (state === 'success') {
          style.display = 'none';
        }

        return React.cloneElement(child, {
          ...child.props,
          'aria-label': formName,
          onSubmit: (e) => {
            try {
              e.preventDefault();

              if (window.grecaptcha) {
                if (!window.grecaptcha?.getResponse()) {
                  alert(`Please confirm you’re not a robot.`);
                  return;
                }
              }

              if (onSubmit) {
                onSubmit(e);
              }

              setState('success');
            } catch (err) {
              setState('error');

              throw err;
            }
          },
          style,
        });
      }

      if (child.type === FormSuccessMessage) {
        const style = {};

        if (state === 'success') {
          style.display = 'block';
        }

        if (state === 'error') {
          style.display = 'none';
        }

        return React.cloneElement(child, {
          ...child.props,
          'aria-label': `${formName} success`,
          role: 'region',
          style,
          tabIndex: -1,
        });
      }

      if (child.type === FormErrorMessage) {
        const style = {};

        if (state === 'success') {
          style.display = 'none';
        }

        if (state === 'error') {
          style.display = 'block';
        }

        return React.cloneElement(child, {
          ...child.props,
          'aria-label': `${formName} failure`,
          role: 'region',
          style,
          tabIndex: -1,
        });
      }

      return child;
    }),
  );
}

export function SearchButton({ value = '', className = '', ...props }) {
  return React.createElement('input', {
    ...props,
    className: className + ' w-button',
    onKeyDown: onKeyDownInputHandlers,
    type: 'submit',
    value,
  });
}

function hasValue(str) {
  if (typeof str !== 'string') return false;
  return str.replace(/^[s ]+|[s ]+$/g, '').length > 0;
}

export function SearchForm(props) {
  return React.createElement('form', props);
}

export function SearchInput({ className = '', ...props }) {
  return React.createElement('input', {
    ...props,
    className: className + ' w-input',
    onKeyDown: onKeyDownInputHandlers,
    type: 'text',
  });
}
