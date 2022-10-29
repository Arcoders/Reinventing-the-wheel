import { createElement } from 'react';
import { snakeToCamel } from './utils';

let defaultTheme = {};

export const setTheme = customTheme => defaultTheme = customTheme;

const retrieveStyles = (props, strings, callbacks) => {
  let inlineStyles = '';

  strings.forEach((str, index) => {
    if (callbacks) {
      let styleValue = callbacks[index];
      if (typeof styleValue === 'function')
        styleValue = styleValue({ ...props, ...defaultTheme });
      str += styleValue;
    }
    inlineStyles += str;
  });

  const styles = {};

  inlineStyles.split(';').forEach((str) => {
    let [attribute, value] = str.trim().split(':');
    if (attribute && value) styles[snakeToCamel(attribute)] = value;
  });

  return styles;
};

const Component =
  (tag) =>
  (strings, ...callbacks) =>
  (props) => {
    const children = !props.children
      ? null
      : Array.isArray(props.children)
      ? props.children
      : [props.children];

    const reactProps = { ...props };
    Object.keys(props).forEach(
      (key) => typeof props[key] === 'boolean' && delete reactProps[key]
    );
    const style = retrieveStyles(props, strings, callbacks);

    return createElement(tag, { style, ...reactProps }, children);
  };

const StyledComponent = (() => {
  const styled = new Proxy(
    {},
    {
      get(_, prop) {
        return Component(prop);
      },
    }
  );
  return styled;
})();

export default StyledComponent;
