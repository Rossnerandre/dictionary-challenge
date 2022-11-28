import {Theme, alpha} from '@mui/material/styles';

// ----------------------------------------------------------------------

type BackgroundBlurProps = {
  blur?: number;
  opacity?: number;
  color?: string;
};

// ----------------------------------------------------------------------

export default function cssStyles(theme?: Theme) {
  return {
    bgBlur: (props?: BackgroundBlurProps) => {
      const color = props?.color || theme?.palette.background.default || '#000000';
      const blur = props?.blur || 6;
      const opacity = props?.opacity || 0.8;

      return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`, // Fix on Mobile
        backgroundColor: alpha(color, opacity),
      };
    },
  };
}
