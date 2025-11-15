import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  activeIndex = 0,
  onCardClick,
  onCardChange,
  skewAmount = 6,
  easing = 'power1.out',
  children
}) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const total = childArr.length;
  const refs = useMemo(() => childArr.map(() => React.createRef()), [total]);
  const container = useRef(null);

  // Initial placement
  useEffect(() => {
    refs.forEach((r, i) => {
      const relative = (i - activeIndex + total) % total; // front card => 0
      placeNow(r.current, makeSlot(relative, cardDistance, verticalDistance, total), skewAmount);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Animate reposition when activeIndex changes
  useEffect(() => {
    refs.forEach((r, i) => {
      const relative = (i - activeIndex + total) % total;
      const slot = makeSlot(relative, cardDistance, verticalDistance, total);
      gsap.to(r.current, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        skewY: skewAmount,
        duration: 0.9,
        ease: easing,
        onStart: () => {
          if (relative === 0 && onCardChange) {
            onCardChange(i);
          }
        },
        onUpdate: () => {
          gsap.set(r.current, { zIndex: slot.zIndex });
        }
      });
    });
  }, [activeIndex, cardDistance, verticalDistance, skewAmount, easing, total, onCardChange, refs]);

  const rendered = childArr.map((child, i) => (
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  ));

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[-5%] translate-y-[-3%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[10%] max-[768px]:translate-y-[12%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[15%] max-[480px]:translate-y-[17%] max-[480px]:scale-[0.55]"
      style={{ width, height }}>
      {rendered}
    </div>
  );
};

CardSwap.displayName = 'CardSwap';
export default CardSwap;
