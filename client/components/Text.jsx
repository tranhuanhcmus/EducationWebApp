import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[48px] md:text-[48px] text-[65px]",
  h2: "sm:text-[35px] md:text-[41px] text-[45px]",
  h3: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h4: "sm:text-[26px] md:text-[28px] text-[30px]",
  h5: "font-semibold sm:text-[21px] md:text-[23px] text-[25px]",
  h6: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "font-semibold sm:text-[18px] md:text-[20px] text-[22px]",
  body2: "text-[20px]",
  body3: "text-[18px]",
  body4: "text-[16px]",
  body5: "font-medium text-[14px]",
  body6: "font-medium text-[12.61px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
