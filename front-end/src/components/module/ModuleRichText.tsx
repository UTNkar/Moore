import clsx from 'clsx';

export default function ModuleRichText({
  html,
  className,
  ...otherProps
}: Omit<JSX.IntrinsicElements['div'], 'children' | 'dangerouslySetInnerHTML'> & { html: string }) {
  let formattedHtml = html;

  // the text is expected to contain paragraphs
  if (formattedHtml.charAt(0) !== '<') {
    formattedHtml = '<p>' + formattedHtml + '</p>';
  }

  return (
    <div
      {...otherProps}
      dangerouslySetInnerHTML={{ __html: formattedHtml }}
      className={clsx('rich-text', className)}
    />
  );
}
