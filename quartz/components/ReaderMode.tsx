// @ts-ignore
import readerModeScript from "./scripts/readermode.inline"
import styles from "./styles/readermode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ReaderMode: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "readermode")}>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" role="img" aria-label="Würfel 5">
  <title>Würfel 5</title>
  <rect x="6" y="6" width="88" height="88" rx="12" ry="12" fill="#ffffff" stroke="#000000" stroke-width="6"/>
  <circle cx="28" cy="28" r="8" fill="#000000"/>
  <circle cx="28" cy="72" r="8" fill="#000000"/>
  <circle cx="72" cy="28" r="8" fill="#000000"/>
  <circle cx="72" cy="72" r="8" fill="#000000"/>
  <circle cx="50" cy="50" r="8" fill="#000000"/>
</svg>
    </button>
  )
}

ReaderMode.beforeDOMLoaded = readerModeScript
ReaderMode.css = styles

export default (() => ReaderMode) satisfies QuartzComponentConstructor
