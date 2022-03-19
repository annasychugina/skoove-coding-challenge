export enum EShadow {
  S = 'Small',
}

type Shadow = {
  elevation: string;
  shadowColor: string;
};

export const ShadowsSizes: Record<EShadow, number> = {
  [EShadow.S]: 1,
};
export const ShadowOpacities: Record<EShadow, number> = {
  [EShadow.S]: 0.5,
};

export const makeShadow = (
  shadow?: EShadow,
  color: string = 'rgba(0,0,0,0.8)',
): Shadow | {} =>
  shadow
    ? {
        elevation: `${ShadowsSizes[shadow]}`,
        shadowColor: color,
        shadowOpacity: `${ShadowOpacities[shadow]}`,
      }
    : {};
