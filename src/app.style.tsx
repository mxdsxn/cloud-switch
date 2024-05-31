import styled from 'styled-components'

export const Container = styled.div`
  --width: 400px;
  --aspect_ratio: 8/3;
  --speed: 6s;
  --slide-ease: cubic-bezier(.4,-0.3,.6,1.3);
	--easing: var(--slide-ease);
	--bg-day: hsl(219, 30%, 88%);
	--bg-night: hsl(219, 30%, 12%, .9);
	--bg: var(--bg-day);

	background: var(--bg);
  transition: background var(--speed) var(--easing);
  width: 100vw;
  height: 100vh;

:after {
  content: "";
  position: absolute;
  inset: 0;
  box-shadow:
    calc(var(--width) * 0) calc(var(--width) * -0.025) calc(var(--width) * 0.025) 0 hsl(210 10% 10% / 0.15) inset,
    calc(var(--width) * 0) calc(var(--width) * 0.025) calc(var(--width) * 0.025) 0 hsl(210 10% 10% / 0.65) inset;
  border-radius: 100vh;
}

  &[data-dark-mode="true"] {
    --bg: var(--bg-night);
  }
`


export const Sun = styled.div`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 100vh;
  background: yellow;
  position: relative;
  transition: translate var(--speed) var(--easing);
  overflow: hidden;
`

export const Moon = styled.div`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 100vh;
  background: gray;
  position: absolute;
  transition: translate var(--speed) ease-in-out;
`

export const StarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
  box-sizing: border-box;
  clip-path: inset( 0 0 0 0 round 100vh);
`

export const SwitchContainer = styled.button`
  border: none;
  padding: 0;

  position: relative;
  cursor: pointer;
  aspect-ratio: var(--aspect_ratio);
  width: var(--width);
  border-radius: 100vw;
  transition: background var(--speed) var(--easing);
	background: hsl(
		calc(204 + (var(--dark, 0) * 25))
		calc((53 - (var(--dark, 0) * 28)) * 1%)
		calc((47 - (var(--dark, 0) * 31)) * 1%)
	);

  &[data-dark-mode="true"] {
    --bg: var(--bg-night);
    --dark: 1;

    ${Sun}{
      translate: calc(var(--width) - (3 / 8 * var(--width)));
    }

    ${Moon}{
      translate: 0%;
    }
  }

  &[data-dark-mode="false"] {
    ${Sun}{
    }

    ${Moon}{
      translate: 100%;
    }
  }
`